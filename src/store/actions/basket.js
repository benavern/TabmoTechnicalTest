export function addToBasket (name) {
  return dispatch => {
    // add the item to the basket
    dispatch({
      type: 'ADD_TO_BASKET',
      payload: name
    });

    // notify the user
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
    // remove the item from the basket
    dispatch({
      type: 'REMOVE_FROM_BASKET',
      payload: name
    });

    // notify the user
    dispatch({
      type: 'NEW_MESSAGE',
      payload: {
        type: 'info',
        text: `Successfully removed a ${name} from your basket.`
      }
    });
  }
}

export function buyBasket (basket, history) {
  return dispatch => {
    // Add the basket list to the user list
    dispatch({
      type: 'UPDATE_USER_POKEMONS',
      payload: basket.items
    });

    // notify the user he bought pokemons
    dispatch({
      type: 'NEW_MESSAGE',
      payload: {
        type:'success',
        text: `CONGRATULATIONS! you just bought ${basket.nbItems} for $${basket.totalPrice}`
      }
    });

    // reset the basket list
    dispatch({ type: 'RESET_BASKET' });

    // redirect the user to the user about page
    history.push('/about');
  }
}
