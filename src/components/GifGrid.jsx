import { GifItem } from '../components/GifItem'
import { useFetchGifs } from '../hooks/useFetchGifs'
import { LoadingMessage } from './LoadingMessage'
function GifGrid ({ category }) {
  const { images, isLoading } = useFetchGifs(category)
  return (
    <>
      <h2 className='title-category'>{category}</h2>
      <LoadingMessage isLoading={isLoading} />
      <div className='card-grid'>
        {images.map(images => <GifItem key={images.id} {...images} />)}
      </div>

    </>
  )
}
export { GifGrid }
