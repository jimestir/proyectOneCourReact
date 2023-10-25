import { GifItem } from '../components/GifItem'
import { useFetchGifs } from '../hooks/useFetchGifs'
import { LoadingMessage } from './LoadingMessage'
import PropTypes from 'prop-types'
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
GifGrid.propTypes = {
  category: PropTypes.string.isRequired
}
export { GifGrid }
