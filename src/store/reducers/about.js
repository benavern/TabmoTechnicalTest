export default (state = {
  name: 'Jean',
  age: 25,
  avatar: 'https://vignette3.wikia.nocookie.net/fantendo/images/5/5c/Red_by_Xous_54.png/revision/latest?cb=20110707181842',
  pokemons: []
}, action) => {
  switch (action.type) {
    case 'UPDATE_USER_POKEMONS':
      return action.payload.reduce((newState, item) => {
        // add the bought pokemons to the state
        const index = newState.pokemons.findIndex(p => p.name === item.name)
        if (index < 0) {
          // if new pokemon, classic adding
          newState.pokemons.push(item)
        } else {
          // if pokemon already in the list : +item.nb
          newState.pokemons[index].nb += item.nb
        }
        return newState
      }, {...state});

    default:
      return state;
  }
}
