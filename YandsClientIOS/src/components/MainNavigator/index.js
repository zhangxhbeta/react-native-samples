/**
主导航组件
*/
'use strict';

import React, { StyleSheet, Platform } from 'react-native';
import ExNavigator from '@exponent/react-native-navigator';

// const pixel = 1 / PixelRatio.get();

export default class MainNavigator extends React.Component {

  shouldComponentUpdate(nextProps, nextState) {
    return false;
  }

  render() {
    return (
      <ExNavigator
        ref={'exnavigator'}
        {...this.props}
        initialRoute={this.props.route}
        sceneStyle={{ paddingTop: Platform.OS === 'ios' ? 64 : 44, backgroundColor: '#f7f7f7' }}
        style={{ flex: 1 }}
        navigationBarStyle={styles.navigationBar}
        titleStyle={styles.title}
        barButtonTextStyle={styles.barButtonText}
        barButtonIconStyle={styles.barButtonIcon}
      />
    );
  }
}

const styles = StyleSheet.create({
  navigationBar: {
    backgroundColor: '#1B50FC',
    borderBottomWidth: 0,
    height: Platform.OS === 'ios' ? 64 : 44,
  },
  title: {
    fontSize: 18,
    color: '#FFFFFF',
    marginTop: Platform.OS === 'ios' ? 8 : 22,
  },
  barButtonIcon: {
    tintColor: '#FFFFFF',
  },
  barButtonText: {
    color: '#FFFFFF',
    fontSize: 17,
  },
});
