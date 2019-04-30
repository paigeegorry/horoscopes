import { FETCH_SCOPES } from '../actions/horoscopes';

const initialState = {
  horoscope: {}
};

export default function reducer(state = initialState, { type, payload }) {
  switch(type) {
    case FETCH_SCOPES:
      return { ...state, horoscope: payload };
    default:
      return state;
  }
}
