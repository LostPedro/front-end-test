import React from 'react'
import PropTypes from 'prop-types'
import './style.less'

export const TransactionListItemCp = ({
  _componentName,
  name,
  date,
  status,
  moneyAmount
}) => {
  // -------------------------------------------------------------------------//
  // Hooks
  // -------------------------------------------------------------------------//

  // -------------------------------------------------------------------------//
  // Effects
  // -------------------------------------------------------------------------//

  // -------------------------------------------------------------------------//
  // Requests
  // -------------------------------------------------------------------------//

  // -------------------------------------------------------------------------//
  // Event Handlers
  // -------------------------------------------------------------------------//

  // -------------------------------------------------------------------------//
  // Other functions
  // -------------------------------------------------------------------------//

  // -------------------------------------------------------------------------//
  // Rendering
  // -------------------------------------------------------------------------//

  return (
    <div className={`${_componentName}`}>
      <div className={`${_componentName}-item-text-line`}>
        <span className={`${_componentName}-name`}>{name}</span>
        <span className={`${_componentName}-status`}>{status}</span>
      </div>
      <div
        style={{marginTop: '8px'}}
        className={`${_componentName}-item-text-line`}>
        <span className={`${_componentName}-date`}>{date}</span>
        <span className={`${_componentName}-money-amount`}>{moneyAmount}</span>
      </div>
    </div>
  )
}

// Component props and default prop values
TransactionListItemCp.propTypes = {
  _componentName: PropTypes.string,
  name: PropTypes.string,
  date: PropTypes.string,
  status: PropTypes.string,
  moneyAmount: PropTypes.string
}

TransactionListItemCp.defaultProps = {
  _componentName: 'transaction-list-item-component',
  name: '',
  date: '',
  status: '',
  moneyAmount: ''
}
