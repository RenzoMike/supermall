<template>
  <div class="check-button">
    <img src="@/assets/image/home/left.png" alt="" />
  </div>
</template>

<script>
export default {
  name: 'checkButton',
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
.check-button {
  background-color: pink;
  width: 30px;
  height: 30px;
}

.check-button img {
  width: 100%;
}
</style>
