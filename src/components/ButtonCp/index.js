import React from 'react'
import PropTypes from 'prop-types'
import './style.less'

export const ButtonCp = ({
  _componentName,
  buttonLabel,
  onClick,
  disabled,
  shake,
  icon,
  type
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
    <button
      style={{
        animation: shake ? 'shake 0.82s cubic-bezier(.36,.07,.19,.97) both' : ''
      }}
      disabled={disabled}
      className={disabled ? `${_componentName}-disabled` : _componentName}
      onClick={onClick}
      type={type === 'submit' ? 'submit' : 'button'}>
      {icon}
      {buttonLabel}
    </button>
  )
}

// Component props and default prop values
ButtonCp.propTypes = {
  _componentName: PropTypes.string,
  disabled: PropTypes.bool,
  shake: PropTypes.bool,
  buttonLabel: PropTypes.string,
  onClick: PropTypes.func,
  icon: PropTypes.element,
  type: PropTypes.string
}

ButtonCp.defaultProps = {
  _componentName: 'button-component',
  disabled: false,
  shake: false,
  buttonLabel: PropTypes.string,
  onClick: () => {},
  icon: <div />,
  type: 'button'
}
