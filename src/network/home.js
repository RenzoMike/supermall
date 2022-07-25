import { request } from './request'
// 封装首页中所有的网络请求
export function getHomeMultidata () {
  return request({
    url: '/home/multidata'
  })
}
