import { screen } from '@testing-library/react'
import { renderWithProviders } from 'test/testUtils'

import ClearPokemonButton from 'components/ClearPokemonButton'

describe('<ClearPokemonButton/>', () => {
  it('should render the ClearPokemonButton', async () => {
    renderWithProviders(<ClearPokemonButton />)

    screen.findByText('Loading...')
    const button = await screen.findByRole('button', {
      name: /Clear Selected Pokemon/i
    })
    expect(button).toBeInTheDocument()
  })
})
