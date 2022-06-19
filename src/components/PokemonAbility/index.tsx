import LoadingIndicator from 'components/Loading'
import { useGetPokemonAbilityByNameQuery } from 'redux/pokemonApi'
import { EffectEntry } from 'types/pokemonAbility'
import { capitalizeString } from 'utils/index'

type Props = {
  abilityName: string
}

const PokemonAbility = ({ abilityName }: Props) => {
  const { data, isLoading, isError } =
    useGetPokemonAbilityByNameQuery(abilityName)
  console.log(data)

  function retrievedAbilityDescription(
    effectEntries: EffectEntry[] | undefined
  ) {
    if (!effectEntries) return 'No ability description found'
    return effectEntries.filter((effect) => effect.language.name === 'en')[0]
      .effect
  }

  return isLoading ? (
    <LoadingIndicator />
  ) : (
    <>
      <h3 className="text-xl text-breathomix-main underline">
        {capitalizeString(abilityName)}
      </h3>
      <p>{retrievedAbilityDescription(data?.effect_entries)}</p>
    </>
  )
}

export default PokemonAbility
