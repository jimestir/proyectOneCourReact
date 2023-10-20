import PropTypes from 'prop-types'
function GifItem ({ id, title, url }) {
  return (
    <div className='card'>
      <img src={url} alt={title} />
      <span>{id}</span>
    </div>
  )
}

export { GifItem }

GifItem.propTypes = {
  title: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired
}
