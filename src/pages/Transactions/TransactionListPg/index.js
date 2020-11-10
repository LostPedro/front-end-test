import React from 'react'
import {TransactionListItemCp} from '../../../components/TransactionListItemCp'
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

  renderHeader = () => {
    const {transactionCount, totalTransactionValue} = this.state
    return (
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
          {marginTop: '24px'}
        )}
      </div>
    )
  }

  renderHeaderItem = (label, info, style) => {
    return (
      <div style={style} className={`${this._pageName}-header-item`}>
        <span className={`${this._pageName}-header-item-label`}>{label}</span>
        <span className={`${this._pageName}-header-item-info`}>{info}</span>
      </div>
    )
  }

  renderList = () => {
    return (
      <div className={`${this._pageName}-list`}>
        <TransactionListItemCp
          name="João S Silva"
          date="10/10/2010 10:30"
          moneyAmount={SETTINGS.TransactionListPg.header.currency(
            applyPriceMask(0)
          )}
          status="Paga"
        />
        <div className={`${this._pageName}-line`} />
      </div>
    )
  }

  render() {
    return (
      <div className={this._pageName}>
        {this.renderHeader()}
        <div className={`${this._pageName}-line`} />
        {this.renderList()}
      </div>
    )
  }
}

TransactionListPg.propTypes = {}

TransactionListPg.defaultProps = {}

export default TransactionListPg
