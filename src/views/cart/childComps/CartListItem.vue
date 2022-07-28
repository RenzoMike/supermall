<template>
  <div id="shop-item">
    <div class="item-selector">
      <!-- <checkButton></checkButton> -->
      <input
        @click="checkClick"
        type="checkbox"
        id="inputId"
        v-model="isChecked"
      />
    </div>
    <div class="item-img">
      <img :src="cartList.image" alt="商品图片" />
    </div>
    <div class="item-info">
      <div class="item-title">{{ cartList.title }}</div>
      <div class="item-desc">{{ cartList.desc }}</div>
      <div class="item-bottom">
        <div class="item-price left">¥{{ cartList.price }}</div>
        <div class="item-count right">x{{ cartList.count }}</div>
      </div>
    </div>
  </div>
</template>

<script>
import CheckButton from 'components/content/checkButton/CheckButton'
export default {
  name: 'CartListItem',
  props: {
    cartList: {
      type: Object,
      default () {
        return {}
      }
    }
  },
  data () {
    return {
      //加入购物车就为true，默认选中
      isChecked: this.cartList.checked
    }
  },
  // 这时可以访问data和methods
  created () {
  },
  // 方法
  methods: {
    checkClick () {
      // 复选框反选
      this.cartList.checked = !this.cartList.checked
    }
  },
  // 计算属性
  computed: {},
  // 组件注册
  components: {
    CheckButton
  },
}
</script>

<style scoped>
#shop-item {
  width: 100%;
  position: relative;
  display: flex;
  font-size: 0;
  padding: 5px;
  padding-left: 10px;
  border-bottom: 1px solid #ccc;
}
.item-selector {
  padding: 0 10px;
  display: flex;
  justify-content: center;
  align-items: center;
}
#inputId {
  display: block;
  width: 16px;
  height: 16px;
  border-color: skyblue;
}
.item-title {
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}
.item-desc {
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}
.item-img {
  padding: 5px;
}
.item-bottom {
  margin-top: 10px;
  position: absolute;
  bottom: 10px;
  left: 10px;
  right: 1px;
}
.item-img img {
  width: 80px;
  height: 100px;
  display: block;
  border-radius: 5px;
}
.item-info {
  font-size: 17px;
  color: #333;
  padding: 5px 10px;
  position: relative;
  overflow: hidden;
}
.item-info .item-desc {
  font-size: 12px;
  color: #666;
  margin-top: 15px;
}
.item-price {
  color: orangered;
}
</style>
