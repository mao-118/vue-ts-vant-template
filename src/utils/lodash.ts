import _ from 'lodash';
//节流
export const throttled = _.throttle(
  (fun, ...args) => fun(...args),
  1500,
  {
    leading: true,
    trailing: false
  }
);
//防抖
export const debounce = _.debounce(
  (fun, ...args) => fun(...args),
  500
);