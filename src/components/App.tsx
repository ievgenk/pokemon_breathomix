import { useGetAllPokemonsQuery } from '../redux/pokemonApi'
import PokemonCard from './PokemonCard'
import PokemonSearch from './PokemonSearch'

function App() {
  const { data, error, isLoading } = useGetAllPokemonsQuery()

  return (
    <main className="w-screen h-screen">
      <h1>Hello</h1>
      <PokemonSearch />
      <PokemonCard />
    </main>
  )
}

export default App
