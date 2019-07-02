import uniqid from 'uniqid'

export default (state = [], action) => {
  switch (action.type) {
    case 'NEW_MESSAGE':

      if (action.payload.text) {
        return [
          ...state,
          {
            type: action.payload.type || 'info',
            text: action.payload.text,
            id: uniqid()
          }
        ];
      }
      return state;

    case 'CLOSE_MESSAGE':
      return state.filter(message => message.id !== action.payload);

    default:
      return state;
  }
}
