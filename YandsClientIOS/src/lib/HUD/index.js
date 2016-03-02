/**
提醒用户当前进度的东西
*/
'use strict';

import React, { PropTypes, StyleSheet, Dimensions, PixelRatio, View, ActivityIndicatorIOS, Text } from 'react-native';

const {width, height} = Dimensions.get('window');
const pixel = 1 / PixelRatio.get();

export default class HUD extends React.Component {

  static propTypes = {
    show: PropTypes.bool,
    title: PropTypes.string,
  };

  render() {
    let text = this.props.title ? <Text style={styles.title}>{this.props.title}</Text> : null;

    if (this.props.show) {
      return (
        <View style={styles.hud}>
          <ActivityIndicatorIOS
            animating={true}
            size={'large'}
          />
          {text}
        </View>
      );
    } else {
      return null;
    }
  }
}

const styles = StyleSheet.create({
  hud: {
    position: 'absolute',
    padding: 16,
    top: height / 3,
    width: 100,
    height: 100,
    left: width / 2 - 50,
    backgroundColor: 'white',
    borderRadius: 8,
    borderWidth: pixel,
    borderColor: '#ccc',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    marginTop: 8,
    marginBottom: 8,
    fontSize: 14,
  },
});
