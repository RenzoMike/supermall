<template>
  <div class="cart-list">
    <scroll class="content" :pull-up-load="true" ref="scroll">
      <cart-list-item
        v-for="(item, index) in cartList"
        :key="index"
        :cart-list="item"
      >
      </cart-list-item>
    </scroll>
  </div>
</template>

<script>
import Scroll from 'components/common/scroll/Scroll'
import CartListItem from './CartListItem'
import { mapGetters } from 'vuex'
export default {
  name: 'CartList',
  props: {},
  data () {
    return {

    }
  },
  // 这时可以访问data和methods
  created () {
  },
  // 方法
  methods: {},
  // 计算属性
  computed: {
    ...mapGetters(['cartLength', 'cartList'])
  },
  // 组件注册
  components: {
    Scroll,
    CartListItem
  },
  activated () {
    // 可能没有刷新才不能鼠标滚动,所以
    this.$refs.scroll.refresh()
  }
}
</script>

<style scoped>
.cart-list {
  height: calc(100% - 44px - 49px - 40px);
  width: 100%;
}
.content {
  height: 100%;
  overflow: hidden;

  /* overflow: auto; */
}
</style>
