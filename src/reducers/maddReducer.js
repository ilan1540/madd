import {
  GET_LAST_MADD,
  GET_SDAROT,
  FETCH_MADD_REQUEST,
  FETCH_MADD_SUCCESS,
  FETCH_MADD_FAILURE,
} from '../actions/type';
//import { fetchSdarotFailure } from '../actions/newMaddAction';

const initialState = {
  lastMadd: {},
  counter: 0,
  loading: false,
  sdarot: [],
  error: '',
};

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_MADD_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case FETCH_MADD_SUCCESS:
      return {
        loading: false,
        sdarot: action.payload,
        error: '',
      };
    case FETCH_MADD_FAILURE:
      return {
        loading: false,
        sdarot: [],
        error: action.payload,
      };

    case GET_LAST_MADD:
      return {
        ...state,
        lastMadd: action.payload,
      };
    case GET_SDAROT:
      return {
        ...state,
        sdarotList: action.payload,
      };
    case 'INC':
      return { ...state, counter: state.counter + 1 };
    case 'TEST':
      console.log(action.payload);
      return {
        ...state,
        test: action.payload,
      };
    default:
      return state;
  }
};
