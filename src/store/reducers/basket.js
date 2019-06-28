const defaultState = {
  items: []
}

export default (state = defaultState, action) => {
  switch (action.type) {
    case 'ADD':
      return {
        ...state,
        items: [...state.items, action.payload]
      };
    default:
      return state;
  }
}
