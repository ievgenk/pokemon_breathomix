import { useSelector } from 'react-redux'
import { selectSelectedPokemon } from 'redux/slices/selectedPokemonSlice'
import PokemonAbility from 'components/PokemonAbility'

const PokemonCard = () => {
  const selectedPokemon = useSelector(selectSelectedPokemon)
  return (
    <div className="w-6/12 h-3/4 border-4 border-breathomix-main">
      <h1>{selectedPokemon?.name}</h1>
      <h2>Abilities</h2>
      {selectedPokemon?.abilities.map((ability) => {
        return (
          <PokemonAbility
            key={ability.ability.name}
            abilityName={ability.ability.name}
          />
        )
      })}
    </div>
  )
}

export default PokemonCard
