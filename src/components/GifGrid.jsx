import { useEffect, useState } from 'react'
import { getGifs } from '../services/getGifs'
import { GifItem } from '../components/GifItem'
function GifGrid ({ category }) {
  const [images, setImages] = useState([])

  const getImage = async () => {
    const newImages = await getGifs()
    setImages(newImages)
  }

  useEffect(() => {
    getImage()
  }, [])
  return (
    <>
      <h3>{category}</h3>
      <di>
        {images.map(images => <GifItem key={images.id} {...images} />)}
      </di>

    </>
  )
}
export default GifGrid
