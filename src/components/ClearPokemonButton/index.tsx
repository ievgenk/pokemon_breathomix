import { useAppDispatch } from 'hooks/hooks'
import { selectPokemon } from 'redux/slices/selectedPokemonSlice'

const ClearPokemonButton = () => {
  const dispatch = useAppDispatch()
  return (
    <>
      <button
        onClick={() => dispatch(selectPokemon(null))}
        type="button"
        className="inline-flex items-center py-2 px-4 text-sm font-medium bg-breathomix-main rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 shadow-sm"
      >
        Clear Selected Pokemon
      </button>
    </>
  )
}

export default ClearPokemonButton
