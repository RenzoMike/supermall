<template>
  <div class="goods">
    <goods-list-item
      v-for="(item, index) of goods"
      :key="index"
      :goods-item="item"
    />
  </div>
</template>

<script>
import GoodsListItem from './GoodsListItem'
export default {
  name: 'GoodsList',
  props: {
    goods: {
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
    GoodsListItem
  },
  computed: {

  },
}
</script>

<style scoped>
.goods {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  padding: 2px;
}
</style>
