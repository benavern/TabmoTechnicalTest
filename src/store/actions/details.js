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
      .catch(() => {
        dispatch({
          type: 'NEW_MESSAGE',
          payload: {
            type: 'error',
            text: `An error occured when fetching details for ${name}.`
          }
        });
      })
  }
}
