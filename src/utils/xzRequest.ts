/**
 * @file request.js
 * @description 封装 axios 请求实例，包含 GET 和 POST 请求方法
 * @example
 * import { get, post } from './request';
 *
 * 发送 GET 请求
 * get('/api/example')
 *   .then(data => console.log(data))
 *   .catch(error => console.error(error));
 *
 * 发送 POST 请求
 * post('/api/example', { key: 'value' })
 *   .then(data => console.log(data))
 *   .catch(error => console.error(error));
 *
 * 自定义请求配置
 * const customConfig = {
 *   headers: {
 *     'Custom-Header': 'value'
 *   }
 * };
 *
 * get('/api/example', {}, customConfig)
 *   .then(data => console.log(data))
 *   .catch(error => console.error(error));
 */
import { message } from 'antd';
import axios, { InternalAxiosRequestConfig } from 'axios';

// 设置不同环境下的 BASE_URL

// const BASE_URL =
//   {
//     development: "http://43.143.210.219:8012",
//     production: "https://api.zihuoxinrui.com",
//     test: "https://api.zihuoxinrui.com",
//   }[ENV] || "https://api.zihuoxinrui.com";

// const FILE_URL =
//   {
//     development: "http://43.143.210.219:8012",
//     production: "https://api.zihuoxinrui.com",
//     test: "https://api.zihuoxinrui.com",
//   }[ENV] || "https://api.zihuoxinrui.com";

const BASE_URL = 'https://os.syngents.cn/databoard-backend/';
const FILE_URL = 'https://os.syngents.cn/databoard-backend/';

// 创建 axios 实例
const axiosInstance = axios.create({
  baseURL: BASE_URL,
  timeout: 5000,
});

// 请求拦截器
axiosInstance.interceptors.request.use(
  (config: InternalAxiosRequestConfig) => {
    const access =
      config.headers?.access || localStorage.getItem('access') || sessionStorage.getItem('access');
    if (access) {
      config.headers.set('Authorization', `Bearer ${access}`);
      config.headers.delete('access');
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  },
);

// 响应拦截器
axiosInstance.interceptors.response.use(
  (response: any) => {
    const { status, data } = response;
    const isSuccess = status === 200 && (data.status === undefined || data.status === 200);

    if (isSuccess) {
      return data.data !== undefined ? data.data : data;
    } else if (status === 401) {
      message.error('身份信息无效，即将跳转到登录页面');
      localStorage.removeItem('token');
      setTimeout(() => {
        window.location.href = '/login';
      }, 2000);
      return Promise.reject(new Error('身份信息无效'));
    } else {
      message.error(data.message || '请求失败');
      return Promise.reject(new Error(data.message || '请求失败'));
    }
  },
  (error) => {
    if (error.code === 'ECONNABORTED') {
      message.error(error.message || '请求超时，请稍后重试');
    } else {
      message.error(error.message || '网络请求错误');
    }
    return Promise.reject(error);
  },
);

/**
 * 发送 GET 请求
 * @param {string} url - 请求 URL
 * @param {Object} params - 请求参数
 * @param {Object} config - 请求配置
 * @returns {Promise} - 响应数据
 */
export const get = (
  url: string,
  params: Record<string, any> = {},
  config: Partial<InternalAxiosRequestConfig> = {},
) => axiosInstance.get(url, { params, ...config });

/**
 * 发送 POST 请求
 * @param {string} url - 请求 URL
 * @param {Object} data - 请求数据
 * @param {Object} config - 请求配置
 * @returns {Promise} - 响应数据
 */
export const post = (
  url: string,
  data: Record<string, any> = {},
  config: Partial<InternalAxiosRequestConfig> = {},
) => axiosInstance.post(url, data, config);

export { BASE_URL, FILE_URL };
