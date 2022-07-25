<template>
  <div id="home">
    <nav-bar class="home-nav"><div slot="center">购物街</div></nav-bar>
    <carousel :banners="banners"></carousel>
    <home-recommend-view :recommends="recommends"></home-recommend-view>
  </div>
</template>

<script>
import NavBar from 'components/common/navbar/NavBar'
import Carousel from 'components/content/Carousel/Carousel'
import HomeRecommendView from './childComps/HomeRecommendView'
import { getHomeMultidata } from '@/network/home'
export default {
  name: 'Home',
  data () {
    return {
      banners: [],
      recommends: []
    }
  },
  methods: {
  },
  // 组件创建完成发送网络请求
  created () {

    // 请求多个数据
    getHomeMultidata().then(res => {
      console.log(res)
      const { data } = res.data
      this.banners = data.banner.list
      this.recommends = data.recommend.list
    })
  },
  computed: {

  },
  components: {
    NavBar,
    Carousel,
    HomeRecommendView
  }
}
</script>

<style scoped>
.home-nav {
  background-color: var(--color-tint);
  color: white;
}
</style>
