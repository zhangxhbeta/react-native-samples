/**
注册第一步，输入手机号
*/
'use strict';

import React, { Text, TextInput, View, StyleSheet, PixelRatio, Platform } from 'react-native';
import Button from 'react-native-button';

const pixel = 1 / PixelRatio.get();

export default class Step1 extends React.Component {
  render() {
    return (
      <View style={{flex:1}}>
        <View style={[styles.card, {flexDirection: 'row', marginTop:16, borderBottomWidth:pixel, borderTopWidth:pixel}]}>
          <Text style={styles.inputTitle}>手机号</Text>
          <TextInput
            value={this.props.phoneNumber}
            onChangeText={text => this.props.registerActions.updatePhoneNumber(text)}
            style={styles.input}
            placeholder={'输入您的手机号码'}
            keyboardType={'phone-pad'}
          />
        </View>
        <Button containerStyle={styles.btnPrimaryContainer} style={styles.btnPrimary} onPress={this.props.onPressButton}>发送验证码</Button>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: 'white',
    padding: 16,
    borderColor:'#DDD',
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  inputTitle: {
    fontSize: 14,
    color: '#727272',
  },
  btnPrimary: {
    color: 'white',
  },
  btnPrimaryContainer: {
    marginTop: 24,
    marginHorizontal: 16,
    padding:10,
    height:44,
    alignSelf: 'stretch',
    overflow:'hidden',
    backgroundColor: '#116EED',
    borderRadius: 22,
  },
  input: {
    flex: 1,
    fontSize: 15,
    marginHorizontal: 8,
    height: Platform.OS === 'ios' ? 20 : 36,
  },
});
