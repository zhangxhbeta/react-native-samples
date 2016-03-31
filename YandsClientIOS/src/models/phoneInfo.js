/**
获取手机信息
*/
'use strict';

import DeviceInfo from 'react-native-device-info';
import React, { Platform } from 'react-native';

const CarrierInfo = React.NativeModules.RNCarrierInfo;

/**
获取手机信息，格式如下
  {
      imei: {/设备唯一代码[安卓设备取imei|苹果设备生成唯一id]/},
      msid: {/基站代码/}, // 可能为空
      mac: {/mac地址/},  // 可能为空
      osName: {/系统名称[ios|android|警务通]/},
      osVersion: {/系统版本/},
      phoneType: {/硬件机型(小米4)/},
      ispType: {/运营商类型 [0、其他 1、中国移动 2、中国电信 3、中国联通]/},
      longitude: {/经度/}, // 可能为空
      latitude: {/纬度/},  // 可能为空
      address: {/注册／登录发生地/} // 可能为空
  }
*/
export default function getPhoneInfo() {
  // TODO 获取经纬度
  // TODO 获取位置

  return new Promise((fulfill, reject) => {
    if (Platform.OS === 'ios') {
      CarrierInfo.carrierName(carrierName => {
        let ispType = 0;
        if (carrierName === 'cmcc') {
          ispType = 1;
        }
        fulfill({
          imei: DeviceInfo.getUniqueID(),
          msid: null,
          mac: null,
          osName: 'ios',
          osVersion: DeviceInfo.getSystemVersion(),
          phoneType: DeviceInfo.getModel(),
          ispType: ispType,
          longitude: null,
          latitude: null,
          address: null,
        });
      });
    } else {
      fulfill({
        imei: DeviceInfo.getUniqueID(),
        msid: null,
        mac: null,
        osName: 'android',
        osVersion: DeviceInfo.getSystemVersion(),
        phoneType: DeviceInfo.getModel(),
        ispType: 0,
        longitude: null,
        latitude: null,
        address: null,
      });
    }
  });
}
