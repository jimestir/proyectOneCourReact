import { renderHook, waitFor } from '@testing-library/react'
import { useFetchGifs } from '../../hooks/useFetchGifs'

describe('test in hook useFetchGifs()', () => {
  test('should de devolver un array vacio', () => {
    const { result } = renderHook(() => useFetchGifs('Hola mundo'))
    const { images, isLoading } = result.current

    expect(images.length).toBe(0)
    expect(isLoading).toBeTruthy()
  })

  test('should de devolver un array con las images y isLoading in false', async () => {
    const { result } = renderHook(() => useFetchGifs('hola mundo'))

    await waitFor(
      () => expect(result.current.images.length).toBeGreaterThan(0),
      {
        timeout: 1000
      }
    )

    const { images, isLoading } = result.current

    expect(images.length).toBeGreaterThan(0)
    expect(isLoading).toBeFalsy()
  })
})
