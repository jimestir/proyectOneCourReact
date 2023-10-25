import { fireEvent, render, screen } from '@testing-library/react'
import { AddCategory } from '../../components/AddCategory'

describe('test in AddCategory.jsx', () => {
  test('should change value in text box', () => {
    render(<AddCategory onNewCategory={() => {}} />)
    const input = screen.getByRole('textbox')
    fireEvent.input(input, { target: { value: 'rick and morty' } })
    expect(input.value).toBe('rick and morty')
  })

  test('should callding onNewCategory yes input has value', () => {
    const INPUT_VALUE = 'Jujutsu no kaisen'
    const onNewCategory = jest.fn()

    render(<AddCategory onNewCategory={onNewCategory} />)

    const input = screen.getByRole('textbox')
    const form = screen.getByRole('form')

    fireEvent.input(input, { target: { value: INPUT_VALUE } })
    fireEvent.submit(form)

    expect(input.value).toBe('')
    expect(onNewCategory).toHaveBeenCalled()
    expect(onNewCategory).toHaveBeenCalledTimes(1)
    expect(onNewCategory).toHaveBeenCalledWith(INPUT_VALUE)
  })

  test('do not should callding yes input has empty', () => {
    const onNewCategory = jest.fn()
    render(<AddCategory onNewCategory={onNewCategory} />)

    const form = screen.getByRole('form')
    fireEvent.submit(form)

    expect(onNewCategory).toHaveBeenCalledTimes(0)
    expect(onNewCategory).not.toHaveBeenCalled()
  })
})
