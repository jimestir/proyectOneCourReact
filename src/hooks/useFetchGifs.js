import { useEffect, useState } from 'react'
import { getGifs } from '../services/getGifs'
export const useFetchGifs = (category) => {
  const [images, setImages] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  const getImage = async () => {
    const newImages = await getGifs(category)
    setImages(newImages)
    setIsLoading(false)
  }

  useEffect(() => {
    getImage()
  }, [])

  return {
    images,
    isLoading
  }
}
