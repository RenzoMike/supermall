<template>
  <div class="tab-bar-item" @click="itemClick">
    <div v-if="!isActive">
      <!-- 具名插槽，用来预留位置放图标和文字 -->
      <!-- 图标 -->
      <slot name="item-icon"></slot>
    </div>
    <!-- 点击时候切换icon -->
    <div v-else>
      <slot name="item-icon-active"></slot>
    </div>

    <!-- 文本 -->
    <div :style="activeStyle">
      <slot name="item-text"></slot>
    </div>
  </div>
</template>

<script>
/**
 * 这是导航栏单个组件,首页，购物车，导航，我的
 */
export default {
  name: 'TabBarItem',
  props: {
    // 接收传递过来的数据
    path: String,
    activeColor: {
      type: String,
      default: '#f15a6d'
    }
  },
  data () {
    return {
      // isActive: false,
    }
  },
  methods: {
    itemClick () {
      this.$router.replace(this.path)
    }
  },
  created () {

  },
  // 计算
  computed: {
    isActive () {
      // indexOf找不到就返回-1
      // 查找目前活跃的路由路径是否和现在的路由路径一样，如果找到一样的就不等于-1，然后就是
      return this.$route.path.indexOf(this.path) !== -1  //此刻等于true
    },
    activeStyle () {
      return this.isActive ? { color: this.activeColor } : {}
    }

  },
}
</script>

<style scoped>
.tab-bar-item {
  flex: 1;
  text-align: center;
  height: 49px;
  /* 一般高度是49px */
  font-size: 14px;
  margin-top: 2px;
  transition: all 1s ease-out;
}
.tab-bar-item img {
  width: 24px;
  height: 24px;
  vertical-align: middle;
  margin-bottom: 2px;
}
.active {
  color: #f15a6d;
}
</style>
