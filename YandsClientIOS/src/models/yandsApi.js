/**
rest 接口类
*/
'use strict';

import Frisbee from '../lib/frisbee';

const baseURI = 'http://localhost:8080/api/';

const api = new Frisbee({
  baseURI: baseURI,
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
  }
});

export default {
  api,

  updateHeader(header, content) {
    api.headers[header] = content;
  },

  login(payload) {
    return Promise.resolve({
      body: {
        jwsToken: 'w1e24343458asf81263ksj12312k18f8hf6wi37d6safj6fheu',
      },
    });
  },

  sendSmsMessage(payload) {
    return Promise.resolve();
  },

  verifySmsCode(phoneNumber, smsCode) {
    return Promise.resolve({
      body: {
        token: 'k8ey5dgrdjfkdejeuf8dj',
      },
    });
  },

  registerBind(payload) {
    return Promise.resolve({
      body: {
        jwsToken: 'w1e24343458asf81263ksj12312k18f8hf6wi37d6safj6fheu',
      },
    });
  },
};
