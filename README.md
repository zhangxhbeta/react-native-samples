# react-native-samples
react-native 例子，是一个登录注册Demo，同时支持 Android 和 iOS

## 如何运行

android 版本运行 `react-native run-android`

ios 版本运行 `react-native run-ios`

### 注意

按照官方的说法，windows 下面开发服务器（packager）不会自动启动，需要手动启动

On Windows the packager won't be started automatically when you run react-native run-android. You can start it manually using:

```
cd MyAwesomeApp
react-native start
```


如果在 windows 下面碰到 `ERROR Watcher took too long to load`，可以增加超时时间在这个[文件](https://github.com/facebook/react-native/blob/master/packager/react-packager/src/DependencyResolver/FileWatcher/index.js#L16)里，(文件位于 node_modules/react-native 目录) const MAX_WAIT_TIME = 120000;

如果文件链接网页打不开，那么文件位置在 node_modules/react-native/packager/react-packager/src/DependencyResolver/FileWatcher/index.js
