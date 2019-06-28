export function fetchList () {
  return {
    type: 'FETCH_POKEMONS',
    payload: {
      page: 1
    }
  }
}
