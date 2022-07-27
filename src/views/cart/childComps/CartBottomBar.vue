<template>
  <div class="bottom-bar">
    <button type="checkbox"></button>
  </div>
</template>

<script>
export default {
  name: 'CartBottomBar',
  props: {},
  data () {
    return {

    }
  },
  // 这时可以访问data和methods
  created () { },
  // 方法
  methods: {},
  // 计算属性
  computed: {},
  // 组件注册
  components: {},
}
</script>

<style scoped>
.bottom-bar {
  height: 40px;
  background-color: pink;
  position: relative;
}
</style>
