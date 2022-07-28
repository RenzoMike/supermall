import { request, newRequest } from './request'

// 封装首页中所有的网络请求
export function getHomeMultidata () {
  return request({
    url: '/home/multidata'
  })
}

// 请求新的网络api
export function getHomeGoods (type, page) {
  return newRequest({
    url: '/home/data',
    params: {
      type,
      page
    }
  })
}