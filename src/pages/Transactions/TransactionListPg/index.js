import React from 'react'
import {SETTINGS} from '../../../settings'

import './style.less'

class TransactionListPg extends React.Component {
  _pageName = 'transaction-list-page'
  // -------------------------------------------------------------------------//
  // Component Lifecycle
  // -------------------------------------------------------------------------//

  constructor(props) {
    super(props)

    this.state = {}
  }

  // -------------------------------------------------------------------------//
  // Requests
  // -------------------------------------------------------------------------//

  // -------------------------------------------------------------------------//
  // Event Handlers
  // -------------------------------------------------------------------------//

  // -------------------------------------------------------------------------//
  // Other Functions
  // -------------------------------------------------------------------------//

  // -------------------------------------------------------------------------//
  // Render
  // -------------------------------------------------------------------------//

  renderHeaderItem = (label, info) => {
    return (
      <div className={`${this._pageName}-item`}>
        <span className={`${this._pageName}-label`}>{label}</span>
        <span className={`${this._pageName}-info`}>{info}</span>
      </div>
    )
  }

  render() {
    return (
      <div className={this._pageName}>
        <div className={`${this._pageName}-header`}>
          {this.renderHeaderItem(
            SETTINGS.TransactionListPg.transactionLabel,
            '0000'
          )}
          {this.renderHeaderItem(
            SETTINGS.TransactionListPg.totalValueLabel,
            '0000'
          )}
        </div>
      </div>
    )
  }
}

TransactionListPg.propTypes = {}

TransactionListPg.defaultProps = {}

export default TransactionListPg
