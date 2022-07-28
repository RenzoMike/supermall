<template>
  <!--  -->
  <div ref="wrapper">
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import BScroll from '@better-scroll/core'
import Pullup from '@better-scroll/pull-up'
BScroll.use(Pullup)
export default {
  name: 'Scroll',
  props: {
    probeType: {
      type: Number,
      default: 0
    },
    pullUpLoad: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
      bscroll: null,
    }
  },
  methods: {
    // 滚动插件
    initBscroll () {

      this.bscroll = new BScroll(this.$refs.wrapper, {
        pullUpLoad: this.pullUpLoad,
        click: true,
        probeType: this.probeType,
        pullingUp: true
      })
      this.bscroll.on('pullingUp', this.pullingUpHandler)
      // this.bscroll.on('pullingUp', () =>  this.bscroll.finishPullUp())
      // 监听滚动位置
      this.bscroll.on('scroll', (position) => {
        this.$emit('scroll', position)
      })
      // 监听上拉事件,实现上拉加载更多
      if (this.pullUpLoad) {
        this.bscroll.on('pullingUp', () => {
          this.$emit('pullingup')
        })
      }

    },
    async pullingUpHandler () {
      this.isPullUpLoad = true

      await this.requestData()
      this.bscroll.finishPullUp()
      // 重新计算高度
      this.bscroll.refresh()
      this.isPullUpLoad = false
    },
    async requestData () {
      try {
        const newData = await this.ajaxGet(/* url */)
        this.data += newData
      } catch (err) {
        // handle err
        console.log(err)
      }
    },
    ajaxGet (/* url */) {
      return new Promise(resolve => {
        setTimeout(() => {
          resolve(20)
        }, 1000)
      })
    },

    scrollTo (x, y, time = 600) {
      this.bscroll && this.bscroll.scrollTo(x, y, time)
    },
    refresh () {
      this.bscroll && this.bscroll.refresh()
    },
    finishPullUp () {
      this.bscroll && this.bscroll.finishPullUp()
    },
    getScrollY () {
      // console.log(this.bscroll.y)
      return this.bscroll ? this.bscroll.y : 0
    }
  },
  mounted () {
    this.initBscroll()
  },
  created () {

  },
  computed: {},
  components: {},
}
</script>

<style scoped>
</style>
