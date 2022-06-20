import { configureStore, combineReducers } from '@reduxjs/toolkit'
import { pokemonApi } from './pokemonApi'
import type { PreloadedState } from '@reduxjs/toolkit'
import selectedPokemonReducer from './slices/selectedPokemonSlice'

const rootReducer = combineReducers({
  [pokemonApi.reducerPath]: pokemonApi.reducer,
  selectedPokemon: selectedPokemonReducer
})

export const setupStore = (preloadedState?: PreloadedState<RootState>) => {
  return configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(pokemonApi.middleware),
    preloadedState
  })
}

export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore['dispatch']
