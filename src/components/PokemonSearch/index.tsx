import Fuse from 'fuse.js'
import React, { useEffect, useState } from 'react'

import {
  useGetAllPokemonsQuery,
  useGetPokemonByNameQuery
} from 'redux/pokemonApi'
import { selectPokemon } from 'redux/slices/selectedPokemonSlice'
import { useAppDispatch } from 'hooks/hooks'
import ResetPokemonButton from 'components/ClearPokemonButton'

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
      <div className="flex flex-col">
        {nameError ? (
          <p className="mb-5 text-lg text-red-400">
            Invalid pokemon name, please make sure to enter a valide name.
          </p>
        ) : null}
        <div className="flex justify-between w-[800px]">
          <div>
            <form
              onSubmit={handleSubmit}
              className="flex relative items-center w-96"
            >
              <input
                type="text"
                placeholder="Search pokemon"
                value={inputField}
                onChange={handleInputChange}
                className="p-2 w-full h-9 placeholder:text-breathomix-main bg-gray-50 rounded-md border border-breathomix-main focus:outline-none focus:ring-2 focus:ring-offset-2 "
              />
              <button
                type="submit"
                className="absolute inset-y-0 right-0 py-2 px-4 bg-breathomix-main rounded-r-md focus:outline-none focus:ring-2 focus:ring-offset-2 shadow-sm"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-5 h-5 fill-white"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
            </form>
            {suggestedPokemonNames.length ? (
              <ul
                role="list"
                className="overflow-scroll absolute w-96 max-h-96 bg-white rounded-md border border-breathomix-main divide-y-2 divide-breathomix-main"
              >
                {suggestedPokemonNames.map(({ item, refIndex }) => (
                  <li
                    key={`${refIndex}-${item}`}
                    className="p-2 py-4 bg-white hover:bg-breathomix-main/60 focus:bg-breathomix-main/60"
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
          <ResetPokemonButton />
        </div>
      </div>
    </>
  )
}

export default PokemonSearch
