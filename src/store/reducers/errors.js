export default (state = [], action) => {
  switch (action.type) {
    case 'API_ERROR':
      return [
        ...state,
        action.payload
      ];

    default:
      return state;
  }
}
