import { FETCH_SCOPES, UPDATE_SIGN, UPDATE_TIME } from '../actions/horoscopes';

const initialState = {
  horoscope: {},
  sign: 'Aries',
  time: 'today'
};

export default function reducer(state = initialState, { type, payload }) {
  switch(type) {
    case FETCH_SCOPES:
      return { ...state, horoscope: payload };
    case UPDATE_SIGN:
      return { ...state, sign: payload };
    case UPDATE_TIME:
      return { ...state, time: payload };
    default:
      return state;
  }
}
