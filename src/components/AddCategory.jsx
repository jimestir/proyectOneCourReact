import { useState } from 'react'

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
    <form onSubmit={onSubmit}>
      <input placeholder='Search gifs...' onChange={onInputChange} value={inputValue} type='text' />
    </form>
  )
}

export { AddCategory }
