import { useGetAllPokemonsQuery } from '../redux/pokemonApi'
import PokemonCard from './PokemonCard'
import PokemonSearch from './PokemonSearch'

function App() {
  const { error, isLoading } = useGetAllPokemonsQuery()

  return (
    <main className="flex flex-col gap-10 justify-center items-center w-screen h-screen">
      <PokemonSearch />
      <PokemonCard />
    </main>
  )
}

export default App
