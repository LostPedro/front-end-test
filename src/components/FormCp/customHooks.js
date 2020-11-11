import t from 'typy'
import {useState, useEffect} from 'react'
import {SETTINGS} from '../../settings'

import {
  applyCpfMask,
  cardMask,
  nameSurnameValidate,
  cpfValidate,
  creditCardValidate,
  expireDateValidate,
  cvvValidate,
  expireDateMask,
  applyPriceMask,
  removePriceMask
} from '../../utils'

const useSignUpForm = (callback) => {
  // -------------------------------------------------------------------------//
  // Hooks
  // -------------------------------------------------------------------------//
  const standardValues = {
    name: '',
    cpf: '',
    cardNumber: '',
    expireDate: '',
    cvv: '',
    transactionAmount: ''
  }

  const [inputs, setInputs] = useState(standardValues)
  const [buttonEnabled, setButtonEnabled] = useState(false)
  const [shake, setShake] = useState(false)
  const [error, setError] = useState(standardValues)

  // -------------------------------------------------------------------------//
  // Effects
  // -------------------------------------------------------------------------//
  useEffect(() => {
    setError({
      name: '',
      cpf: '',
      cardNumber: ''
    })

    let nameEmpty = true
    let cpfEmpty = true
    let cardNumberEmpty = true
    let expireDateEmpty = true
    let cvvEmpty = true
    let transactionAmountEmpty = true

    if (t(inputs, 'name').safeString.length > 0) {
      nameEmpty = false
    }
    if (t(inputs, 'cpf').safeString.length > 0) {
      cpfEmpty = false
    }
    if (t(inputs, 'cardNumber').safeString.length > 0) {
      cardNumberEmpty = false
    }
    if (t(inputs, 'expireDate').safeString.length > 0) {
      expireDateEmpty = false
    }
    if (t(inputs, 'cvv').safeString.length > 0) {
      cvvEmpty = false
    }
    if (t(inputs, 'transactionAmount').safeString.length > 0) {
      transactionAmountEmpty = false
    }

    if (
      !nameEmpty &&
      !cpfEmpty &&
      !cardNumberEmpty &&
      !expireDateEmpty &&
      !cvvEmpty &&
      !transactionAmountEmpty
    ) {
      return setButtonEnabled(true)
    }
    return setButtonEnabled(false)
  }, [inputs])

  // -------------------------------------------------------------------------//
  // Validations
  // -------------------------------------------------------------------------//

  const formValidate = () => {
    let nameErr = false
    let cpfErr = false
    let cardNumberErr = false
    let expireDateErr = false
    let cvvErr = false
    let transactionAmountErr = false

    if (!nameSurnameValidate(t(inputs, 'name').safeString)) {
      setError((e) => ({
        ...e,
        name: SETTINGS.FormCp.error.name
      }))
      nameErr = true
    }

    if (!cpfValidate(t(inputs, 'cpf').safeString)) {
      setError((e) => ({
        ...e,
        cpf: SETTINGS.FormCp.error.cpf
      }))
      cpfErr = true
    }

    if (!creditCardValidate(t(inputs, 'cardNumber').safeString)) {
      setError((e) => ({
        ...e,
        cardNumber: SETTINGS.FormCp.error.cardNumber
      }))

      cardNumberErr = true
    }

    if (!expireDateValidate(t(inputs, 'expireDate').safeString)) {
      setError((e) => ({
        ...e,
        expireDate: SETTINGS.FormCp.error.expireDate
      }))

      expireDateErr = true
    }

    if (!cvvValidate(t(inputs, 'cvv').safeString)) {
      setError((e) => ({
        ...e,
        cvv: SETTINGS.FormCp.error.cvv
      }))

      cvvErr = true
    }

    if (t(inputs, 'transactionAmount').safeString.length > 0) {
      const amountString = removePriceMask(
        t(inputs, 'transactionAmount').safeString
      )

      const amount = parseFloat(amountString.replace(/\D/g, ''))
      if (amount === 0) {
        setError((e) => ({
          ...e,
          transactionAmount: SETTINGS.FormCp.error.transactionAmount
        }))

        transactionAmountErr = true
      }
    }

    if (
      nameErr ||
      cpfErr ||
      cardNumberErr ||
      cvvErr ||
      expireDateErr ||
      transactionAmountErr
    ) {
      return false
    }
    return true
  }

  // -------------------------------------------------------------------------//
  // Submit
  // -------------------------------------------------------------------------//

  const handleSubmit = (event) => {
    if (event) {
      event.preventDefault()
    }

    const validationPassed = formValidate()

    if (validationPassed) {
      callback(inputs)
    } else {
      setShake(true)
      setTimeout(() => {
        setShake(false)
      }, 1000)
    }
  }

  // -------------------------------------------------------------------------//
  // onChange Text
  // -------------------------------------------------------------------------//

  const handleInputChange = (event) => {
    event.persist(event)
    switch (event.target.name) {
      case 'cpf':
        setInputs((input) => ({
          ...input,
          [event.target.name]: applyCpfMask(event.target.value)
        }))
        break
      case 'cardNumber':
        setInputs((input) => ({
          ...input,
          [event.target.name]: cardMask(event.target.value)
        }))
        break
      case 'expireDate':
        setInputs((input) => ({
          ...input,
          [event.target.name]: expireDateMask(event.target.value)
        }))
        break
      case 'transactionAmount':
        setInputs((input) => ({
          ...input,
          [event.target.name]: applyPriceMask(event.target.value, 'R$ ')
        }))
        break
      default:
        setInputs((input) => ({
          ...input,
          [event.target.name]: event.target.value
        }))
        break
    }
  }

  return {
    handleSubmit,
    handleInputChange,
    inputs,
    buttonEnabled,
    shake,
    error
  }
}

export default useSignUpForm
