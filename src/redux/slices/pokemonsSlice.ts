import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '../store'
import Pokemon from '../../interfaces/pokemon'

export interface PokemonsState {
  pokemons: Pokemon[] | null
}

const initialState: PokemonsState = {
  pokemons: null
}

export const pokemonSlice = createSlice({
  name: 'pokemons',
  initialState,
  reducers: {}
})

export const {} = pokemonSlice.actions
export default pokemonSlice.reducer
