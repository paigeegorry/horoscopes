import { createAction } from 'promise-middleware-redux';
import { getHoroscopeInfo } from '../services/horoscopeApi.js';

export const [
  fetchScopes,
  FETCH_SCOPES,
  LOAD_SCOPES_START,
  LOAD_SCOPES_END
] = createAction('FETCH_SCOPES', getHoroscopeInfo);
