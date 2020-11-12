import React from 'react'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import {KEYS} from '../../settings'
import {TransactionProvider} from '../../context/transactionContext'
import './style.less'

import NotFoundPg from '../NotFoundPg'
import TransactionsListPg from '../Transactions/TransactionListPg'
import NewTransactionPg from '../Transactions/NewTransactionPg'

class ManagerPg extends React.Component {
  _pageName = 'manager-page'

  constructor(props) {
    super(props)

    this.route = null

    window.onbeforeunload = () => {
      window.scrollTo(0, 0)
    }
  }

  componentDidMount() {
    if (this.route && this.route.history) {
      this.route.history.listen(this.handleRouteChange)
      this.handleRouteChange(this.route.history.location)
    }
  }

  // -------------------------------------------------------------------------//
  // Requests
  // -------------------------------------------------------------------------//

  // -------------------------------------------------------------------------//
  // Event Handlers
  // -------------------------------------------------------------------------//

  handleRouteChange = (location) => {
    if (location) {
      let parsedLocation = location.pathname

      if (parsedLocation.substr(1).indexOf('/') !== -1) {
        parsedLocation = parsedLocation.substr(
          0,
          parsedLocation.substr(1).indexOf('/') + 1
        )

        switch (parsedLocation) {
          case '/':
            break
          default:
          // pass
        }
      }
    }
  }

  // -------------------------------------------------------------------------//
  // Render
  // -------------------------------------------------------------------------//
  render() {
    return (
      <Router
        ref={(input) => {
          this.route = input
        }}>
        <TransactionProvider>
          <div className={`${this._pageName}`}>
            <Switch>
              <Route
                exact
                path={KEYS.pageKeys.transactionList}
                component={TransactionsListPg}
              />
              <Route
                exact
                path={KEYS.pageKeys.newTransaction}
                component={NewTransactionPg}
              />
              <Route component={NotFoundPg} />
            </Switch>
          </div>
        </TransactionProvider>
      </Router>
    )
  }
}

export default ManagerPg
