/**
注册第三步，填写密码／身份证／姓名
*/
'use strict';

import React, { Text, TextInput, View, StyleSheet, PixelRatio, Platform } from 'react-native';
import Button from 'react-native-button';

const pixel = 1 / PixelRatio.get();

export default class Step3 extends React.Component {
  render() {
    return (
      <View style={{flex:1}}>
        <View style={[styles.card, {flexDirection: 'row', marginTop:16, borderBottomWidth:pixel, borderTopWidth:pixel}]}>
          <Text style={styles.inputTitle}>身份证号</Text>
          <TextInput
            onChangeText={text => this.props.registerActions.updateIdentifyCode(text)}
            value={this.props.identifyCode}
            style={styles.input}
            placeholder={'请输入真实身份证号码'}
          />
        </View>
        <View style={[styles.card, {flexDirection: 'row', borderBottomWidth:pixel}]}>
          <Text style={styles.inputTitle}>中文姓名</Text>
          <TextInput
            onChangeText={text => this.props.registerActions.updateName(text)}
            value={this.props.name}
            style={styles.input}
            placeholder={'请输入中文姓名'}
          />
        </View>
        <View style={[styles.card, {flexDirection: 'row', marginTop:16, borderBottomWidth:pixel, borderTopWidth:pixel}]}>
          <Text style={styles.inputTitle}>密码</Text>
          <TextInput
            onChangeText={text => this.props.registerActions.updatePassword(text)}
            style={styles.input}
            value={this.props.password}
            placeholder={'不少于6个字符'}
            secureTextEntry={true}
          />
        </View>
        <View style={[styles.card, {flexDirection: 'row', borderBottomWidth:pixel}]}>
          <Text style={styles.inputTitle}>确认密码</Text>
          <TextInput
            onChangeText={text => this.props.registerActions.updatePasswordRepeat(text)}
            style={styles.input}
            value={this.props.passwordRepeat}
            placeholder={'请再次输入密码'}
            secureTextEntry={true}
          />
        </View>
        <Button containerStyle={styles.btnPrimaryContainer} style={styles.btnPrimary} onPress={this.props.onPressButton}>完成注册</Button>
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
