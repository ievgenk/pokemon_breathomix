import { screen } from '@testing-library/react'
import { renderWithProviders } from 'test/testUtils'

import LoadingIndicator from 'components/Loading'

describe('<LoadingIndicator/>', () => {
  it('should render the LoadingIndicator', () => {
    renderWithProviders(<LoadingIndicator />)
    const loadingIndicator = screen.getByText(/Loading.../i)
    expect(loadingIndicator).toBeInTheDocument()
  })
})
