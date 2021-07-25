import axios from 'axios';
import { BASE_URI } from './pathMap';
import Toast from './Toast';
import { Toast as TeasetToast } from 'teaset';
import qs from 'querystring';
import tokenUtil from './tokenUtil';

const instance = axios.create({
  baseURL: BASE_URI,
  timeout: 60000,
  headers: {
    // 'Access-Control-Allow-Origin': '*',
    'Content-Type': 'application/x-www-form-urlencoded',
    // mode: 'no-cors',
  },
});
// 添加请求拦截器
instance.interceptors.request.use(
  function (config) {
    console.log('[request]', config);
    // 弹窗
    Toast.showLoading('Loading');
    // 在发送请求之前做些什么
    const requestData = {
      ...config.data,
      token: tokenUtil.token,
    };
    return {
      ...config,
      data: qs.stringify(requestData),
    };
  },
  function (error) {
    // 对请求错误做些什么
    return Promise.reject(error);
  },
);

// 添加响应拦截器
instance.interceptors.response.use(
  function (response) {
    console.log('[response]', response.data);
    // 关闭弹窗
    Toast.hideLoading();

    // 对响应数据做点什么
    const { status, msg } = response.data || {};
    if (status) {
      return response.data;
    } else {
      TeasetToast.show({ text: msg });
      return Promise.reject(msg);
    }
  },
  function (error) {
    // 对响应错误做点什么
    Toast.hideLoading();
    return Promise.reject(error);
  },
);
export default {
  get: instance.get,
  post: instance.post,
};
