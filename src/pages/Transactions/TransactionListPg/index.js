import React from 'react'

import moment from 'moment'
import t from 'typy'
import {TransactionListItemCp} from '../../../components/TransactionListItemCp'
import {ButtonCp} from '../../../components/ButtonCp'
import {SETTINGS, IMAGES, KEYS} from '../../../settings'
import {applyPriceMask, openErrorNotification} from '../../../utils'
import {getTransactionList} from '../../../services'
import TransactionContext from '../../../context/transactionContext'

import './style.less'

class TransactionListPg extends React.Component {
  static contextType = TransactionContext

  _pageName = 'transaction-list-page'
  // -------------------------------------------------------------------------//
  // Component Lifecycle
  // -------------------------------------------------------------------------//

  constructor(props) {
    super(props)

    this.state = {
      loading: false
    }
  }

  componentDidMount() {
    const {transaction} = this.context
    if (t(transaction, 'list').safeArray.length === 0) {
      this.getTransactionListRequest()
    }
  }

  // -------------------------------------------------------------------------//
  // Requests
  // -------------------------------------------------------------------------//
  getTransactionListRequest = async () => {
    const {loading} = this.state
    const {setTransaction} = this.context

    this.setState({loading: true})

    try {
      const response = await getTransactionList()
      if (response) {
        let totalTransactionValue = 0
        if (t(response).safeArray.length > 0) {
          totalTransactionValue = this.calculateTotalTransactionValue(response)
        }

        const newTransaction = {
          list: response,
          totalAmount: totalTransactionValue,
          count: t(response).safeArray.length
        }
        setTransaction(newTransaction)
        this.setState(
          {
            loading: false
          },
          () => {
            console.log(loading)
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

  onClickAddButton = () => {
    const {history} = this.props

    history.push({
      pathname: `${KEYS.pageKeys.newTransaction}`
    })
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
    const {transaction} = this.context
    return (
      <div className={`${this._pageName}-header`}>
        {this.renderHeaderItem(
          SETTINGS.TransactionListPg.header.transactionLabel,
          t(transaction, 'count').safeNumber
        )}
        {this.renderHeaderItem(
          SETTINGS.TransactionListPg.header.totalValueLabel,
          SETTINGS.TransactionListPg.currency(
            applyPriceMask(t(transaction, 'totalAmount').safeNumber)
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
    const {transaction} = this.context
    const transactionList = t(transaction, 'list').safeArray.reverse()
    const today = moment()
    return (
      <div className={`${this._pageName}-list`}>
        {transactionList.map((item, i) => {
          return (
            <React.Fragment key={String(i)}>
              <TransactionListItemCp
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
              <div className={`${this._pageName}-line`} />
            </React.Fragment>
          )
        })}
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
          <ButtonCp
            onClick={this.onClickAddButton}
            buttonLabel={SETTINGS.TransactionListPg.addButtonLabel}
            icon={
              <img
                className={`${this._pageName}-add-icon`}
                src={IMAGES.icons.plus}
                alt={SETTINGS.TransactionListPg.plusIcon}
              />
            }
          />
        </div>
      </div>
    )
  }
}

TransactionListPg.propTypes = {}

TransactionListPg.defaultProps = {}

export default TransactionListPg
