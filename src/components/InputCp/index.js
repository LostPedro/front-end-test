import React from 'react'
import PropTypes from 'prop-types'
import './style.less'

export const InputCp = ({
  _componentName,
  type,
  name,
  placeholder,
  value,
  error,
  wrapperStyle,
  onChange,
  required
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
  const renderErrors = (err) => {
    return <span className={`${_componentName}-error-text`}>{err}</span>
  }
  // -------------------------------------------------------------------------//
  // Rendering
  // -------------------------------------------------------------------------//

  return (
    <div style={wrapperStyle} className={`${_componentName}`}>
      <input
        className={`${_componentName}-input`}
        type={type}
        name={name}
        placeholder={placeholder}
        onChange={(e) => onChange(e)}
        value={value}
        required={required}
        style={{
          borderColor: error ? 'red' : ''
        }}
      />
      {renderErrors(error)}
    </div>
  )
}

// Component props and default prop values
InputCp.propTypes = {
  _componentName: PropTypes.string,
  type: PropTypes.string,
  name: PropTypes.string,
  placeholder: PropTypes.string,
  value: PropTypes.string,
  error: PropTypes.string,
  wrapperStyle: PropTypes.shape({
    width: PropTypes.string
  }),
  onChange: PropTypes.func,
  required: PropTypes.bool
}

InputCp.defaultProps = {
  _componentName: 'input-component',
  type: '',
  name: '',
  placeholder: '',
  value: '',
  error: '',
  wrapperStyle: {},
  onChange: () => {},
  required: true
}
