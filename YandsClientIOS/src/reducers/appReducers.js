/**
app导航的 reducer
*/
'use strict';

import ActionTypes from '../reducers/ActionTypes';
import { handleActions } from 'redux-actions';

const stateDefault = {
  scene: null,
  memberProfile: null,
};

export default handleActions({
  [ActionTypes.GLOBAL_REPLACE_SCENE]: (state, action) => {
    return { ...state, scene: action.payload };
  },
  // memberType: 1,
  // phoneNumber: '15555555555',
  // ecid: '698ce58f468d4d3395a7e4f509320db8',
  // name: '王三都夫',
  // identifyCode: '210303199801056377'
  [ActionTypes.GLOBAL_UPDATE_MEMBER_INFO]: (state, action) => {
    return { ...state, memberProfile: action.payload };
  },
}, stateDefault);
