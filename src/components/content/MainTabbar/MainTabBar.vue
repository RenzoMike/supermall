<template>
  <tab-bar>
    <!-- 首页 -->
    <tab-bar-item path="/home">
      <!-- 具名插槽 slot="创建具名插槽时的名字" -->
      <img slot="item-icon" src="@/assets/image/tabbar/home.svg" alt="" />
      <img
        slot="item-icon-active"
        src="@/assets/image/tabbar/home_active.svg"
      />
      <div slot="item-text">首页</div>
    </tab-bar-item>

    <!-- 传值  菜单 -->
    <tab-bar-item path="/category">
      <img
        slot="item-icon-active"
        src="@/assets/image/tabbar/category_active.svg"
        alt=""
      />
      <img slot="item-icon" src="@/assets/image/tabbar/category.svg" alt="" />
      <div slot="item-text">导航</div>
    </tab-bar-item>

    <!-- 购物车 -->
    <tab-bar-item path="cart">
      <img
        slot="item-icon-active"
        src="@/assets/image/tabbar/shopcart_active.svg"
        alt=""
      />
      <img slot="item-icon" src="@/assets/image/tabbar/shopcart.svg" alt="" />

      <div slot="item-text">购物车</div>
    </tab-bar-item>
    <!-- 我的 -->
    <tab-bar-item path="profile">
      <img
        slot="item-icon-active"
        src="@/assets/image/tabbar/profile_active.svg"
        alt=""
      />
      <img slot="item-icon" src="@/assets/image/tabbar/profile.svg" alt="" />

      <div slot="item-text">我的</div>
    </tab-bar-item>
  </tab-bar>
</template>

<script>
// 引入tabbar,整个导航栏 布局组件
import TabBar from 'components/common/tabbar/TabBar'
// 导航栏每个选项卡都是一个组件,预留两个插槽位置放置图标和文本
import TabBarItem from 'components/common/tabbar/TabBarItem'
export default {
  name: 'MainTabBar',
  data () {
    return {

    }
  },
  methods: {

  },
  created () {
  },
  computed: {

  },
  components: {
    // 注册组件
    TabBarItem,
    TabBar
  }
}
</script>

<style scoped>
</style>
