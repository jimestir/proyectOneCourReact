import { render, screen } from '@testing-library/react'
import { GifGrid } from '../../components/GifGrid'
import { useFetchGifs } from '../../hooks/useFetchGifs'

jest.mock('../../hooks/useFetchGifs')

describe('test in GifGrid.jsx', () => {
  const CATEGORY = 'Demons Slayer'
  test('Should show the loading inicialy', () => {
    useFetchGifs.mockReturnValue({
      images: [],
      isLoading: true
    })

    render(<GifGrid category={CATEGORY} />)
    expect(screen.getByText('Loading...'))
    expect(screen.getByText(CATEGORY))
  })

  test('should mostrar items cuando se carga las imagenes useFetchGifs', () => {
    const GIFS = [
      {
        id: 'abc',
        title: 'Rick and morty',
        url: 'https://localhost/rickandmorty.jpg'
      },
      {
        id: 'def',
        title: 'spiderman',
        url: 'https://localhost/spiderman.jpg'
      }
    ]
    useFetchGifs.mockReturnValue({
      images: GIFS,
      isLoading: false
    })
    render(<GifGrid category={CATEGORY} />)
    screen.debug()
    expect(screen.getAllByRole('img').length).toBe(2)
  })
})
