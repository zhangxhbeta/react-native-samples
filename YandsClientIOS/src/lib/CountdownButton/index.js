/**
 * 倒计时按钮
 *
 * @author zhangxhbeta
 */
'use strict';

import React, { Text, View, StyleSheet, TouchableHighlight, TouchableWithoutFeedback } from 'react-native';

export default class CountdownButton extends React.Component {

  render() {
    if (this.props.disabled) {
      return (
          <View style={[styles.wrapper, this.props.buttonStyle]}>
            <TouchableWithoutFeedback>
              <Text style={[styles.text, {color: 'gray'}, this.props.disabledTextStyle, ]}>{this.props.text}({this.props.time})</Text>
            </TouchableWithoutFeedback>
          </View>
        );
    } else {
      return (
          <TouchableHighlight
              style={[styles.wrapper,this.props.buttonStyle]}
              onPress={this.props.onPress}>
            <Text style={[styles.text, this.props.textStyle]}>{this.props.text}</Text>
          </TouchableHighlight>
        );
    }
  }
}

const styles = StyleSheet.create({
  text: {
    color: 'black',
  },
  wrapper: {
    padding: 10,
    marginRight:10,
  }
});
