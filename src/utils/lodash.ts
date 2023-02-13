import throttle from 'lodash/throttle'
import debounce from 'lodash/debounce'
// 节流
export const throttled = (fun: any, delar = 1000) => {
  return throttle(fun, delar, {
    leading: true,
    trailing: false,
  })
}
// 防抖
export const debounced = (fun: any, delar = 500) => debounce(fun, delar)
