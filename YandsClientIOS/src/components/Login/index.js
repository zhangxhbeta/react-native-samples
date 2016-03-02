/**
登录
*/
'use strict';

import React, { Alert, ActivityIndicatorIOS, Text, TextInput, View, StyleSheet, PixelRatio, Platform } from 'react-native';
import Button from 'react-native-button';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as LoginActionCreators from '../../actions/loginActions';

const pixel = 1 / PixelRatio.get();

export default class Login extends React.Component {

  onPressLogin = () => {
    if (this.props.submitInProgress) {
      return;
    }

    if (!this.props.username || !this.props.password) {
      Alert.alert('填写错误', '手机号和密码都要填写');
      return;
    }

    if (this.props.password.length > 20 || this.props.password.length < 6) {
      Alert.alert('填写错误', '密码长度为6-20位');
    }

    this.props.loginActions.submit(this.props.username, this.props.password)
      .then((result) => {
        console.log(result);
        Alert.alert('登录成功，演示版没有首页，到此为止');
      })
      .catch( (err) => {
        Alert.alert(`登录出错, ${err.message}`);
      });
  };

  componentDidMount() {
    if (Platform.OS === 'ios') {
      React.StatusBarIOS.setStyle('light-content');
    }
  }

  render() {
    return (
      <View style={{flex:1}}>
        <View style={[styles.card, {flexDirection: 'row', marginTop:16, borderBottomWidth:pixel, borderTopWidth:pixel}]}>
          <Text style={styles.inputTitle}>手机号</Text>
          <TextInput
            value={this.props.username}
            onChangeText={text => this.props.loginActions.updateUsername(text)}
            style={styles.input}
            placeholder={'输入您的手机号码'}
            keyboardType={'phone-pad'}
          />
        </View>
        <View style={[styles.card, {flexDirection: 'row', borderBottomWidth:pixel}]}>
          <Text style={styles.inputTitle}>密码</Text>
          <TextInput
            value={this.props.password}
            onChangeText={text => this.props.loginActions.updatePassword(text)}
            style={styles.input}
            placeholder={'6-20位字母和数字'}
            secureTextEntry={true}
          />
        </View>
        <ActivityIndicatorIOS
          animating={this.props.submitInProgress}
          hidesWhenStop={true}
          style={this.props.submitInProgress ? {height: 44, marginTop:-44,} : {height:0}}
          size={'large'}
        />
        <Button containerStyle={styles.btnPrimaryContainer} style={styles.btnPrimary} onPress={this.onPressLogin}>登 录</Button>
        {
          //<Button containerStyle={{marginRight:16, marginTop:16,}} style={styles.btnLossPass}>忘记密码?</Button>
        }
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
  },
  inputTitle: {
    fontSize: 14,
    width: 50,
    color: '#727272',
  },
  input: {
    flex: 1,
    fontSize: 15,
    marginHorizontal: 8,
    height: Platform.OS === 'ios' ? 20 : 36,
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
  btnLossPass: {
    alignSelf: 'flex-end',
    color: '#116EED',
  },
});

const mapStateToProps = state => {
  return {
    username: state.login.username,
    password: state.login.password,
    submitInProgress: state.login.submitInProgress,
    submitError: state.login.submitError,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    loginActions: bindActionCreators(LoginActionCreators, dispatch),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
