import axios from 'axios'

export function request (config) {
  const instance = axios.create({
    baseURL: 'http://106.54.54.237:8000',
    timeout: 5000,
  })
  // return instance(config)
  // 添加请求拦截器
  axios.interceptors.request.use(function (config) {
    // 在发送请求之前做些什么
    console.log('请求之前做的事')
    return config
  }, function (error) {
    // 对请求错误做些什么
    return Promise.reject(error)
  })
  // 在请求或响应被 then 或 catch 处理前拦截它们。
  // 添加响应拦截器
  axios.interceptors.response.use(function (response) {
    // 2xx 范围内的状态码都会触发该函数。
    console.log('响应码在2xx的时候打印')
    // 对响应数据做点什么
    return response
  }, function (error) {
    // 超出 2xx 范围的状态码都会触发该函数。
    console.log('响应码超过2xx')
    // 对响应错误做点什么
    return Promise.reject(error)
  })

  // 直接返回的是一个promise  回调函数就可以用
  return instance(config)
}
// 新的api
export function newRequest (config) {
  const instance = axios.create({
    baseURL: 'http://106.54.54.237:8000/api/mn',
    timeout: 5000,
  })
  // return instance(config)
  // 添加请求拦截器
  axios.interceptors.request.use(function (config) {
    // 在发送请求之前做些什么
    console.log('请求之前做的事')
    return config
  }, function (error) {
    // 对请求错误做些什么
    return Promise.reject(error)
  })
  // 在请求或响应被 then 或 catch 处理前拦截它们。
  // 添加响应拦截器
  axios.interceptors.response.use(function (response) {
    // 2xx 范围内的状态码都会触发该函数。
    console.log('响应码在2xx的时候打印')
    // 对响应数据做点什么
    return response
  }, function (error) {
    // 超出 2xx 范围的状态码都会触发该函数。
    console.log('响应码超过2xx')
    // 对响应错误做点什么
    return Promise.reject(error)
  })

  // 直接返回的是一个promise  回调函数就可以用
  return instance(config)
}