import { screen } from '@testing-library/react'
import selectedPokemon from 'mocks/selectedPokemon'
import { renderWithProviders } from 'test/testUtils'

import PokemonAbility from 'components/PokemonAbility'

describe('<PokemonAbility />', () => {
  it('should render the PokemonAbility with correct Ability text', async () => {
    renderWithProviders(<PokemonAbility abilityName="gluttony" />, {
      preloadedState: {
        selectedPokemon: {
          selectedPokemon
        }
      }
    })

    screen.findByText('Loading...')
    const abilityDescription = await screen.findByText(
      /This Pokémon eats any held Berry triggered by low HP when it falls below 50% of its HP, regardless of the Berry's usual threshold/i
    )
    const abilityTitle = await screen.findByText(/Gluttony/i)
    expect(abilityTitle).toBeInTheDocument()
    expect(abilityDescription).toBeInTheDocument()
  })
})
