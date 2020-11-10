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
          {marginTop: 24}
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
        {this.renderListItem()}
        <div className={`${this._pageName}-line`} />
      </div>
    )
  }

  renderListItem = () => {
    return (
      <div className={`${this._pageName}-item-wrapper`}>
        <div className={`${this._pageName}-item-text-line-1`}>
          <span className={`${this._pageName}-name`}>João S Silva</span>
          <span className={`${this._pageName}-status`}>Paga</span>
        </div>
        <div className={`${this._pageName}-item-text-line-2`}>
          <span className={`${this._pageName}-date`}>10/10/2010 10:30</span>
          <span className={`${this._pageName}-money-amount`}>R$ 100,00</span>
        </div>
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
