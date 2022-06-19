import { configureStore } from '@reduxjs/toolkit'
import { pokemonApi } from './pokemonApi'
import selectedPokemonReducer from './slices/selectedPokemonSlice'

export const store = configureStore({
  reducer: {
    [pokemonApi.reducerPath]: pokemonApi.reducer,
    selectedPokemon: selectedPokemonReducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(pokemonApi.middleware)
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
