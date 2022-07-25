<template>
  <el-carousel
    trigger="click"
    arrow="hover"
    height="250px"
    change="setActiveItem"
  >
    <el-carousel-item v-for="(item, index) in banners" :key="index">
      <a :href="item.link">
        <img :src="item.image" alt="" />
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

    }
  },
  methods: {
    setActiveItem (pre, next) {
      console.log(pre)
    }
  },
  created () {

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
