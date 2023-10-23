import { getGifs } from '../../services/getGifs'

describe('Test in GetGifs()', () => {
  test('should returning of gif with src, alt end title', async () => {
    const gifs = await getGifs('Rick and morty')

    expect(gifs.length).toBeGreaterThan(0)
    // console.log(gifs[0])
    expect(gifs[0]).toEqual({
      id: expect.any(String),
      title: expect.any(String),
      url: expect.any(String)
    })
  })
})
