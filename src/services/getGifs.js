const API_KEY = 'ACfNj5a5Eb6pbSaNyHvxQTXQRJcxp3cl'

async function getGifs(category) {
  const API_URL = `https://api.giphy.com/v1/gifs/search?api_key=${API_KEY}&q=${category}&limit=10`
  try {
    const request = await fetch(API_URL)
    const { data = [] } = await request.json()

    const gifs = data.map((img) => ({
      id: img.id,
      title: img.title,
      url: img.images.downsized_medium.url
    }))
    return await gifs
  } catch (error) {
    console.error(error)
  }
}

export { getGifs }
