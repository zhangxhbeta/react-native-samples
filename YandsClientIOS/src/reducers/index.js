/**
将所有的子级 reducer，合并为一个根级 reducer，组件连接时都只使用这一个根级 reducer
*/
'use strict';

import { combineReducers } from 'redux';
import app from './appReducers';
import login from './loginReducers';
import register from './registerReducers';

export default combineReducers({
  app,
  login,
  register,
});
