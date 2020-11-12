import React from 'react'
import t from 'typy'
import {SETTINGS, IMAGES} from '../../../settings'
import {openErrorNotification} from '../../../utils'
import {NavHeaderCp} from '../../../components/NavHeaderCp'
import {FormCp} from '../../../components/FormCp'
import {postTransaction} from '../../../services'
import TransactionContext from '../../../context/transactionContext'

import './style.less'

class NewTransactionPg extends React.Component {
  static contextType = TransactionContext

  _pageName = 'new-transaction-page'
  // -------------------------------------------------------------------------//
  // Component Lifecycle
  // -------------------------------------------------------------------------//

  constructor(props) {
    super(props)

    this.state = {
      loading: false
    }
  }

  componentDidMount() {}

  // -------------------------------------------------------------------------//
  // Requests
  // -------------------------------------------------------------------------//
  postTransactionRequest = async (input) => {
    const {loading} = this.state
    const {transaction, setTransaction} = this.context
    this.setState({loading: true})

    try {
      const response = await postTransaction(input)
      if (response) {
        const transactionListArray = t(transaction, 'list').safeArray

        transactionListArray.push(response)

        const totalTransactionValue = this.calculateTotalTransactionValue(
          transactionListArray
        )

        const newTransaction = {
          list: transactionListArray,
          totalAmount: totalTransactionValue,
          count: t(transactionListArray).safeArray.length
        }
        setTransaction(newTransaction)

        this.setState(
          {
            loading: false
          },
          () => {
            console.log('loading', loading)
            this.onClickGoBack()
          }
        )
      }
    } catch (e) {
      openErrorNotification(t(e, 'error.message').safeString)
      this.setState({loading: false})
    }
  }

  // -------------------------------------------------------------------------//
  // Event Handlers
  // -------------------------------------------------------------------------//
  onClickGoBack = () => {
    const {history} = this.props
    history.goBack()
  }

  // -------------------------------------------------------------------------//
  // Other Functions
  // -------------------------------------------------------------------------//
  calculateTotalTransactionValue = (array) => {
    const total = array.reduce((acc, curr) => acc + curr.amount, 0)
    return total
  }

  // -------------------------------------------------------------------------//
  // Render
  // -------------------------------------------------------------------------//
  render() {
    return (
      <div className={this._pageName}>
        <NavHeaderCp
          title={SETTINGS.NewTransactionPg.title}
          onClickLeft={this.onClickGoBack}
          leftIcon={
            <img
              className={`${this._pageName}-back-icon`}
              src={IMAGES.icons.backArrow}
              alt={SETTINGS.NewTransactionPg.backIcon}
            />
          }
        />
        <div className={`${this._pageName}-form-container`}>
          <FormCp postRequest={this.postTransactionRequest} />
        </div>
      </div>
    )
  }
}

NewTransactionPg.propTypes = {}

NewTransactionPg.defaultProps = {}

export default NewTransactionPg
