import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { PokemonMetaData, PokemonMetaDataResult } from 'types/pokemonMetaData'
import { Pokemon } from 'types/pokemon'
import { PokemonAbility } from 'types/pokemonAbility'

export const pokemonApi = createApi({
  reducerPath: 'pokemonApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://pokeapi.co/api/v2/' }),
  endpoints: (builder) => ({
    getAllPokemons: builder.query<PokemonMetaDataResult[], void>({
      // Limit 1126 in order to fetch all of the pokemon names
      query: () => `pokemon?limit=1126`,
      transformResponse: (response: PokemonMetaData) => response.results
    }),
    getPokemonByName: builder.query<Pokemon, string>({
      query: (name) => `pokemon/${name}`
    }),
    getPokemonAbilityByName: builder.query<PokemonAbility, string>({
      query: (abilityName) => `ability/${abilityName}`
    })
  })
})

export const {
  useGetAllPokemonsQuery,
  useGetPokemonByNameQuery,
  useGetPokemonAbilityByNameQuery
} = pokemonApi
