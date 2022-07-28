<template>
  <el-carousel trigger="click" arrow="hover" ref="carousel">
    <el-carousel-item v-for="(item, index) in banners" :key="index">
      <a :href="item.link">
        <img :src="item.image" alt="" @load="imgLoad" />
      </a>
    </el-carousel-item>
  </el-carousel>
</template>

<script>

export default {
  name: 'name',
  props: {
    banners: {
      type: Array,
      default: []
    }
  },
  data () {
    return {
      isLoad: false
    }
  },
  methods: {
    setActiveItem (pre, next) {
      console.log(pre)
    },
    // 监听图片是否加载完成
    imgLoad () {
      try {
        if (!this.isLoad) {
          // console.log('轮播图加载完成')
          this.$bus.$emit('carouselImgLoad')
          this.isLoad = true
        }
      } catch (error) {
        console.log(error)
        return error
      }

    },
    sildeBanner () {
      // 1 / 选中的轮播图
      let box = document.querySelector('.el-carousel__container')
      let startPoint = 0
      let stopPoint = 0
      //重置坐标
      let resetPoint = () => {
        startPoint = 0
        stopPoint = 0
      }
      //手指按下
      box.addEventListener("touchstart", (e) => {
        // 1 / 手指点击位置的x坐标
        startPoint = e.changedTouches[0].pageX
      })
      // 1 / 手指滑动
      box.addEventListener("touchmove", (e) => {
        // 1手指滑动后终点位置x的坐标
        stopPoint = e.changedTouches[0].pageX
      })
      // 当手指抬起的时候，判断图片滚动离左右的距离
      box.addEventListener("touchend", (e) => {
        if (stopPoint == 0 | startPoint - stopPoint == 0) {
          resetPoint()
          return
        }
        if (startPoint - stopPoint > 0) {
          resetPoint()
          this.$refs.carousel.next()
          return
        }
        if (startPoint - stopPoint < 0) {
          resetPoint()
          this.$refs.carousel.prev()
          return
        }
      })
    }
  },
  mounted () {
    if (this.$refs.carousel) this.sildeBanner()
  },
  components: {

  },
  computed: {

  },
}
</script>

<style scoped>
.el-carousel__item a {
  color: #475669;
  font-size: 14px;
  opacity: 0.75;
  line-height: 150px;
  margin: 0;
}

.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
}
img {
  height: 100%;
  width: 100%;
  object-fit: cover;
  vertical-align: middle;
}
</style>
