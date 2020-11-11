import React, {useEffect} from 'react'
import PropTypes from 'prop-types'
import './style.less'
import t from 'typy'
import useSignUpForm from './customHooks'
import {SETTINGS} from '../../settings'
import {ButtonCp} from '../ButtonCp'
import {InputCp} from '../InputCp'

export const FormCp = ({
  _componentName,
  postUsersRequest,
  sendButtonText,
  requiredLabel,
  placeholder
}) => {
  // -------------------------------------------------------------------------//
  // Hooks
  // -------------------------------------------------------------------------//

  // -------------------------------------------------------------------------//
  // Effects
  // -------------------------------------------------------------------------//
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
  // Event Handlers
  // -------------------------------------------------------------------------//
  const sendForm = (input) => {
    console.log('input', input)
    postUsersRequest(input)
  }

  // -------------------------------------------------------------------------//
  // Other functions
  // -------------------------------------------------------------------------//
  const {
    shake,
    inputs,
    handleInputChange,
    handleSubmit,
    buttonEnabled,
    error
  } = useSignUpForm(sendForm)

  // -------------------------------------------------------------------------//
  // Rendering
  // -------------------------------------------------------------------------//
  const renderSingleInput = (inputName, wrapperStyle) => {
    return (
      <InputCp
        wrapperStyle={wrapperStyle}
        type="text"
        name={`${inputName}`}
        placeholder={t(placeholder, `${inputName}`).safeString}
        onChange={handleInputChange}
        value={t(inputs, `${inputName}`).safeString}
        required
        error={t(error, `${inputName}`).safeString}
      />
    )
  }

  const renderAllInputs = () => {
    return (
      <div className={`${_componentName}-all-inputs-container`}>
        <div className={`${_componentName}-input-container`}>
          {renderSingleInput('name')}
        </div>
        <div className={`${_componentName}-input-container`}>
          {renderSingleInput('cpf')}
        </div>
        <div className={`${_componentName}-input-container`}>
          {renderSingleInput('cardNumber')}
        </div>
        <div className={`${_componentName}-input-container`}>
          {renderSingleInput('expireDate', {width: '58.53%'})}
          {renderSingleInput('cvv', {width: '39%'})}
        </div>
        <div className={`${_componentName}-input-container`}>
          {renderSingleInput('transactionAmount')}
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
        {renderAllInputs()}
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
  placeholder: PropTypes.shape({
    name: PropTypes.string,
    cpf: PropTypes.string,
    cardNumber: PropTypes.string,
    expireDate: PropTypes.string,
    cvv: PropTypes.string,
    transactionAmount: PropTypes.string
  })
}

FormCp.defaultProps = {
  _componentName: 'form-component',
  postUsersRequest: () => {},
  sendButtonText: SETTINGS.FormCp.registerButtonLabel,
  requiredLabel: SETTINGS.FormCp.requiredLabel,
  placeholder: {
    name: SETTINGS.FormCp.placeholder.name,
    cpf: SETTINGS.FormCp.placeholder.cpf,
    cardNumber: SETTINGS.FormCp.placeholder.cardNumber,
    expireDate: SETTINGS.FormCp.placeholder.expireDate,
    cvv: SETTINGS.FormCp.placeholder.cvv,
    transactionAmount: SETTINGS.FormCp.placeholder.transactionAmount
  }
}
