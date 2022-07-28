<template>
  <div id="home">
    <!-- 导航栏 -->
    <nav-bar class="home-nav"><div slot="center">购物街</div></nav-bar>
    <tab-control
      :titles="['流行', '新款', '精选']"
      @tabClick="tabClick"
      ref="tabControl1"
      class="tab-control"
      v-show="isTabFixed"
    ></tab-control>
    <!-- 滚动插件容器 -->
    <scroll
      class="content"
      ref="scroll"
      :probeType="3"
      @scroll="handleScroll"
      :pull-up-load="true"
      @pullingup="loadMore"
    >
      <!-- 走马灯 -->
      <carousel :banners="banner"></carousel>
      <home-recommend-view :recommends="recommends"></home-recommend-view>
      <home-feature></home-feature>
      <tab-control
        :titles="['流行', '新款', '精选']"
        @tabClick="tabClick"
        ref="tabControl2"
      ></tab-control>
      <goods-list :goods="showGoods"></goods-list>
    </scroll>
    <back-top @click.native="backTop" v-show="isBackTop"></back-top>
  </div>
</template>

<script>
import HomeRecommendView from './childComps/HomeRecommendView'
import HomeFeature from './childComps/HomeFeature'

import NavBar from 'components/common/navbar/NavBar'
import Scroll from 'components/common/scroll/Scroll'
import TabControl from 'components/content/tabControl/TabControl'
import Carousel from 'components/content/Carousel/Carousel'
import GoodsList from 'components/content/goods/GoodsList'
import BackTop from 'components/content/backTop/BackTop'

import {
  getHomeMultidata,
  getHomeGoods
} from '@/network/home'

import { debounce } from '@/common/utils/property.js'
export default {
  name: 'Home',
  data () {
    return {
      banner: [],
      recommends: [],
      // 默认显示params.pop
      currentPage: 'pop',
      goods: {
        'pop': { page: 0, list: [] },
        'new': { page: 0, list: [] },
        'sell': { page: 0, list: [] }
      },
      isBackTop: false,
      tabOffsetTop: 0,
      isTabFixed: false
    }
  },
  // 被 keep-alive 缓存的组件激活时调用。
  activated () {
    this.$refs.scroll.scrollTo(0, this.saveY, 200)
    this.$refs.scroll.refresh()
  },
  // 被 keep-alive 缓存的组件失活时调用。
  deactivated () {
    // 离开时候保存坐标y
    this.saveY = this.$refs.scroll.getScrollY()
  },
  // 组件创建完成发送网络请求
  created () {
    // 请求多个数据
    this.getHomeMultidata()
    // 请求商品数据
    this.getHomeGoods("pop")
    this.getHomeGoods("new")
    this.getHomeGoods("sell")
  },
  mounted () {
    const refresh = debounce(this.$refs.scroll.refresh, 500)
    // 监听item中图片加载完成，重新计算高度
    // this.$bus.$on('itemImageLoad', () => {
    //   this.$refs.scroll.bscroll && this.$refs.scroll.bscroll.refresh()
    // })
    this.$bus.$on('itemImageLoad', () => refresh())

    // 获取tabControl的offsettop
    // 所有组件都有一个属性$el，用于获取组件中的元素
    this.$bus.$on('carouselImgLoad', () => {
      // console.log('轮播图加载完成')
      // console.log(this.$refs.tabControl.$el.offsetTop)
      this.tabOffsetTop = this.$refs.tabControl2.$el.offsetTop
    })
  },
  methods: {
    /**
     * 网络请求相关方法
     */
    getHomeMultidata () {
      getHomeMultidata().then(res => {
        const { data } = res.data
        this.banner = data.banner.list
        this.recommends = data.recommend.list
      })
    },
    getHomeGoods (type) {
      // 请求之后page+1
      const page = this.goods[type].page + 1
      getHomeGoods(type, page).then(res => {
        const { data } = res.data
        this.goods[type].list.push(...data.list)
        this.goods[type].page + 1

        // 执行scroll插件的一个方法，上拉加载更多  scroll组件中的bscroll的实例(插件)的方法
        this.$refs.scroll && this.$refs.scroll.finishPullUp()
      })
    },
    /**
     * 事件监听相关
     */
    // 防抖
    // debounce (func, delay) {
    //   let timer = null
    //   return (...args) => {
    //     if (timer) clearTimeout(timer)
    //     timer = setTimeout(() => {
    //       func.apply(this, args)
    //     }, delay)
    //   }
    // },
    // 根据点击tabClick方法的index显示不同的路由
    tabClick (index) {
      // console.log(index)
      switch (index) {
        case 0:
          this.currentPage = 'pop'
          break
        case 1:
          this.currentPage = 'new'
          break
        case 2:
          this.currentPage = 'sell'
          break
      }
      // 默认显示和吸顶效果的 显示一致
      if (this.$refs.tabControl1 !== undefined) {
        this.$refs.tabControl1.currentIndex = index
        this.$refs.tabControl2.currentIndex = index
      }
    },
    // 组件事件监听事件， .navtive监听组件跟元素的原生事件  @click.navtive="backTop"
    backTop () {
      // 拿到scroll组件,获取滚动插件实例,scrollTo是滚动插件的api
      this.$refs.scroll && this.$refs.scroll.scrollTo(0, 0, 1000)
    },
    // 滚动
    handleScroll (position) {
      // 上拉到一定高度隐藏返回顶部组件
      this.isBackTop = position.y < -600
      // console.log(position.y)
      // console.log(this.tabOffsetTop)
      // 上拉到一定位置显示tabcontrol
      this.isTabFixed = (position.y < -this.tabOffsetTop)
    },
    // 上拉加载更多
    loadMore () {
      // 继续发送网络请求
      this.getHomeGoods(this.currentPage)
      // 图片加载完成，然后重新计算可滚动的区域,才能继续出发上拉事件
      this.$refs.scroll && this.$refs.scroll.refresh()
    }
  },
  computed: {
    showGoods () {
      return this.goods[this.currentPage].list
    }
  },
  components: {
    HomeRecommendView,
    HomeFeature,
    NavBar,
    Scroll,
    TabControl,
    Carousel,
    GoodsList,
    BackTop
  },
  // 销毁函数
  beforeDestroy () {
    // 销毁事件总线
    this.$bus.$off('itemImageLoad')
    this.$bus.$off('carouselImgLoad')
  }
}
</script>

<style scoped>
#home {
  height: 100vh;
  position: relative;
  /* padding-top: 44px; */
}
.home-nav {
  background-color: var(--color-tint);
  color: white;
  /* 
    解决原生滚动问题，导航跟随滚动的问题
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  z-index: 999; */
}
.content {
  position: absolute;
  overflow: hidden;
  top: 44px;
  bottom: 49px;
  left: 0;
  right: 0;
}
/* 设置滚动的窗口高度 */
/* .content {
  height: calc(100% - 93px);
  margin-top: 44px;
  overflow: hidden;
} */
.showBackTop {
  display: none;
}
.tab-control {
  position: relative;
  z-index: 10;
}
</style>
