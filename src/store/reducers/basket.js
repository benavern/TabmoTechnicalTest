export default (state = {
  items: [],
  totalPrice: 0,
  nbItems: 0
}, action) => {
  switch (action.type) {

    case 'ADD_TO_BASKET':
      const toAdd = state.items.findIndex(item => item.name === action.payload)
      const stateCopyAdd = {...state}

      if (toAdd > -1) { // this pokemon is already in the basket
        stateCopyAdd.items[toAdd].nb += 1;
      } else { // this pokemon is new to the basket
        stateCopyAdd.items.push({
          name: action.payload,
          nb: 1,
          price: action.payload.length * 42
        })
      }

      stateCopyAdd.totalPrice = state.items.reduce((totalPrice, current) => totalPrice + (current.nb * current.price), 0)
      stateCopyAdd.nbItems = state.items.reduce((nbItems, current) => nbItems + current.nb, 0)
      return stateCopyAdd

    case 'REMOVE_FROM_BASKET':
      const toRemove = state.items.findIndex(item => item.name === action.payload);

      // no item with this name in the state
      if(toRemove < 0) return state

      const stateCopyRemove = {...state};

      if (state.items[toRemove].nb > 1) { // there is more than one in the state
        stateCopyRemove.items[toRemove].nb -= 1;
      } else { // there is exactly one in the state
        stateCopyRemove.items.splice(toRemove, 1);
      }

      stateCopyRemove.totalPrice = state.items.reduce((totalPrice, current) => totalPrice + (current.nb * current.price), 0)
      stateCopyRemove.nbItems = state.items.reduce((nbItems, current) => nbItems + current.nb, 0)
      return stateCopyRemove;

    default:
      return state;
  }
}
