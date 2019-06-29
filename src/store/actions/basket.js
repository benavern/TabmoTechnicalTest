export function addToBasket (name) {
  return {
    type: 'ADD_TO_BASKET',
    payload: name
  }
}

export function removeFromBasket (name) {
  return {
    type: 'REMOVE_FROM_BASKET',
    payload: name
  }
}
