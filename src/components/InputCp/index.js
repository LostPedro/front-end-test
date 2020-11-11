import React, {useState} from 'react'
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
  const [fieldActive, setFieldActive] = useState(false)

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
  const activateField = () => {
    setFieldActive(true)
  }

  const disableFocus = (e) => {
    if (e.target.value === '') {
      setFieldActive(false)
    }
  }

  // -------------------------------------------------------------------------//
  // Other functions
  // -------------------------------------------------------------------------//
  // const renderErrors = (err) => {
  //   return <span className={`${_componentName}-error-text`}>{err}</span>
  // }

  // -------------------------------------------------------------------------//
  // Rendering
  // -------------------------------------------------------------------------//

  return (
    <div style={wrapperStyle} className={`${_componentName}`}>
      <label htmlFor={name} className={fieldActive ? `field-active` : ''}>
        {placeholder}
      </label>
      <input
        id={name}
        className={`${_componentName}-input`}
        type={type}
        name={name}
        onChange={(e) => onChange(e)}
        onFocus={activateField}
        onBlur={disableFocus}
        value={value}
        required={required}
        style={{
          borderColor: error ? 'red' : ''
        }}
      />
      {/* {renderErrors(error)} */}
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
