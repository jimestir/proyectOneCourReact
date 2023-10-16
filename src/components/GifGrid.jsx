import { GifItem } from '../components/GifItem'
import { useFetchGifs } from '../hooks/useFetchGifs'
import { LoadingMessage } from './LoadingMessage'
function GifGrid ({ category }) {
  const { images, isLoading } = useFetchGifs(category)
  return (
    <>
      <h3>{category}</h3>
      <LoadingMessage isLoading={isLoading} />
      <div>
        {images.map(images => <GifItem key={images.id} {...images} />)}
      </div>

    </>
  )
}
export { GifGrid }
