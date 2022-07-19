import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from "axios";
import { Toast } from "vant";
import { useStore } from "@/store";
const store = useStore();
const service: AxiosInstance = axios.create({
  baseURL: "",
  timeout: 5000,
});

service.interceptors.request.use(
  (config: AxiosRequestConfig<any>) => {
    Toast.clear();
    store.setLoading(true);
    return config;
  },
  (error) => {
    store.setLoading(false);
    console.log(error);
  }
);

service.interceptors.response.use(
  (response: AxiosResponse<any, any>) => {
    store.setLoading(false);
    const res = response.data;
    if (res.code !== 200) {
      Toast.fail(res.msg || "请求失败");
      return Promise.reject(new Error(res.msg || "请求失败"));
    }
    return Promise.resolve(res);
  },
  (error) => {
    store.setLoading(false);
    Toast.fail(error.message || "请求失败");
    return Promise.reject(error);
  }
);

export default service;
