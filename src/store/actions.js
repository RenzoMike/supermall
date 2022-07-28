import { ADD_COUNTER, ADD_TO_CART } from './mutations-type'

export default {
  addCart (context, payload) {
    // payload新添加的商品
    // 创建新的变量存储item
    /*let oldProduct = null
    // 判断购物车里面有没有在cartList里面存在
    for (let item in state.cartList) {
      // 判断id是否存在
      if (item.iid === payload.iid) {
        oldProduct = item
      }
    }*/
    // 查找数组种是否有该商品
    let oldproduct = context.state.cartList.find(item => item.iid === payload.iid)

    // 如果已存在
    if (oldproduct) {
      context.commit(ADD_COUNTER, oldproduct)

    } else {
      context.commit(ADD_TO_CART, payload)
      // 否则


    }
  }
}