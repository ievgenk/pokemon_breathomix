import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Pokemon } from 'types/pokemon'
import type { RootState } from '../store'

interface SelectedPokemonState {
  selectedPokemon: Pokemon | null
}

const initialState: SelectedPokemonState = {
  selectedPokemon: null
}

export const selectedPokemonSlice = createSlice({
  name: 'selectedPokemon',
  initialState,
  reducers: {
    selectPokemon: (state, action: PayloadAction<Pokemon | null>) => {
      state.selectedPokemon = action.payload
    }
  }
})

export const { selectPokemon } = selectedPokemonSlice.actions

export const selectSelectedPokemon = (state: RootState) =>
  state.selectedPokemon.selectedPokemon

export default selectedPokemonSlice.reducer
