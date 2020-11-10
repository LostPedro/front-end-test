import React from 'react'
import {SETTINGS} from '../../../settings'
import {applyPriceMask} from '../../../utils'

import './style.less'

class TransactionListPg extends React.Component {
  _pageName = 'transaction-list-page'
  // -------------------------------------------------------------------------//
  // Component Lifecycle
  // -------------------------------------------------------------------------//

  constructor(props) {
    super(props)

    this.state = {
      totalTransactionValue: 0,
      transactionCount: 0
    }
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

  renderHeaderItem = (label, info, style) => {
    return (
      <div style={style} className={`${this._pageName}-header-item`}>
        <span className={`${this._pageName}-header-item-label`}>{label}</span>
        <span className={`${this._pageName}-header-item-info`}>{info}</span>
      </div>
    )
  }

  render() {
    const {transactionCount, totalTransactionValue} = this.state
    return (
      <div className={this._pageName}>
        <div className={`${this._pageName}-header`}>
          {this.renderHeaderItem(
            SETTINGS.TransactionListPg.header.transactionLabel,
            transactionCount
          )}
          {this.renderHeaderItem(
            SETTINGS.TransactionListPg.header.totalValueLabel,
            SETTINGS.TransactionListPg.header.currency(
              applyPriceMask(totalTransactionValue)
            ),
            {marginTop: 24}
          )}
        </div>
      </div>
    )
  }
}

TransactionListPg.propTypes = {}

TransactionListPg.defaultProps = {}

export default TransactionListPg
