/**
注册
*/
'use strict';

import React, { Alert, Image, Text, View, StyleSheet, PixelRatio } from 'react-native';
import SmartScrollView from 'react-native-smart-scroll-view';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as RegisterActions from '../../actions/registerActions';
import Step1 from './Step1';
import Step2 from './Step2';
import Step3 from './Step3';
import HUD from '../../lib/HUD';

const pixel = 1 / PixelRatio.get();

export default class Register extends React.Component {

  onPressSendVerifyCode = () => {

    if (this.props.submitInProgress) {
      return;
    }

    if (!this.props.phoneNumber) {
      Alert.alert('填写错误', '手机号码必须填写');
      return;
    }

    // 发送验证码
    this.props.registerActions.sendVerifyCode(this.props.phoneNumber, this.props.reSendVerifyCodeTime)
      .catch(err => {
        console.log(err);
        Alert.alert(`错误：${err.message}`);
      });
  };

  onPressSubmitVerifyCode = () => {
    if (this.props.submitInProgress) {
      return;
    }

    if (!this.props.verifyCode) {
      Alert.alert('填写错误', '短信验证码必须填写');
      return;
    }

    if (this.props.verifyCode.length !== 6) {
      Alert.alert('填写错误', '短信验证码格式错误');
      return;
    }

    this.props.registerActions.submitVerifyCode(this.props.phoneNumber, this.props.verifyCode)
      .catch(err => {
        console.log(err);
        Alert.alert(`错误：${err.message}`);
      });
  };

  onPressRegisterBind = () => {
    if (this.props.submitInProgress) {
      return;
    }

    if (!this.props.name) {
      Alert.alert('填写错误', '姓名必须填写');
      return;
    }

    if (!this.props.identifyCode) {
      Alert.alert('填写错误', '身份证必须填写');
      return;
    }

    if (!(this.props.identifyCode.length === 18 || this.props.identifyCode.length === 15)) {
      Alert.alert('填写错误', '身份证号码填写错误');
      return;
    }

    if (!this.props.password || !this.props.passwordRepeat) {
      Alert.alert('填写错误', '密码必须填写');
      return;
    }

    if (this.props.password !== this.props.passwordRepeat) {
      Alert.alert('填写错误', '两次密码不一致');
      return;
    }

    this.props.registerActions.registerBind(
      this.props.phoneNumber,
      this.props.password,
      this.props.name,
      this.props.identifyCode,
      this.props.token,
    )
    .then(() => {
      Alert.alert('注册成功，演示版没有首页，到此为止');
    })
    .catch(err => {
      console.log(err);
      Alert.alert(`错误：${err.message}`);
    });
  };

  renderStep() {
    if (this.props.step === 3) {
      return <Step3 {...this.props} onPressButton={this.onPressRegisterBind} />;
    } else if (this.props.step === 2) {
      return <Step2 {...this.props}
        reSendTime={this.props.reSendVerifyCodeTime}
        reSendDisabled={this.props.reSendVerifyCodeDisabled}
        onPressSendVerifyCode={this.onPressSendVerifyCode}
        onPressButton={this.onPressSubmitVerifyCode} />;
    } else {
      return <Step1 {...this.props} onPressButton={this.onPressSendVerifyCode} />;
    }
  }

  renderHud() {
    if (this.props.submitInProgress) {
      return <HUD show={true} title={'正在加载'} />;
    }
  }

  render() {
    return (
      <SmartScrollView style={{flex:1}}>
        <View style={[styles.card, {marginTop:16, borderBottomWidth:pixel, borderTopWidth:pixel}]}>
          <Text style={[styles.inputTitle, this.props.step === 1 && {color:'#1161ed'}]}>1.输入手机号</Text>
          {this.props.step === 2 ? <Image source={require('./icon_arrowright_active.png')} /> : <Image source={require('./icon_arrowright.png')} />}
          <Text style={[styles.inputTitle, this.props.step === 2 && {color:'#1161ed'}]}>2.输入验证码</Text>
          {this.props.step === 3 ? <Image source={require('./icon_arrowright_active.png')} /> : <Image source={require('./icon_arrowright.png')} />}
          <Text style={[styles.inputTitle, this.props.step === 3 && {color:'#1161ed'}]}>3.设置密码</Text>
        </View>
        {this.renderStep()}
        {this.renderHud()}
      </SmartScrollView>
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
});

const mapStateToProps = state => {
  return {
    step: state.register.step,
    submitInProgress: state.register.submitInProgress,
    submitFail: state.register.submitFail,
    phoneNumber: state.register.phoneNumber,
    verifyCode: state.register.verifyCode,
    identifyCode: state.register.identifyCode,
    name: state.register.name,
    password: state.register.password,
    passwordRepeat: state.register.passwordRepeat,
    token: state.register.token,
    reSendVerifyCodeDisabled: state.register.reSendVerifyCodeDisabled,
    reSendVerifyCodeTime: state.register.reSendVerifyCodeTime,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    registerActions: bindActionCreators(RegisterActions, dispatch),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Register);
