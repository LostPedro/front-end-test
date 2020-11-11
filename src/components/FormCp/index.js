import React, {useEffect} from 'react'
import PropTypes from 'prop-types'
import './style.less'
import t from 'typy'
import useSignUpForm from './customHooks'
import {SETTINGS} from '../../settings'
import {ButtonCp} from '../ButtonCp'

export const FormCp = ({
  _componentName,
  postUsersRequest,
  sendButtonText,
  requiredLabel,
  namePlaceholder
}) => {
  // -------------------------------------------------------------------------//
  // Hooks
  // -------------------------------------------------------------------------//
  const sendForm = (input) => {
    postUsersRequest(input)
  }

  const {
    shake,
    inputs,
    handleInputChange,
    handleSubmit,
    buttonEnabled,
    nameError
  } = useSignUpForm(sendForm)

  useEffect(() => {
    const elements = document.getElementsByTagName('Input')
    if (t(elements).safeArray.length > 0) {
      for (let i = 0; i < elements.length; i += 1) {
        elements[i].oninvalid = (e) => {
          e.target.setCustomValidity('')
          if (!e.target.validity.valid) {
            e.target.setCustomValidity(requiredLabel)
          }
        }
        elements[i].oninput = (e) => {
          e.target.setCustomValidity('')
        }
      }
    }
  }, [])
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
  const renderErrors = (error) => {
    return <span className={`${_componentName}-error-text`}>{error}</span>
  }

  const renderInputs = () => {
    return (
      <div className={`${_componentName}-inputs-container`}>
        <div className={`${_componentName}-input-wrapper`}>
          <input
            className={`${_componentName}-input`}
            type="text"
            name="name"
            placeholder={namePlaceholder}
            onChange={handleInputChange}
            value={inputs.name}
            required
            style={{
              borderColor: nameError ? 'red' : ''
            }}
          />
          {renderErrors(nameError)}
        </div>
      </div>
    )
  }

  const renderButton = () => {
    return (
      <div className={`${_componentName}-register-button-wrapper`}>
        <ButtonCp
          shake={shake}
          disabled={!buttonEnabled}
          buttonLabel={sendButtonText}
          type="submit"
        />
      </div>
    )
  }

  return (
    <div className={_componentName}>
      <form className={`${_componentName}-form`} onSubmit={handleSubmit}>
        {renderInputs()}
        {renderErrors()}
        {renderButton()}
      </form>
    </div>
  )
}

// Component props and default prop values
FormCp.propTypes = {
  _componentName: PropTypes.string,
  postUsersRequest: PropTypes.func,
  sendButtonText: PropTypes.string,
  requiredLabel: PropTypes.string,
  namePlaceholder: PropTypes.string
}

FormCp.defaultProps = {
  _componentName: 'form-component',
  postUsersRequest: () => {},
  sendButtonText: SETTINGS.FormCp.registerButtonLabel,
  requiredLabel: SETTINGS.FormCp.requiredLabel,
  namePlaceholder: SETTINGS.FormCp.namePlaceholder
}
