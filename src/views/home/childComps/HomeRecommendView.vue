<template>
  <div class="recommend">
    <div
      v-for="(item, index) in recommends"
      :key="index"
      class="recommend-item"
    >
      <a :href="item.link">
        <img :src="item.image" alt="" />
        <div>{{ item.title }}</div>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HomeRecommendView',
  props: {
    recommends: {
      type: Array,
      default () {
        return []
      }
    }
  },
  data () {
    return {

    }
  },
  methods: {

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
.recommend {
  display: flex;
  margin: 10px 0;
  padding-bottom: 20px;
  border-bottom: 8px solid rgb(212, 212, 212);
}
.recommend-item {
  flex: 1;
  text-align: center;
  font-size: 12px;
}
img {
  width: 86%;
}
</style>
