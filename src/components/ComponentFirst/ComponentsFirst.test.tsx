import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { ComponentFirst } from './index'

describe('ComponentFirst', () => {
  it('should render ComponentSecond', async () => {
    render(<ComponentFirst />)

    expect(screen.getByTestId('test')).toBeInTheDocument()

    const bt = screen.getByText('click')
    expect(bt).toBeInTheDocument()

    await userEvent.click(bt)
    expect(screen.getByText(/Second/)).toBeInTheDocument()
    await userEvent.click(bt)
    expect(screen.queryByText(/Second/)).not.toBeInTheDocument()
  })
})
