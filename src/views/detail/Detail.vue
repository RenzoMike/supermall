<template>
  <div id="detail">
    <!-- 导航栏 -->
    <detail-nav-bar
      @titleClick="titleClick"
      class="detail-nav"
    ></detail-nav-bar>
    <scroll
      class="content"
      ref="scroll"
      @scroll="handleScroll"
      :pull-up-load="true"
    >
      <detail-carousel :top-images="topImages"></detail-carousel>
      <detail-base-info :goods="goods"></detail-base-info>
      <detail-shop-info :shop="shop"></detail-shop-info>
      <detail-goods-info
        :detail-info="detailInfo"
        @imageLoad="imageLoad"
      ></detail-goods-info>
      <detail-param-info :param-info="paramsInfo"></detail-param-info>
    </scroll>
    <back-top @click.native="backTop" v-show="isBackTop"></back-top>
    <detail-bottom-bar
      @addToCart="addToCart"
      class="bottom-bar"
    ></detail-bottom-bar>
  </div>
</template>

<script>
import DetailNavBar from './childComps/DetailNavBar.vue'
import DetailCarousel from './childComps/DetailCarousel.vue'
import DetailShopInfo from './childComps/DetailShopInfo.vue'
import DetailBaseInfo from './childComps/DetailBaseInfo.vue'
import DetailGoodsInfo from './childComps/DetailGoodsInfo.vue'
import DetailParamInfo from './childComps/DetailParamInfo.vue'
import DetailBottomBar from './childComps/DetailBottomBar.vue'

import BackTop from 'components/content/backTop/BackTop'
import Scroll from 'components/common/scroll/Scroll'

import { getDetail, Goods, Shop, GoodsParam } from '@/network/detail'
export default {
  name: 'Detail',
  props: {},
  data () {
    return {
      iid: null,
      res: null,
      topImages: [],
      goods: {},
      shop: {},
      detailInfo: {},
      paramsInfo: {},
      isBackTop: false
    }
  },
  created () {
    this.iid = this.$route.params.iid

    getDetail(this.iid).then(res => {
      const { result } = res.data
      this.topImages = result.itemInfo.topImages
      // 获取商品信息
      this.goods = new Goods(result.itemInfo, result.columns, result.shopInfo.services)

      // 创建店铺信息
      this.shop = new Shop(result.shopInfo)

      // 保存商品的详情数据
      this.detailInfo = result.detailInfo

      // 获取参数信息
      this.paramsInfo = new GoodsParam(result.itemParams.info, result.itemParams.rule)
    })
  },
  mounted () {
  },
  methods: {
    imageLoad () {
      this.$refs.scroll.refresh()
    },
    titleClick (index) {
    },
    backTop () {
      this.$refs.scroll && this.$refs.scroll.scrollTo(0, 0, 1000)
    },
    handleScroll (position) {
      this.isBackTop = position.y < -600
    },
    addToCart () {
      // 获取购物车需要展示的信息
      const product = {}
      product.image = this.topImages[0]
      product.title = this.goods.title
      product.desc = this.goods.desc
      product.price = this.goods.realPrice
      product.iid = this.iid

      // 将商品添加到购物车里
      this.$store.dispatch('addCart', product)
    }
  },
  computed: {

  },
  components: {
    DetailNavBar,
    DetailCarousel,
    DetailBaseInfo,
    DetailShopInfo,
    DetailGoodsInfo,
    Scroll,
    DetailParamInfo,
    BackTop,
    DetailBottomBar
  },
}
</script>

<style scoped>
#detail {
  position: relative;
  height: 100vh;
  z-index: 10;
  background-color: #fff;
}
.detail-nav {
  position: relative;
  z-index: 9;
  background-color: #fff;
}
.content {
  /* position: absolute;
  overflow: hidden;
  top: 44px;
  bottom: 0;
  left: 0;
  right: 0; */
  height: calc(100% - 44px);
}
.bottom-bar {
  position: absolute;
  z-index: 999;
}
</style>
