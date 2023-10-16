import { useState } from 'react'
import AddCategory from './components/AddCategory'
import GifGrid from './components/GifGrid'
import './style.css'

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
        <h2>Categories</h2>
        {categories.map((category) => (
          <GifGrid key={category} category={category} />
        ))}
      </ol>
    </>
  )
}

export default App
