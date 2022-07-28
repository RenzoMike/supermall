<template>
  <div class="back-top"></div>
</template>

<script>
export default {
  name: 'BackTop',
}
</script>

<style scoped>
.back-top {
  position: fixed;
  right: 16px;
  bottom: 66px;
  width: 44px;
  height: 44px;
  background: url(@/assets/image/common/to-top.png) no-repeat center center;
  background-size: 70% 70%;
  border-radius: 50%;
  background-color: rgba(255, 255, 255, 0.8);
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}
</style>
