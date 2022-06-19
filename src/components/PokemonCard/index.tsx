import { useSelector } from 'react-redux'
import { selectSelectedPokemon } from 'redux/slices/selectedPokemonSlice'
import PokemonAbility from 'components/PokemonAbility'
import { capitalizeString } from 'utils/index'

const PokemonCard = () => {
  const selectedPokemon = useSelector(selectSelectedPokemon)
  const upperCasePokemonName = capitalizeString(selectedPokemon?.name || '')
  return (
    <div className="flex overflow-scroll flex-col gap-4 p-9 w-[800px] h-[900px] rounded-md border-2 border-breathomix-main shadow-xl shadow-breathomix-main/40">
      {selectedPokemon ? (
        <>
          <div className="flex items-center">
            <h1 className="text-5xl text-breathomix-main">
              {upperCasePokemonName}
            </h1>
            <img
              src={selectedPokemon.sprites.front_default}
              className="w-28 h-28"
            />
          </div>
          <h2 className="text-3xl text-breathomix-main">Abilities:</h2>
          {selectedPokemon?.abilities.map((ability) => {
            return (
              <PokemonAbility
                key={ability.ability.name}
                abilityName={ability.ability.name}
              />
            )
          })}
        </>
      ) : null}
    </div>
  )
}

export default PokemonCard
