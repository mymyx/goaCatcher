import axios from "axios";
import{BASE_URI} from "./pathMap";
import Toast from "./Toast";
const instance=axios.create(
    {
        baseURL:BASE_URI,
        timeout:60000,
    }
)
// 添加请求拦截器
instance.interceptors.request.use(function (config) {
  // 弹窗
  Toast.showLoading("Loading");
    // 在发送请求之前做些什么
    return config;
  }, function (error) {
    // 对请求错误做些什么
    return Promise.reject(error);
  });

// 添加响应拦截器
instance.interceptors.response.use(function (response) {
  // 关闭弹窗
  Toast.hideLoading();
    // 对响应数据做点什么
    return response.data;
  }, function (error) {
    // 对响应错误做点什么
    return Promise.reject(error);
  });
export default{
    get:instance.get,
    post:instance.post
}