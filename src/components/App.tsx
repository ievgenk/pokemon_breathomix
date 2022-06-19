import { useGetAllPokemonsQuery } from '../redux/pokemonApi'

function App() {
  const { data, error, isLoading } = useGetAllPokemonsQuery()

  return (
    <main>
      <h1>Hello</h1>
    </main>
  )
}

export default App
