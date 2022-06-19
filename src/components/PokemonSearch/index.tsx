import Fuse from 'fuse.js'
import React, { useEffect, useState } from 'react'

import {
  useGetAllPokemonsQuery,
  useGetPokemonByNameQuery
} from 'redux/pokemonApi'
import { selectPokemon } from 'redux/slices/selectedPokemonSlice'
import { useAppDispatch } from 'hooks/hooks'

const PokemonSearch = () => {
  const { data: pokemons } = useGetAllPokemonsQuery()
  const dispatch = useAppDispatch()
  const pokemonNames = pokemons?.map((pokemon) => pokemon.name) || []
  const fuse = new Fuse(pokemonNames, { includeMatches: true, threshold: 0.3 })

  const [inputField, setInputField] = useState('')
  const [nameError, setNameError] = useState(false)
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
    if (fetchedSelectedPokemon) dispatch(selectPokemon(fetchedSelectedPokemon))
  }, [fetchedSelectedPokemon])

  useEffect(() => {
    setSuggestedPokemonNames(fuse.search(inputField))
  }, [inputField])

  function setSelectedPokemonName(pokemonName: string) {
    if (nameError) setNameError(false)
    setSelectedPokemon(pokemonName)
    setInputField('')
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (pokemonNames.includes(inputField)) {
      setSelectedPokemonName(inputField)
    } else {
      setNameError(true)
    }
  }

  function handleInputChange(e: React.ChangeEvent<HTMLInputElement>) {
    if (nameError) setNameError(false)
    setInputField(e.target.value)
  }

  return (
    <>
      <div>
        <div className="flex">
          <form onSubmit={handleSubmit}>
            {nameError ? (
              <p>
                Invalid pokemon name, please make sure to enter a valide name.
              </p>
            ) : null}
            <input
              type="text"
              placeholder="Search pokemon"
              value={inputField}
              onChange={handleInputChange}
            />
            <button type="submit" className="border-2">
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
          </form>
        </div>
        {suggestedPokemonNames.length ? (
          <ul role="list" className="divide-y-2 divide-breathomix-main">
            {suggestedPokemonNames.map(({ item, refIndex }) => (
              <li
                key={`${refIndex}-${item}`}
                className="py-4"
                tabIndex={0}
                onClick={(e) =>
                  setSelectedPokemonName(e.currentTarget.innerText)
                }
                onKeyDown={(e) => {
                  if (e.key === 'Enter') {
                    setSelectedPokemonName(e.currentTarget.innerText)
                  }
                }}
              >
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
