import aboutReducer from './about'

describe('about reducers', () => {
  describe('UPDATE_USER_POKEMONS', () => {
    test('new pokemon in the list', () => {
      expect(aboutReducer(
        {
          name: 'User',
          age: 42,
          avatar: 'avatar.jpg',
          pokemons: []
        },
        {
          type: 'UPDATE_USER_POKEMONS',
          payload: [{
            name: 'testPokemon',
            nb: 1
          }]
        }
      )).toEqual({
        name: 'User',
        age: 42,
        avatar: 'avatar.jpg',
        pokemons: [{
          name: 'testPokemon',
          nb: 1
        }]
      });
    })

    test('already existing pokemon in the list', () => {
      expect(aboutReducer(
        {
          name: 'User',
          age: 42,
          avatar: 'avatar.jpg',
          pokemons: [{
            name: 'testPokemon',
            nb: 1
          }]
        },
        {
          type: 'UPDATE_USER_POKEMONS',
          payload: [{
            name: 'testPokemon',
            nb: 1
          }]
        }
      )).toEqual({
        name: 'User',
        age: 42,
        avatar: 'avatar.jpg',
        pokemons: [{
          name: 'testPokemon',
          nb: 2
        }]
      });
    })
  })
})
