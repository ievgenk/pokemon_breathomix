import { rest } from 'msw'
import allPokemonsMock from 'mocks/allPokemons'
import gluttonyAbility from 'mocks/abilityMock'

const baseUrl = 'https://pokeapi.co/api/v2'

export const handlers = [
  rest.get(`${baseUrl}/pokemon?limit=1126`, (req, res, ctx) => {
    const response = allPokemonsMock
    return res(ctx.json(response))
  }),
  rest.get(`${baseUrl}/ability/gluttony`, (req, res, ctx) => {
    const response = gluttonyAbility
    return res(ctx.json(response))
  })
]
