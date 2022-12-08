/*
 * 参数加密算法
 *
 * 签名算法--对参数键值对倒序排列,拼接成字符串,加上签名秘钥,md5加密
 * 键的排序使用 ASCII 码排序
 * */
import { Md5 } from 'ts-md5'

const FALSE_VALUE = [undefined, null, NaN]
const VITE_APP_API_SECRET = import.meta.env.VITE_APP_API_SECRET
export const toEncryption = (obj: any) => {
  let result = ''
  if (obj) {
    /* 过滤对象中的假值 */
    const objFilter: Record<string, any> = {}
    Object.keys(obj).forEach((key) => {
      if (!FALSE_VALUE.includes(obj[key])) objFilter[key] = obj[key]
    })
    const keys = Object.keys(objFilter).sort().reverse()
    for (const key of keys) result += `${key}${obj[key]}`
  }
  result += VITE_APP_API_SECRET
  return Md5.hashStr(result)
}
