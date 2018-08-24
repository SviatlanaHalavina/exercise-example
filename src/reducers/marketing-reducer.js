import {
  FETCH_MARKETING_DATA_SUCCESS,
  FETCH_MARKETING_DATA_FAILURE
} from '../actions/marketing-actions';

const initialState = {
  items: null,
  loading: false,
  error: null
};

export default function marketingData(state = initialState, action) {
  switch(action.type) {  
    case FETCH_MARKETING_DATA_SUCCESS:
      return {
        ...state,
        loading: false,
        items: action.payload.items
      };

    case FETCH_MARKETING_DATA_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload.error,
        items: []
      };

    default:
      return state;
  }
}