import { render, screen } from '@testing-library/react'
import { GifItem } from '../../components/GifItem'

const GIF = {
  id: 1234,
  title: 'Hello i am Rick',
  url: 'http://localhost/www.google.com'
}

describe('Test in hook useFetchGifs()', () => {
  test('should has match with the snapshot', () => {
    render(<GifItem {...GIF} />)
    expect(screen.container).toMatchSnapshot()
  })
  test('should has two props, url end title', () => {
    render(<GifItem {...GIF} />)
    // screen.debug()
    // expect(screen.getByAltText(/hello i am Ric/i).alt).toBe(GIF.title)
    // expect(screen.getByAltText(/Hello i am Rick/).src).toBe(GIF.url)
    // console.log(screen.getByRole('img').src)
    const { src, alt } = screen.getByRole('img')
    expect(src).toBe(GIF.url)
    expect(alt).toBe(GIF.title)
  })
})
