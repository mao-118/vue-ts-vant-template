import throttle from 'lodash/throttle'
import debounce from 'lodash/debounce'
// 节流
export const throttled = throttle((fun, ...args) => fun(...args), 1500, {
  leading: true,
  trailing: false,
})
// 防抖
export const debounced = debounce((fun, ...args) => fun(...args), 500)
