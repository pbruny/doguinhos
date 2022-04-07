import React from 'react'

const validateTypes = {
  email: {
    regex:
      /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i,
    message: 'Preencha um email válido',
  },
}

const useForm = (type) => {
  const [value, setValue] = React.useState('')
  const [error, setError] = React.useState('')

  const onChange = ({ target }) => {
    if (error) {
      validate(target.value)
    }
    setValue(target.value)
  }

  const validate = (value) => {
    if (type === false) return true

    if (value.length === 0) {
      setError('Preencha com um valor')
      return false
    } else if (validateTypes[type] && !validateTypes[type].regex.test(value)) {
      setError(validateTypes[type].message)
      return false
    } else {
      setError(null)
      return true
    }
  }

  return {
    value,
    setValue,
    onChange,
    error,
    validate: () => validate(value),
    onBlur: () => validate(value),
  }
}

export default useForm
