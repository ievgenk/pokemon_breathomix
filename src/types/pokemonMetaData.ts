export interface PokemonMetaData {
  count: number
  next: null
  previous: null
  results: PokemonMetaDataResult[]
}

export interface PokemonMetaDataResult {
  name: string
  url: string
}
