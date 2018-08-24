import { MOCK_RESPONSE_MARKETING } from  '../stub/marketings-stub';

export const FETCH_MARKETING_DATA_SUCCESS = 'FETCH_MARKETING_DATA_SUCCESS';
export const FETCH_MARKETING_DATA_FAILURE = 'FETCH_MARKETING_DATA_FAILURE';

function trasformResponse(data) {
  let transformedMap = {};
  const { marketingmodules = [] } = data;
  marketingmodules.forEach((item, key) => {
    const { paneltype } = item;
    transformedMap[paneltype] = item;
  });
  return transformedMap;
}

export const fetchMarketingsDataSuccess = data => ({
  type: FETCH_MARKETING_DATA_SUCCESS,
  payload: data
});

export const fetchMarketingsDataError = error => ({
  type: FETCH_MARKETING_DATA_FAILURE,
  payload: { error }
});

export function fetchMarketingsData() {
  return dispatch => {
    return Promise.resolve(MOCK_RESPONSE_MARKETING)
      .then(data => {
        dispatch(fetchMarketingsDataSuccess({ items: trasformResponse(data) }));
        return data;
      })
      .catch(error => dispatch(fetchMarketingsDataError(error)));
  };
}

// Handle HTTP errors since fetch won't.
// function handleErrors(response) {
//   if (!response.ok) {
//     throw Error(response.statusText);
//   }
//   return response;
// }

