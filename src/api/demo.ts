import request from '@/utils/request';
import { AxiosPromise } from 'axios';
export function getListApi(): AxiosPromise {
  return request({
    url: '/ads/CEBICK3M.json?segment=placement:routervuejsorg',
    method: 'get'
  });
}
