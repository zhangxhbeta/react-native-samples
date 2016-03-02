/**
配置 store / action / reduce
 */
'use strict';

import React from 'react-native';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import promise from 'redux-promise';
import createLogger from 'redux-logger';
import allReducers from '../reducers';
import App from './App';
// import ActionTypes from '../reducers';

const logger = createLogger(); // eslint-disable-line no-unused-vars

const createStoreWithMiddleware = applyMiddleware(thunk, promise/*, logger*/)(createStore);
const store = createStoreWithMiddleware(allReducers, {});

export default class YandsClientIOS extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <App />
      </Provider>
    );
  }
}
