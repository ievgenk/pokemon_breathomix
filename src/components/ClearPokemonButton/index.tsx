import { useAppDispatch } from 'hooks/hooks'
import { selectPokemon } from 'redux/slices/selectedPokemonSlice'

const ClearPokemonButton = () => {
  const dispatch = useAppDispatch()
  return (
    <>
      <button onClick={() => dispatch(selectPokemon(null))}>
        Clear Pokemon
      </button>
    </>
  )
}

export default ClearPokemonButton
