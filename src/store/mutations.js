import { ADD_COUNTER, ADD_TO_CART } from './mutations-type'

export default {
  // mutations里面的方法尽可能单一
  [ADD_COUNTER] (state, payload) {
    payload.count += 1
  },
  [ADD_TO_CART] (state, payload) {
    // console.log(payload)
    // 添加一个属性,让复选框默认选中
    payload.checked = true
    // 添加一个属性,默认数量是1
    payload.count = 1
    state.cartList.push(payload)
  }
}