export default (state = {}, action) => {
  switch (action.type) {
    case 'FETCH_DETAIL_SUCCESS':
      return {
        ...state,
        [action.payload.name]: {
          ...action.payload,
          price: action.payload.name.length * 42
        }
      };

    default:
      return state;
  }
}
