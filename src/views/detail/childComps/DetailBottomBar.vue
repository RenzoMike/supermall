<template>
  <div class="bottom-bar">
    <div class="bar-item bar-left" @click="addToCart">
      <span class="addCart">加入购物车</span>
    </div>
    <div class="bar-item bar-right" @click="buy">
      <span class="buy">购买</span>
    </div>
    <!-- <sport-ball ref="ball" class="sport-ball"></sport-ball> -->
  </div>
</template>

<script>
export default {
  name: 'DetailBottomBar',
  props: {},
  data () {
    return {

    }
  },
  created () { },
  methods: {
    addToCart () {
      this.$emit('addToCart')
    },
    buy () {
      console.log('购买')
    }
  },
  computed: {},
  components: {},
}
</script>

<style scoped>
.bottom-bar {
  position: flxed;
  display: flex;
  left: 0;
  right: 0;
  bottom: 10px;
  width: 90%;
  height: 49px;
  border-radius: 60px;
  overflow: hidden;
  background-color: pink;
  /* z-index: 999; */
  margin: 0 auto;
  box-shadow: 2px 4px 6px rgba(94, 94, 94, 0.4);
}
.bar-item span {
  text-shadow: 0 1px 1px rgba(0, 0, 0, 0.2);
}
.bar-item {
  flex: 1;
  text-align: center;
  line-height: 49px;
  font-size: 16px;
  font-weight: 700;
  color: rgb(255, 255, 255);
}
.bar-left {
  background-color: rgb(255, 213, 0);
}
.bar-right {
  background-color: rgb(255, 132, 0);
  box-shadow: -2px 0 4px rgba(0, 0, 0, 0.2);
}
</style>
