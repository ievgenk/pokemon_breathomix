import { useGetAllPokemonsQuery } from '../redux/pokemonApi'
import ErrorMessage from './ErrorMessage'
import LoadingIndicator from './Loading'
import PokemonCard from './PokemonCard'
import PokemonSearch from './PokemonSearch'

function App() {
  const { isError, isLoading } = useGetAllPokemonsQuery()

  return (
    <main className="flex flex-col gap-10 justify-center items-center w-screen h-screen">
      {isError ? (
        <ErrorMessage message="Pokemons could not get loaded" />
      ) : null}
      {isLoading ? (
        <LoadingIndicator />
      ) : (
        <>
          <PokemonSearch />
          <PokemonCard />
        </>
      )}
    </main>
  )
}

export default App
