import { DevDomain } from './config';

function isApiSuccess(result) {
  const status = result.stat || result.status || ''; // 接口状态字段
  if (status === 'ok' || status === 'success' || status === 'succeed') {
    return true;
  } else {
    return false;
  }
}
export function getJSON(url, params, mockSetting) {
  let path = '';
  const { on = false, mockData = {} } = mockSetting;
  if (url.indexOf('http') > -1 || url.indexOf('https') > -1) {
    path = url;
  } else {
    path = DevDomain + url;
  }
  return new Promise((resolve, reject) => {
    my.showLoading();
    if (on) {
      console.log('-------返回 mock 数据-------', url, params, mockData);
      if (isApiSuccess(mockData)) {
        resolve(mockData);
      } else {
        reject(mockData);
      }
      my.hideLoading();
      return;
    }
    my.httpRequest({
      url: path,
      method: 'GET',
      data: params,
      dataType: 'json',
      success: (result) => {
        console.log('-------返回数据-------', url, result);
        my.hideLoading();
        if (isApiSuccess(result)) {
          resolve(result);
        } else {
          reject(result);
        }
      },
      fail: (err) => {
        console.log('-------返回错误-------', url, err);
        my.hideLoading();
        reject(err);
      },
    });
  });
}
