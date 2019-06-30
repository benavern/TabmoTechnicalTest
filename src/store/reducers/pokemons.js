const defaultState = {
  list: [],
  offset: 0,
  loading: false
}

export default (state = defaultState, action) => {
  switch (action.type) {
    case 'FETCH_POKEMONS_LOADING':
      return {
        ...state,
        loading: true
      };

    case 'FETCH_POKEMONS_SUCCESS':
      return {
        ...state,
        list: [
          ...state.list,
          ...action.payload.results.map(pokemon => ({
            ...pokemon,
            price: pokemon.name.length * 42
          }))
        ],
        offset: state.offset + 20,
        loading: false
      };

    default:
      return state;
  }
}
