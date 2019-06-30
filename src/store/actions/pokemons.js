import api from '../../api';

export function fetchList (offset = 0) {
  return dispatch => {
    dispatch({
      type: 'FETCH_POKEMONS_LOADING'
    })

    api.get('/', {
      params: {
        offset,
        limit: 20
      }
    })
      .then(res => {
        dispatch({
          type: 'FETCH_POKEMONS_SUCCESS',
          payload: res.data
        })
      })
      .catch(() => {
        dispatch({
          type: 'NEW_MESSAGE',
          payload: {
            type: 'error',
            text: 'An error occured when fetching new PoKéMoNs.'
          }
        });
      })
  }
}
