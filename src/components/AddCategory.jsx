import { useState } from 'react'

function AddCategory () {
  const [inputValue, setInputValue] = useState('Hola mundo')

  const onInputChange = ({ target }) => {
    setInputValue(target.value)
  }

  const onSubmit = (e) => {
    e.preventDefault()
    console.log(inputValue)
  }
  return (
    <form onSubmit={onSubmit}>
      <input placeholder='Search Category' onChange={onInputChange} value={inputValue} type='text' />
    </form>
  )
}

export default AddCategory
