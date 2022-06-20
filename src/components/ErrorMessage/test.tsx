import { screen } from '@testing-library/react'
import { renderWithProviders } from 'test/testUtils'

import ErrorMessage from 'components/ErrorMessage'

describe('<ErrorMessage/>', () => {
  it('should render the ErrorMessage', () => {
    renderWithProviders(<ErrorMessage message="test-error" />)

    screen.getByText(/This error occured:/i)
    const errorMessage = screen.getByText(/test-error/i)
    expect(errorMessage).toBeInTheDocument()
  })
})
