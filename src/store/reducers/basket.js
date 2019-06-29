export default (state = [], action) => {
  switch (action.type) {

    case 'ADD_TO_BASKET':
      const toAdd = state.findIndex(item => item.name === action.payload)
      if (toAdd > -1) {
        const stateCopy = [...state]
        stateCopy[toAdd].nb += 1;
        return stateCopy;
      }

      return [
        ...state,
        {
          name: action.payload,
          nb: 1,
          price: action.payload.length * 42
        }
      ];

    case 'REMOVE_FROM_BASKET':
      const toRemove = state.findIndex(item => item.name === action.payload);

      // no item with this name in the state
      if(toRemove < 0) return state

      const stateCopy = [...state];
      // there is more than one in the state
      if (state[toRemove].nb > 1) {
        stateCopy[toRemove].nb -= 1;
        return stateCopy;

      // there is exactly one in the state
      } else {
        stateCopy.splice(toRemove, 1);
        return stateCopy;
      }

    default:
      return state;
  }
}
