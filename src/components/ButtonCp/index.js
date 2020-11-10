import React from 'react'
import PropTypes from 'prop-types'
import './style.less'

export const ButtonCp = ({
  _componentName,
  buttonLabel,
  onClick,
  disabled,
  icon
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
      disabled={disabled}
      className={disabled ? `${_componentName}-disabled` : _componentName}
      onClick={() => onClick()}
      type="button">
      {icon}
      {buttonLabel}
    </button>
  )
}

// Component props and default prop values
ButtonCp.propTypes = {
  _componentName: PropTypes.string,
  disabled: PropTypes.bool,
  buttonLabel: PropTypes.string,
  onClick: PropTypes.func,
  icon: PropTypes.element
}

ButtonCp.defaultProps = {
  _componentName: 'button-component',
  disabled: false,
  buttonLabel: PropTypes.string,
  onClick: () => {},
  icon: <div />
}
