/**
注册相关的 actions
*/
'use strict';

import { createAction } from 'redux-actions';
import ActionTypes from '../reducers/ActionTypes';
import YandsApi from '../models/yandsApi';
import phoneInfo from '../models/phoneInfo';
import createHash from 'sha.js';

// 注册
export const updatePhoneNumber = createAction(
  ActionTypes.REGISTER_UPDATE_PHONENUMBER
);

export const sendVerifyCode = (phoneNumber, reSendTime) => {
  return dispatch => {
    // 提交开始动作
    dispatch(updateSubmitStart());

    return YandsApi.sendSmsMessage(phoneNumber)
      .then(() => {
        dispatch(updateStep(2));
        dispatch(updateReSendVerifyCodeDisabled(true));

        let interval = setInterval(() => {
          reSendTime--;
          dispatch(updateResendVerifyCodeTime(reSendTime));
          if (reSendTime === 0) {
            clearInterval(interval);
          }
        }, 1000);
      })
      .catch(err => {
        dispatch(updateSubmitFail(err));
        return Promise.reject(err);
      });
  };
};

export const updateVerifyCode = createAction(
  ActionTypes.REGISTER_UPDATE_VERIFY_CODE
);

export const submitVerifyCode = (phoneNumber, verifycode) => {
  return dispatch => {
    // 提交开始动作
    dispatch(updateSubmitStart());

    return YandsApi.verifySmsCode(phoneNumber, verifycode)
      .then((res) => {
        dispatch(updateStep(3));
        dispatch(
          createAction(ActionTypes.REGISTER_UPDATE_TOKEN)(res.body.token)
        );
      })
      .catch(err => {
        dispatch(updateSubmitFail(err));
        return Promise.reject(err);
      });
  };
};

export const updateIdentifyCode = createAction(
  ActionTypes.REGISTER_UPDATE_IDENTIFY_CODE
);

export const updateName = createAction(
  ActionTypes.REGISTER_UPDATE_NAME
);

export const updatePassword = createAction(
  ActionTypes.REGISTER_UPDATE_PASSWORD
);

export const updatePasswordRepeat = createAction(
  ActionTypes.REGISTER_UPDATE_PASSWORD_REPEAT
);

export const registerBind = (phoneNumber, password, name, identifyCode, token) => {
  return dispatch => {
    // 提交开始动作
    dispatch(updateSubmitStart());

    const sha256 = createHash('sha256');
    let passwordHash = sha256.update(password, 'utf8').digest('base64');

    return phoneInfo()
    .then(result => {
      return YandsApi.registerBind({
        phoneNumber,
        passwordHash,
        name,
        identifyCode,
        info : result,
        token,
      });
    })
    .then(res => {
      // 保存成功信息，可以进入程序了
      YandsApi.updateHeader('Authorization', res.body.jwsToken);

      dispatch(
        createAction(ActionTypes.REGISTER_SUBMIT_SUCCESS)()
      );
      return res;
    })
    .catch(err => {
      dispatch(updateSubmitFail(err));
      return Promise.reject(err);
    });
  };
};

export const updateStep = createAction(
  ActionTypes.REGISTER_UPDATE_STEP
);

const updateSubmitStart = createAction(
  ActionTypes.REGISTER_SUBMIT_START
);

const updateSubmitFail = createAction(
  ActionTypes.REGISTER_SUBMIT_FAIL
);

const updateReSendVerifyCodeDisabled = createAction(
  ActionTypes.REGISTER_UPDATE_RESEND_IDENTIFY_CODE_DISABLED
);

const updateResendVerifyCodeTime = createAction(
  ActionTypes.REGISTER_UPDATE_RESEND_IDENTIFY_CODE_TIME
);
