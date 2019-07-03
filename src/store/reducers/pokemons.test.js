import pokemonsReducer from './pokemons';

describe('pokemons reducer', () => {
  test('FETCH_POKEMONS_LOADING', () => {
    expect(pokemonsReducer(
      {
        list: [],
        offset: 0,
        loading: false
      },
      { type: 'FETCH_POKEMONS_LOADING' })
    ).toEqual({
      list: [],
      offset: 0,
      loading: true
    });
  })

  test('FETCH_POKEMONS_SUCCESS', () => {
    expect(pokemonsReducer(
      {
        list: [],
        offset: 0,
        loading: false
      },
      {
        type: 'FETCH_POKEMONS_SUCCESS',
        payload: {
          results: [
            { name: 'testPokemon' }
          ]
        }
      }
    )).toEqual({
      list: [
        { name: 'testPokemon', price: 462 }
      ],
      offset: 20,
      loading: false
    });
  })
})
