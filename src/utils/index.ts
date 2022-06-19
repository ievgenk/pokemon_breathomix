export function capitalizeString(stringToBeCapitalized: string) {
  const capitalizeString = `${stringToBeCapitalized
    .slice(0, 1)
    .toUpperCase()}${stringToBeCapitalized.slice(
    1,
    stringToBeCapitalized.length
  )}`
  return capitalizeString
}
