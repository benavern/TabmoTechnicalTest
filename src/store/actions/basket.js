export function addToBasket (name) {
  return dispatch => {
    dispatch({
      type: 'ADD_TO_BASKET',
      payload: name
    });

    dispatch({
      type: 'NEW_MESSAGE',
      payload: {
        type: 'info',
        text: `Successfully added a ${name} in your basket.`
      }
    });
  }
}

export function removeFromBasket (name) {
  return dispatch => {
    dispatch({
      type: 'REMOVE_FROM_BASKET',
      payload: name
    });

    dispatch({
      type: 'NEW_MESSAGE',
      payload: {
        type: 'info',
        text: `Successfully removed a ${name} from your basket.`
      }
    });
  }
}

export function buyBasket (basket) {
  return dispatch => {
    dispatch({
      type: 'UPDATE_USER_POKEMONS',
      payload: basket.items
    });

    dispatch({
      type: 'NEW_MESSAGE',
      payload: {
        type:'success',
        text: `CONGRATULATIONS! you just bought ${basket.nbItems} for $${basket.totalPrice}`
      }
    });

    dispatch({ type: 'RESET_BASKET' });
  }
}
