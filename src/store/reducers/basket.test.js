import basketReducer from './basket'

describe('basket reducer', () => {
  describe('ADD_TO_BASKET', () => {
    test('new item', () => {
      expect(basketReducer(
        {
          items: [],
          totalPrice: 0,
          nbItems: 0
        },
        {
          type: 'ADD_TO_BASKET',
          payload: 'testPokemon'
        }
      )).toEqual({
        items: [{ name: 'testPokemon', nb: 1, price: 462 }],
        nbItems: 1,
        totalPrice: 462
      });
    })

    test('already existing item', () => {
      expect(basketReducer(
        {
          items: [{ name: 'testPokemon', nb: 1, price: 462 }],
          nbItems: 1,
          totalPrice: 462
        },
        {
          type: 'ADD_TO_BASKET',
          payload: 'testPokemon'
        }
      )).toEqual({
        items: [{ name: 'testPokemon', nb: 2, price: 462 }],
        nbItems: 2,
        totalPrice: 924
      });
    })
  })

  describe('REMOVE_FROM_BASKET', () => {
    test('no item with this name', () => {
      expect(basketReducer(
        {
          items: [{ name: 'testPokemon', nb: 1, price: 462 }],
          nbItems: 1,
          totalPrice: 462
        },
        {
          type: 'REMOVE_FROM_BASKET',
          payload: 'wrongPokemonName'
        }
      )).toEqual({
        items: [{ name: 'testPokemon', nb: 1, price: 462 }],
        nbItems: 1,
        totalPrice: 462
      })
    })

    test('only one item with this name', () => {
      expect(basketReducer(
        {
          items: [{ name: 'testPokemon', nb: 1, price: 462 }],
          nbItems: 1,
          totalPrice: 462
        },
        {
          type: 'REMOVE_FROM_BASKET',
          payload: 'testPokemon'
        }
      )).toEqual({
        items: [],
        nbItems: 0,
        totalPrice: 0
      })
    })

    test('multiple items with this name', () => {
      expect(basketReducer(
        {
          items: [{ name: 'testPokemon', nb: 2, price: 462 }],
          nbItems: 2,
          totalPrice: 924
        },
        {
          type: 'REMOVE_FROM_BASKET',
          payload: 'testPokemon'
        }
      )).toEqual({
        items: [{ name: 'testPokemon', nb: 1, price: 462 }],
        nbItems: 1,
        totalPrice: 462
      })
    })
  })

  test('RESET_BASKET', () => {
    expect(basketReducer(
      {
        items: [{ name: 'testPokemon', nb: 2, price: 462 }],
        nbItems: 2,
        totalPrice: 924
      },
      {
        type: 'RESET_BASKET'
      }
    )).toEqual({
      items: [],
      totalPrice: 0,
      nbItems: 0
    })
  })
})
