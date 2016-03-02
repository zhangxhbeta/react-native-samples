/**
登录的 reducer
*/
'use strict';

import ActionTypes from '../reducers/ActionTypes';
import { handleActions } from 'redux-actions';
import Immutable from 'seamless-immutable';

const stateDefault = Immutable({
  username: '15899998888',
  password: '123456',
  submitInProgress: false,
  submitError: null,
});

export default handleActions({
  [ActionTypes.LOGIN_UPDATE_USERNAME]: (state, action) => {
    return state.set('username', action.payload);
  },
  [ActionTypes.LOGIN_UPDATE_PASSWORD]: (state, action) => {
    return state.set('password', action.payload);
  },
  [ActionTypes.LOGIN_SUBMIT_START]: (state, action) => {
    return state.set('submitInProgress', true);
  },
  [ActionTypes.LOGIN_SUBMIT_SUCCESS]: (state, action) => {
    return state.set('submitInProgress', false)
      .set('submitError', null);
  },
  [ActionTypes.LOGIN_SUBMIT_FAIL]: (state, action) => {
    return state.set('submitInProgress', false)
      .set('submitError', action.payload.message);
  },
}, stateDefault);
