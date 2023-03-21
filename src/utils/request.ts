import axios, { AxiosInstance, AxiosResponse, AxiosRequestConfig, AxiosRequestHeaders } from 'axios'
import { Toast } from 'vant'
import { getToken } from '@/utils'
import { NProgress } from '@/plugins/nprogress'
import { toEncryption } from './encryption'

const service: AxiosInstance = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL,
  timeout: 5000,
  headers: {
    token: getToken(),
  },
})

service.interceptors.request.use(
  (config: AxiosRequestConfig) => {
    NProgress.start()
    // 验签
    // const requestHeaders = config.headers as AxiosRequestHeaders
    // requestHeaders.timestamp = String(Math.floor(new Date().valueOf() / 1000))
    // requestHeaders.sign = toEncryption(config.data || config.params || {})
    return config
  },
  (error) => {
    NProgress.done()
    console.log(error)
  }
)

function toastInfo(res: Partial<UtilTypes.Result>) {
  return res.msg || res.message || '请求失败'
}
service.interceptors.response.use(
  (response: AxiosResponse): Promise<UtilTypes.Result> => {
    NProgress.done()
    const res = response.data
    if (res.code !== 200) {
      Toast.fail(toastInfo(res))
      return Promise.reject(res)
    }
    return Promise.resolve(res)
  },
  (error) => {
    NProgress.done()
    Toast.fail(toastInfo(error))
    return Promise.reject(error)
  }
)
export default service
