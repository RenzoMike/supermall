<template>
  <div class="tab-control">
    <div
      v-for="(item, index) of titles"
      :key="index"
      class="tab-control-item"
      :class="{ active: index === currentIndex }"
      @click="itemClick(index)"
    >
      <span>{{ item }}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TabControl',
  props: {
    titles: {
      type: Array,
      default () {
        return []
      }
    }
  },
  data () {
    return {
      currentIndex: 0
    }
  },
  methods: {
    itemClick (index) {
      this.currentIndex = index
      // 发送点击时间传递点击的信息
      this.$emit('tabClick', index)
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
.tab-control {
  display: flex;
  text-align: center;
  font-size: 14px;
  font-weight: 500;
  line-height: 40px;
  height: 40px;
  background-color: #fff;
  box-shadow: 0 3px 3px rgba(0, 0, 0, 0.08);
}
.tab-control-item {
  flex: 1;
  transition: all 0.5 ease;
}
.tab-control-item span {
  padding: 5px;
}
.active span {
  border-bottom: 3px solid var(--color-tint);
}
.active {
  color: var(--color-tint);
}
</style>
