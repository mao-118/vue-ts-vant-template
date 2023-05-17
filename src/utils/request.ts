import axios, { AxiosInstance, AxiosResponse, AxiosRequestConfig } from 'axios'
import { Toast } from 'vant'
import { getUserInfo } from '@/utils'
import { NProgress } from '@/plugins/nprogress'
import { Result } from './typings'
const service: AxiosInstance = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL,
  timeout: 5000,
  // headers: {},
})

service.interceptors.request.use(
  async (config: AxiosRequestConfig) => {
    NProgress.start()
    const userInfo: any = await getUserInfo()
    config.headers = {
      ...config.headers,
      ...userInfo.header, // 挂载app传递的头信息
    }
    return config
  },
  (error) => {
    NProgress.done()
    console.log(error)
  }
)

function toastInfo(res: Partial<Result>) {
  return res.msg || res.message || '请求失败'
}
service.interceptors.response.use(
  (response: AxiosResponse): Promise<Result> => {
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
