import { useState } from 'react'
import PropTypes from 'prop-types'

function AddCategory ({ onNewCategory }) {
  const [inputValue, setInputValue] = useState('')

  const onInputChange = ({ target }) => {
    setInputValue(target.value)
  }

  const onSubmit = (e) => {
    e.preventDefault()
    const inputValueTrim = inputValue.trim()
    if (inputValueTrim.length <= 1) return
    onNewCategory(inputValue)
    setInputValue('')
  }
  return (
    <form onSubmit={onSubmit} aria-label='form'>
      <input placeholder='Search gifs...' onChange={onInputChange} value={inputValue} type='text' />
    </form>
  )
}

AddCategory.propTypes = {
  onNewCategory: PropTypes.func.isRequired
}

export { AddCategory }
