/**
主导航的路由对象
*/
'use strict';

import React from 'react-native';
import MainNavigator from './index';

export default function(route) {
  return {
    renderScene(navigator) {
        return (
          <MainNavigator
            navigator={navigator}
            route={route}
          />
        );
      },

    getTitle() {
      return '';
    },
  };
}
