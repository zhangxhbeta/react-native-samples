/**
 * ReactNative 的演示项目，ios版入口
 */
'use strict';

// 支持全局 Buffer
global.Buffer = global.Buffer || require('buffer').Buffer;

import { AppRegistry } from 'react-native';
import App from './src/components/Provider';

AppRegistry.registerComponent('YandsClientIOS', () => App);
