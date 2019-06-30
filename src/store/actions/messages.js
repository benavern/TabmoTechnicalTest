export function closeMessage (id) {
  return {
    type: 'CLOSE_MESSAGE',
    payload: id
  }
}
