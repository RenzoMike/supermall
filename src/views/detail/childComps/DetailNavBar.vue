<template>
  <nav-bar>
    <div slot="left" class="left" @click="backClick">
      <img src="@/assets/image/detail/_arrow-left .png" alt="" />
    </div>
    <div slot="center" class="title">
      <div
        v-for="(item, index) in titles"
        :key="index"
        class="title-item"
        :class="{ active: index === currentIndex }"
        @click="titleClick(index)"
      >
        <span> {{ item }}</span>
      </div>
    </div>
  </nav-bar>
</template>

<script>
import NavBar from 'components/common/navbar/NavBar'

export default {
  name: 'DetailNavBar',
  props: {},
  data () {
    return {
      titles: ['商品', '参数', '评论', '推荐'],
      currentIndex: 0
    }
  },
  created () { },
  methods: {
    titleClick (index) {
      this.currentIndex = index
      this.$emit('titleClick', this.currentIndex)
    },
    backClick () {
      this.$router.go(-1)
    }
  },
  computed: {},
  components: { NavBar },
}
</script>

<style scoped>
.title {
  display: flex;
  font-size: 14px;
  padding: 0 20px;
}
.title-item {
  flex: 1;
}
.active {
  color: var(--color-tint);
  font-weight: 500;
}
.active span {
  padding: 5px;
  border-bottom: 3px solid var(--color-tint);
}
.left {
  text-align: center;
}
.left img {
  margin-top: 6px;
  margin-left: 20px;
  width: 50%;
  height: 50%;
}
</style>
