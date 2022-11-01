import request from '@/utils/request';
import { Result } from '@/utils/types';
export function getListApi(): Promise<Result> {
  return request({
    url: '/ads/CEBICK3M.json?segment=placement:routervuejsorg',
    method: 'get'
  });
}
