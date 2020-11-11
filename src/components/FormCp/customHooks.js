import {useState, useEffect} from 'react'
import t from 'typy'
import {SETTINGS} from '../../settings'

import {nameSurnameValidate} from '../../utils'

const useSignUpForm = (callback) => {
  const [inputs, setInputs] = useState({
    name: ''
  })
  const [buttonEnabled, setButtonEnabled] = useState(false)
  const [shake, setShake] = useState(false)
  const [nameError, setNameError] = useState('')

  useEffect(() => {
    setNameError('')
    let nameEmpty = true

    if (t(inputs, 'name').safeString.length > 0) {
      nameEmpty = false
    }

    if (nameEmpty) {
      return setButtonEnabled(false)
    }
    return setButtonEnabled(true)
  }, [inputs])

  const formValidate = () => {
    let nameErr = false

    if (!nameSurnameValidate(t(inputs, 'name').safeString)) {
      setNameError(SETTINGS.FormCp.nameError)
      nameErr = true
    }

    if (nameErr) {
      return false
    }
    return true
  }

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

  const handleInputChange = (event) => {
    event.persist(event)
    switch (event.target.name) {
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
    nameError
  }
}

export default useSignUpForm
