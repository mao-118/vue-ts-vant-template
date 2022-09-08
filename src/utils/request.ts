import axios, { AxiosInstance } from 'axios';
import { Toast } from 'vant';
import { loading } from '@/hooks';
import { getHrefParams } from '@/utils';

const service: AxiosInstance = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL,
  timeout: 5000,
  headers: {
    token: getHrefParams('token')
  }
});

service.interceptors.request.use(
  config => {
    Toast.clear();
    loading.value = true;
    return config;
  },
  (error) => {
    loading.value = false;
    console.log(error);
  }
);
function toastInfo(res: Partial<{ msg: string, message: string }>) {
  return res.msg || res.message || '请求失败';
}
service.interceptors.response.use(
  response => {
    loading.value = false;
    const res = response.data;
    if (res.code !== 200) {
      Toast.fail(toastInfo(res));
      return Promise.reject(new Error(toastInfo(res)));
    }
    return Promise.resolve(res);
  },
  (error) => {
    loading.value = false;
    Toast.fail(toastInfo(error));
    return Promise.reject(error);
  }
);

export default service;
