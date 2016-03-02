/**
注册的状态
*/
'use strict';

import ActionTypes from '../reducers/ActionTypes';
import { handleActions } from 'redux-actions';
import Immutable from 'seamless-immutable';

const reSendVerifyCodeTimeDefault = 60;

const stateDefault = Immutable({
  step: 1,
  submitInProgress: false,
  submitFail: null,
  phoneNumber: '',
  verifyCode: '123456',
  identifyCode: '',
  name: '',
  password: '',
  passwordRepeat: '',
  token: '',
  reSendVerifyCodeDisabled: true,
  reSendVerifyCodeTime: reSendVerifyCodeTimeDefault,
});

export default handleActions({
  [ActionTypes.REGISTER_UPDATE_STEP]: (state, action) => {
    return state.set('step', action.payload)
      .set('submitInProgress', false);
  },
  [ActionTypes.REGISTER_SUBMIT_START]: (state, action) => {
    return state.set('submitInProgress', true);
  },
  [ActionTypes.REGISTER_SUBMIT_FAIL]: (state, action) => {
    return state.set('submitFail', action.payload)
      .set('submitInProgress', false);
  },
  [ActionTypes.REGISTER_SUBMIT_SUCCESS]: (state, action) => {
    return stateDefault;
  },
  [ActionTypes.REGISTER_UPDATE_PHONENUMBER]: (state, action) => {
    return state.set('phoneNumber', action.payload);
  },
  [ActionTypes.REGISTER_UPDATE_VERIFY_CODE]: (state, action) => {
    return state.set('verifyCode', action.payload);
  },
  [ActionTypes.REGISTER_UPDATE_IDENTIFY_CODE]: (state, action) => {
    return state.set('identifyCode', action.payload);
  },
  [ActionTypes.REGISTER_UPDATE_NAME]: (state, action) => {
    return state.set('name', action.payload);
  },
  [ActionTypes.REGISTER_UPDATE_PASSWORD]: (state, action) => {
    return state.set('password', action.payload);
  },
  [ActionTypes.REGISTER_UPDATE_PASSWORD_REPEAT]: (state, action) => {
    return state.set('passwordRepeat', action.payload);
  },
  [ActionTypes.REGISTER_UPDATE_TOKEN]: (state, action) => {
    return state.set('token', action.payload);
  },
  [ActionTypes.REGISTER_UPDATE_RESEND_IDENTIFY_CODE_DISABLED]: (state, action) => {
    return state.set('reSendVerifyCodeDisabled', action.payload);
  },
  [ActionTypes.REGISTER_UPDATE_RESEND_IDENTIFY_CODE_TIME]: (state, action) => {
    if (action.payload <= 0) {
      return state.set('reSendVerifyCodeTime', reSendVerifyCodeTimeDefault)
        .set('reSendVerifyCodeDisabled', false);
    } else {
      return state.set('reSendVerifyCodeTime', action.payload);
    }
  },

}, stateDefault);
