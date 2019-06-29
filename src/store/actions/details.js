import api from '../../api';

export function fetchDetails (name) {
  return dispatch => {
    api.get(`/${name}`)
      .then(res => {
        dispatch({
          type: 'FETCH_DETAIL_SUCCESS',
          payload: res.data
        });
      })
      .catch(error => {
        dispatch({
          type: 'API_ERROR',
          payload: error
        });
      })
  }
}
