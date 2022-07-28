// 防抖函数, 使用场景：调用的函数比较频繁的话
export const debounce = (func, delay) => {
  let timer = null
  return (...args) => {
    if (timer) clearTimeout(timer)
    timer = setTimeout(() => {
      func.apply(this, args)
    }, delay)
  }
}
// 节流函数
export const throttle = (cd, time = 300) => {
  let last = 0
  return function () {
    var now = new Date().getTime();;
    if (now - last > wait) {
      cb.call(this)
      last = new Date().getTime();;
    }
  }
}
