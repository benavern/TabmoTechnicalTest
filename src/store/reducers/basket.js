export default (state = {
  items: [],
  totalPrice: 0,
  nbItems: 0
}, action) => {
  const index = state.items.findIndex(item => item.name === action.payload)
  const stateCopy = {...state}

  switch (action.type) {
    case 'ADD_TO_BASKET':
      if (index > -1) { // this pokemon is already in the basket
        stateCopy.items[index].nb += 1;
      } else { // this pokemon is new to the basket
        stateCopy.items.push({
          name: action.payload,
          nb: 1,
          price: action.payload.length * 42
        })
      }

      stateCopy.totalPrice = state.items.reduce((totalPrice, current) => totalPrice + (current.nb * current.price), 0)
      stateCopy.nbItems = state.items.reduce((nbItems, current) => nbItems + current.nb, 0)
      return stateCopy

    case 'REMOVE_FROM_BASKET':
      // no item with this name in the state
      if(index < 0) return state

      if (state.items[index].nb > 1) { // there is more than one in the state
        stateCopy.items[index].nb -= 1;
      } else { // there is exactly one in the state
        stateCopy.items.splice(index, 1);
      }

      stateCopy.totalPrice = state.items.reduce((totalPrice, current) => totalPrice + (current.nb * current.price), 0)
      stateCopy.nbItems = state.items.reduce((nbItems, current) => nbItems + current.nb, 0)
      return stateCopy;

    default:
      return state;
  }
}
