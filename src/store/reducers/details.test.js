import detailsReducers from './details'

describe('details reducers', () => {
  test('FETCH_DETAIL_SUCCESS', () => {
    expect(detailsReducers(
      {},
      {
        type: 'FETCH_DETAIL_SUCCESS',
        payload: { name: 'testPokemon' }
      }
    )).toEqual({
      testPokemon: {
        name: 'testPokemon',
        price: 462
      }
    });
  })
})
