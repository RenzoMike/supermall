<template>
  <div id="carousel">
    <div class="imgNum">
      <span class="num">{{ num }}</span>
      <span calss="total">{{ topImages.length }}</span>
    </div>
    <el-carousel
      trigger="click"
      arrow="never"
      height="300px"
      indicator-position="none"
      ref="carousel"
      @change="itemchange"
    >
      <el-carousel-item v-for="(item, index) in topImages" :key="index">
        <img :src="item" alt="" />
      </el-carousel-item>
    </el-carousel>
  </div>
</template>

<script>
export default {
  name: 'DetailCarousel',
  props: {
    topImages: {
      type: Array,
      default () {
        return []
      }
    }
  },
  data () {
    return {
      num: 1
    }
  },
  mounted () {
    if (this.$refs.carousel) this.sildeBanner()
  },
  created () { },
  methods: {
    itemchange (pre, next) {
      // console.log(pre)
      // this.num <= 0 ? this.num = 1 : this.num = pre + 1
      this.num = pre + 1
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
  computed: {
    getNum () {
      return this.num = 1
    }
  },
  components: {},
}
</script>

<style scoped>
#carousel {
  position: relative;
}
.el-carousel__item img {
  width: 100%;
}
.imgNum {
  position: absolute;
  right: 20px;
  bottom: 10px;
  z-index: 12;
  background-color: black;
  /* border-radius: 10px 10px 10x 10px; */
  border-radius: 6px 4px;
  overflow: hidden;
  text-align: center;
  opacity: 0.5;
}
.imgNum span {
  display: block;
  float: left;
  width: 24px;
  height: 30x;
  font-size: 10px;
  padding: 3px;
  color: white;
}
.num {
  /* transform: translateX(14px); */
  background-color: rgb(66, 66, 66);
}
</style>
