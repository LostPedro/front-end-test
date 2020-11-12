import React, {Component} from 'react'

const TransactionContext = React.createContext()

class TransactionProvider extends Component {
  // Context state
  state = {
    transaction: {
      list: [],
      totalAmount: 0,
      count: 0,
      madeRequest: false
    }
  }

  // Method to update state
  setTransaction = (transaction) => {
    this.setState({transaction})
  }

  render() {
    const {children} = this.props
    const {transaction} = this.state
    const {setTransaction} = this

    return (
      <TransactionContext.Provider
        value={{
          transaction,
          setTransaction
        }}>
        {children}
      </TransactionContext.Provider>
    )
  }
}

export default TransactionContext

export {TransactionProvider}
