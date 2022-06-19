import Fuse from 'fuse.js'
import {
  useGetAllPokemonsQuery,
  useGetPokemonByNameQuery
} from 'redux/pokemonApi'
import { useEffect, useState } from 'react'

const PokemonSearch = () => {
  const { data: pokemons } = useGetAllPokemonsQuery()
  const pokemonNames = pokemons?.map((pokemon) => pokemon.name) || []
  const fuse = new Fuse(pokemonNames, { includeMatches: true, threshold: 0.3 })

  const [inputField, setInputField] = useState('')
  const [selectedPokemon, setSelectedPokemon] = useState<string | null>(null)
  const [suggestedPokemonNames, setSuggestedPokemonNames] = useState(() =>
    fuse.search(inputField)
  )

  const { data: fetchedSelectedPokemon } = useGetPokemonByNameQuery(
    selectedPokemon || '',
    {
      skip: !selectedPokemon
    }
  )

  useEffect(() => {
    setSuggestedPokemonNames(fuse.search(inputField))
  }, [inputField])

  return (
    <>
      <div>
        <div className="flex">
          <input
            type="text"
            placeholder="Search pokemon"
            value={inputField}
            onChange={(e) => setInputField(e.target.value)}
          />
          <button
            className="border-2"
            onClick={() => setSelectedPokemon(inputField)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 h-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </button>
        </div>
        {suggestedPokemonNames.length ? (
          <ul role="list" className="divide-y-2 divide-breathomix-main">
            {suggestedPokemonNames.map(({ item, refIndex }) => (
              <li key={`${refIndex}-${item}`} className="py-4" tabIndex={0}>
                {item}
              </li>
            ))}
          </ul>
        ) : null}
      </div>
    </>
  )
}

export default PokemonSearch
