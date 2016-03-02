/**
app 相关的 actions
*/
'use strict';

import { createAction } from 'redux-actions';
import ActionTypes from '../reducers/ActionTypes';

// app根级别导航
export const replaceScene = createAction(
  ActionTypes.GLOBAL_REPLACE_SCENE
);
