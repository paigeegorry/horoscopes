import { createAction } from 'promise-middleware-redux';
import { getHoroscopeInfo } from '../services/horoscopeApi.js';

export const [
  fetchScopes,
  FETCH_SCOPES,
  LOAD_SCOPES_START,
  LOAD_SCOPES_END
] = createAction('FETCH_SCOPES', getHoroscopeInfo);

export const UPDATE_SIGN = 'UPDATE_SIGN';
export const updateSign = sign => ({
  type: UPDATE_SIGN,
  payload: sign
});

export const UPDATE_TIME = 'UPDATE_TIME';
export const updateTime = time => ({
  type: UPDATE_TIME,
  payload: time
});
