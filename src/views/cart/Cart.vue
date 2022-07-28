<template>
  <div class="cart">
    <!-- 导航 -->
    <nav-bar class="nav-bar">
      <div slot="center" v-if="length">购物车({{ length }})</div>
      <div slot="center" v-else>购物车竟然是空的</div>
    </nav-bar>
    <!-- 商品列表 -->
    <cart-list></cart-list>

    <!-- 底部汇总 -->
    <Cart-bottom-bar></Cart-bottom-bar>
  </div>
</template>

<script>
import NavBar from 'components/common/navbar/NavBar'
import CartList from './childComps/CarList.vue'
import CartBottomBar from './childComps/CartBottomBar'

// 直接使用vuex里面的计算属性
import { mapGetters } from 'vuex'
export default {
  name: 'Cart',
  data () {
    return {

    }
  },
  methods: {

  },
  created () {

  },
  computed: {
    // vuex里面的getters，需引入...mapGetters
    // 使用vuex的计算属性
    // ...mapGetters(['cartLength'])

    // 或者这样使用
    ...mapGetters({
      // 重新命名
      length: 'cartLength'
    })
  },
  components: {
    NavBar,
    CartList,
    CartBottomBar
  }
}
</script>

<style scoped>
.cart {
  height: 100vh;
}
.nav-bar {
  position: relative;
  z-index: 9;
  background-color: rgb(240, 127, 145);
  font-weight: 700;
  color: white;
  font-size: 16px;
}
</style>
