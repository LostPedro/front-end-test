import React from 'react'
import t from 'typy'
import {SETTINGS, IMAGES} from '../../../settings'
import {openErrorNotification} from '../../../utils'
import {NavHeaderCp} from '../../../components/NavHeaderCp'
import {FormCp} from '../../../components/FormCp'
import {LoadingCp} from '../../../components/LoadingCp'
import {postTransaction, getTransactionList} from '../../../services'
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

  componentDidMount() {
    const {transaction} = this.context

    if (!t(transaction, 'madeRequest').safeBoolean) {
      this.getTransactionListRequest()
    }
  }

  // -------------------------------------------------------------------------//
  // Requests
  // -------------------------------------------------------------------------//

  // -------------------------------------------------------------------------//
  // Requests
  // -------------------------------------------------------------------------//
  getTransactionListRequest = async () => {
    const {setTransaction} = this.context
    let newTransaction = {
      madeRequest: true
    }

    this.setState({loading: true})
    try {
      const response = await getTransactionList()
      if (response) {
        let totalTransactionValue = 0
        if (t(response).safeArray.length > 0) {
          totalTransactionValue = this.calculateTotalTransactionValue(response)
        }

        newTransaction = {
          ...newTransaction,
          list: response,
          totalAmount: totalTransactionValue,
          count: t(response).safeArray.length
        }

        setTransaction(newTransaction)
        this.setState({
          loading: false
        })
      }
    } catch (e) {
      this.setState({loading: false}, () => {
        setTransaction(newTransaction)
        openErrorNotification(t(e).safeObject)
      })
    }
  }

  postTransactionRequest = async (input) => {
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
            this.onClickGoBack()
          }
        )
      }
    } catch (e) {
      this.setState({loading: false}, () => {
        openErrorNotification(t(e).safeObject)
      })
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
    const {loading} = this.state
    return (
      <div className={this._pageName}>
        <LoadingCp visible={loading} />
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
