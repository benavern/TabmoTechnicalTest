import api from '../../api';

export function fetchList (offset = 0) {
  return dispatch => {
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
      .catch(error => {
        dispatch({
          type: 'API_ERROR',
          payload: error
        })
      })
  }
}