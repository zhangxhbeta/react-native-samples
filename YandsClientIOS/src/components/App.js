/**
最重要的导航容器，大部分的路由都在这里展示
*/
'use strict';

import React from 'react-native';
import ExNavigator from '@exponent/react-native-navigator';
import loginRoute from './Login/route';
import mainNavigatorRoute from './MainNavigator/mainNavigatorRoute';
import { connect } from 'react-redux';

class App extends React.Component {

  componentWillUpdate(nextProps) {
    this.refs.nav.popToTop();
    this.refs.nav.replace(nextProps.scene);
  }

  render() {
    return (
      <ExNavigator
        ref={'nav'}
        initialRoute={this.props.scene || mainNavigatorRoute(loginRoute())}
        style={{ flex: 1 }}
        showNavigationBar={false}
      />
    );
  }
}

// 注入 store 里面的状态，注意 export 的 class 不是原来的
// ChannelNavigator 了，而是一个包装过的新对象
function mapStateToProps(state) {
  return {
    scene: state.app.scene,
  };
}

export default connect(mapStateToProps)(App);
