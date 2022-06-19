import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import Pokemon from '../types/pokemon'

type GetAllPokemonsResponse = {
  results: Pokemon[]
  count: number
  next: string | null
  previous: string | null
}

export const pokemonApi = createApi({
  reducerPath: 'pokemonApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://pokeapi.co/api/v2/' }),
  endpoints: (builder) => ({
    getAllPokemons: builder.query<Pokemon[], void>({
      // Limit 1126 in order to fetch all of the pokemon names
      query: () => `pokemon?limit=1126`,
      transformResponse: (response: GetAllPokemonsResponse) => response.results
    })
  })
})

export const { useGetAllPokemonsQuery } = pokemonApi
