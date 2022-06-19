import { useGetAllPokemonsQuery } from '../redux/pokemonApi'
import PokemonCard from './PokemonCard'
import PokemonSearch from './PokemonSearch'
import ResetPokemonButton from './ClearPokemonButton'

function App() {
  const { error, isLoading } = useGetAllPokemonsQuery()

  return (
    <main className="w-screen h-screen">
      <PokemonSearch />
      <ResetPokemonButton />
      <PokemonCard />
    </main>
  )
}

export default App
