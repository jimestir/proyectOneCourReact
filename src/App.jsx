import { useState } from 'react'
import AddCategory from './components/AddCategory'

function App () {
  const [categories, setCategories] = useState([
    'Spiderman',
    'Hora de Aventura'
  ])

  // const addCategory = () => setCategories([...categories, 'rick and morty'])
  // const addCategory = () => setCategories(cat => [...cat, 'rick and morty'])
  const onAddCategory = (onNewCategory) => {
    const conditional = categories.find((cat) => cat.toLowerCase() === onNewCategory.toLowerCase())
    console.log(!conditional)
    if (conditional) return

    setCategories(cat => [...cat, onNewCategory])
  }
  return (
    <>
      {/* Title */}
      <h1>Welcome to app de gifs</h1>

      {/* Input */}
      <AddCategory
        onNewCategory={event => onAddCategory(event)}
      />

      {/* <button onClick={addCategory}>Add Categries</button> */}
      <ol>
        <h3>Categories</h3>{' '}
        {categories.map((category, i) => (
          <li key={category}>{category}</li>
        ))}
      </ol>
    </>
  )
}

export default App
