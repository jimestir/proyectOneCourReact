function GifItem ({ id, title, url }) {
  return (
    <div className='card'>
      <img src={url} alt={title} />
      <span>{id}</span>
    </div>
  )
}

export { GifItem }
