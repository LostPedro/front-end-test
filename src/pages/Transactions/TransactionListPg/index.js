import React from 'react'
import {message} from 'antd'
import moment from 'moment'
import t from 'typy'
import {TransactionListItemCp} from '../../../components/TransactionListItemCp'
import {SETTINGS} from '../../../settings'
import {applyPriceMask} from '../../../utils'
import {getTransactionList} from '../../../services'

import './style.less'

class TransactionListPg extends React.Component {
  _pageName = 'transaction-list-page'
  // -------------------------------------------------------------------------//
  // Component Lifecycle
  // -------------------------------------------------------------------------//

  constructor(props) {
    super(props)

    this.state = {
      transactionsArray: [],
      totalTransactionValue: 0,
      transactionCount: 0,
      loading: false
    }
  }

  componentDidMount() {
    this.getTransactionListRequest()
  }

  // -------------------------------------------------------------------------//
  // Requests
  // -------------------------------------------------------------------------//
  getTransactionListRequest = async () => {
    const {loading} = this.state
    this.setState({loading: true})

    try {
      const response = await getTransactionList()
      if (response) {
        let totalTransactionValue = 0
        if (t(response).safeArray.length > 0) {
          totalTransactionValue = this.calculateTotalTransactionValue(response)
        }
        this.setState(
          {
            loading: false,
            transactionsArray: response,
            transactionCount: t(response).safeArray.length,
            totalTransactionValue
          },
          () => {
            console.log('response', response)
            console.log(loading)
          }
        )
      }
    } catch (e) {
      message.error(t(e, 'message').safeString)
      this.setState({loading: false})
    }
  }
  // -------------------------------------------------------------------------//
  // Event Handlers
  // -------------------------------------------------------------------------//

  onClickAddButton = () => {
    console.log('Apertei')
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
          SETTINGS.TransactionListPg.currency(
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
    const {transactionsArray} = this.state
    const today = moment()
    return (
      <div className={`${this._pageName}-list`}>
        {t(transactionsArray).safeArray.map((item, i) => {
          return (
            <TransactionListItemCp
              key={String(i)}
              name={t(item, 'credit_card_holder_name').safeString}
              date={moment(today).format('DD/MM/YYYY  HH:mm')}
              moneyAmount={SETTINGS.TransactionListPg.currency(
                applyPriceMask(t(item, 'amount').safeNumber)
              )}
              status={
                SETTINGS.TransactionListPg.list.status[
                  t(item, 'status').safeString
                ]
              }
            />
          )
        })}

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
        <div className={`${this._pageName}-add-button-wrapper`}>
          <button
            className={`${this._pageName}-add-button`}
            onClick={this.onClickAddButton}
            type="button">
            {SETTINGS.TransactionListPg.addButtonLabel}
          </button>
        </div>
      </div>
    )
  }
}

TransactionListPg.propTypes = {}

TransactionListPg.defaultProps = {}

export default TransactionListPg
