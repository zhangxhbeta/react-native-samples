/**
全局常量文件，定义所有的 actionTypes
*/
'use strict';

import fluxConstants from 'flux-constants';

export default fluxConstants([
  // 应用/全局级别事件
  'APPLICATION_FINISH_LAUNCHING', // 应用启动初始化
  'GLOBAL_REPLACE_SCENE',         // 切换全局场景（闪屏／主页／注册等一级导航）

  // 登录
  'LOGIN_UPDATE_USERNAME',
  'LOGIN_UPDATE_PASSWORD',
  'LOGIN_SUBMIT_START',
  'LOGIN_SUBMIT_SUCCESS',
  'LOGIN_SUBMIT_FAIL',

  // 注册
  'REGISTER_UPDATE_STEP',
  'REGISTER_SUBMIT_START',
  'REGISTER_SUBMIT_FAIL',
  'REGISTER_SUBMIT_SUCCESS',
  'REGISTER_UPDATE_PHONENUMBER',
  'REGISTER_UPDATE_VERIFY_CODE',
  'REGISTER_UPDATE_IDENTIFY_CODE',
  'REGISTER_UPDATE_NAME',
  'REGISTER_UPDATE_PASSWORD',
  'REGISTER_UPDATE_PASSWORD_REPEAT',
  'REGISTER_UPDATE_TOKEN',
  'REGISTER_UPDATE_RESEND_IDENTIFY_CODE_DISABLED',
  'REGISTER_UPDATE_RESEND_IDENTIFY_CODE_TIME',
]);
