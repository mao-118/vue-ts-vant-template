import request from '@/utils/request'
import { Result } from '@/utils/types'

/*
Api example
泛型 T 不是必须的
若要指定返回值类型，可传递泛型给Result对象
*/
export function getListApi<T = any>(params: T): Promise<Result> {
  return request({
    url: '/api/user/getUserList',
    method: 'get',
    params,
  })
}
