import uniqid from 'uniqid'

export default (state = [], action) => {
  switch (action.type) {
    case 'NEW_MESSAGE':
      return [
        ...state,
        {
          ...action.payload,
          id: uniqid()
        }
      ];

    case 'CLOSE_MESSAGE':
      return state.filter(message => message.id !== action.payload);

    default:
      return state;
  }
}
