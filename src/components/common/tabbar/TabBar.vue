<template>
  <div id="tab-bar">
    <!-- 别人在用的时候，插入即可 -->
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'TabBar',
  data () {
    return {

    }
  },
  methods: {

  },
  created () {

  },
  computed: {

  },
}
</script>

<style scoped>
#tab-bar {
  display: flex;
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #f2f2f2;
  box-shadow: 0 -1px 2px rgba(204, 204, 204, 0.293);
}
</style>
