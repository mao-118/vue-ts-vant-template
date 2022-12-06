import axios, { AxiosInstance, AxiosResponse, AxiosRequestConfig } from 'axios'
import { Toast } from 'vant'
import { getHrefParams } from '@/utils'
import { Result } from '@/utils/types'
import { NProgress } from '@/plugins/nprogress'
const service: AxiosInstance = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL,
  timeout: 5000,
  headers: {
    token: getHrefParams('token'),
  },
})

service.interceptors.request.use(
  (config: AxiosRequestConfig) => {
    NProgress.start()
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
export default function request(config: AxiosRequestConfig): Promise<Result> {
  return service({ method: 'get', ...config }).then((res: AxiosResponse<Result>) => ({ ...res }))
}
