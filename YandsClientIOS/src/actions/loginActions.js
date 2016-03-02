/**
登录相关的动作
*/
'use strict';

import { createAction } from 'redux-actions';
import ActionTypes from '../reducers/ActionTypes';
import YandsApi from '../models/yandsApi';
import createHash from 'sha.js';

// 更新用户名
export const updateUsername = createAction(
  ActionTypes.LOGIN_UPDATE_USERNAME
);

// 更新密码
export const updatePassword = createAction(
  ActionTypes.LOGIN_UPDATE_PASSWORD
);

export const submit = (username, password) => {
  return dispatch => {
    // 显示登录中
    dispatch(
      createAction(ActionTypes.LOGIN_SUBMIT_START)()
    );

    const sha256 = createHash('sha256');
    let passwordHash = sha256.update(password, 'utf8').digest('base64');
    return YandsApi.login({
      phoneNumber: username,
      passwordHash,
      info: null,
    })
    .then(res => {
      YandsApi.updateHeader('Authorization', res.body.jwsToken);

      dispatch(
        createAction(ActionTypes.LOGIN_SUBMIT_SUCCESS)()
      );

      return res;
    })
    .catch( err => {
      dispatch(
        createAction(ActionTypes.LOGIN_SUBMIT_FAIL)(err)
      );
      return Promise.reject(err);
    });
  };
};
