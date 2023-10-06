import { useState } from 'react'
import AddCategory from './components/AddCategory'

function App () {
  const [categories, setCategories] = useState([
    'Spiderman',
    'Hora de Aventura'
  ])

  // const addCategory = () => setCategories([...categories, 'rick and morty'])
  const addCategory = () => setCategories(cat => [...cat, 'rick and morty'])

  return (
    <>
      {/* Title */}
      <h1>Welcome to app de gifs</h1>

      {/* Input */}
      <AddCategory />

      <button onClick={addCategory}>Add Categries</button>
      <ol>
        <h3>Categories</h3>{' '}
        {categories.map((category, i) => (
          <li key={i}>{category}</li>
        ))}
      </ol>
    </>
  )
}

export default App
