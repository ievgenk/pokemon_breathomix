import { capitalizeString } from 'utils'

test('Capitalazies string succesfully', () => {
  expect(capitalizeString('lowercasestring')).toBe('Lowercasestring')
})
