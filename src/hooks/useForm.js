import { useEffect, useMemo, useState } from 'react'

export const useForm = (initialForm = {}, formValidations = {}) => {
  const [formState, setFormState] = useState(initialForm)
  const [formValidation, setFormValidation] = useState({})

  const handleInputChange = ({ target }) => {
    const { name, value } = target
    setFormState({
      ...formState,
      [name]: value,
    })
  }

  const isFormValid = useMemo(() => {
    for (const field of Object.keys(formValidation)) {
      if (formValidation[field] !== null) return false
    }

    return true
  }, [formValidation])

  const handleResetForm = () => {
    setFormState(initialForm)
  }

  const createValidations = () => {
    let formFields = {}

    for (let formField of Object.keys(formValidations)) {
      const fieldName = `${formField}Valid`
      const [fn, message] = formValidations[formField]
      formFields[fieldName] = fn(formState[formField]) ? null : message
    }
    setFormValidation(formFields)
  }

  useEffect(() => {
    createValidations()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [formState])

  useEffect(() => {
    setFormState(initialForm)
  }, [initialForm])

  return {
    ...formState,
    formState,
    handleInputChange,
    handleResetForm,
    ...formValidation,
    isFormValid,
  }
}
