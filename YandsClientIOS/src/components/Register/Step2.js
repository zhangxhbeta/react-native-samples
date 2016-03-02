/**
注册第二步，输入短信验证码
*/
'use strict';

import React, { Text, TextInput, View, StyleSheet, PixelRatio, Platform } from 'react-native';
import Button from 'react-native-button';
import CountdownButton from '../../lib/CountdownButton';

const pixel = 1 / PixelRatio.get();

export default class Step2 extends React.Component {
  render() {
    return (
      <View style={{flex:1}}>
        <View style={[styles.card, {flexDirection: 'row', marginTop:16, borderBottomWidth:pixel, borderTopWidth:pixel}]}>
          <Text style={styles.inputTitle}>手机号</Text>
          <TextInput
            value={this.props.phoneNumber}
            editable={false}
            style={styles.input}
            keyboardType={'phone-pad'}
          />
          <CountdownButton
            disabled={this.props.reSendDisabled}
            time={this.props.reSendTime}
            onPress={this.props.onPressSendVerifyCode}
            buttonStyle={styles.reSendBtnContainer}
            textStyle={styles.reSendBtn}
            disabledTextStyle={[styles.reSendBtn, {color: '#727272'}]}
            text={'重发验证码'} />
        </View>
        <View style={[styles.card, {flexDirection: 'row', borderBottomWidth:pixel}]}>
          <Text style={styles.inputTitle}>验证码</Text>
          <TextInput
            value={'285698'}
            onChangeText={text => this.props.registerActions.updateVerifyCode(text)}
            style={styles.input}
            placeholder={'输入短信验证码'}
            keyboardType={'numeric'}
          />
        </View>
        <Button containerStyle={styles.btnPrimaryContainer} style={styles.btnPrimary} onPress={this.props.onPressButton}>下一步</Button>
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
  reSendBtn: {
    color: '#116EED',
    fontSize: 13,
  },
  reSendBtnContainer: {
    marginHorizontal: 8,
    paddingVertical:4,
    paddingHorizontal:8,
    height:30,
    overflow:'hidden',
    borderColor: '#116EED',
    borderWidth: 1,
    borderRadius: 2,
  },
  input: {
    flex: 1,
    fontSize: 15,
    marginHorizontal: 8,
    height: Platform.OS === 'ios' ? 20 : 36,
  },
});
