<template>
  <div class="bottom-bar">
    <div class="left">
      <label for="" @click="chenckClick"
        ><input type="checkbox" v-model="isAll" />
      </label>
      <span> 全选</span>
    </div>

    <div class="right">
      合计：
      <strong style="font-size: 20px">¥{{ totalPrice }}</strong>
    </div>
    <div class="calculate">去计算:( {{ checkLength }})</div>
  </div>
</template>

<script>


export default {
  name: 'CartBottomBar',
  props: {},
  data () {
    return {
      cartList: this.$store.state.cartList
    }
  },
  // 这时可以访问data和methods
  created () { },
  // 方法
  methods: {
    chenckClick () {
      this.isAll ? this.cartList.forEach(item => item.checked = false) :
        this.cartList.forEach(item => item.checked = true)
    }
  },
  // 计算属性
  computed: {
    totalPrice () {
      return this.cartList.filter(item => {
        // 选择选中状态的
        return item.checked
      }).reduce((preValue, item) => {
        return preValue + item.price * item.count
      }, 0).toFixed(2)
    },
    checkLength () {
      return this.cartList.filter(item => item.checked).length
    },
    isAll () {
      if (this.cartList.length === 0) return false
      // 如果有 1 个不被选中就为false
      return !(this.cartList.find(item => !item.checked))
    }
  },
  // 组件注册
  components: {},
}
</script>

<style scoped>
.bottom-bar {
  height: 40px;
  line-height: 40px;
  background-color: rgb(247, 247, 247);
  position: relative;
}
input {
  width: 24px;
  height: 24px;
  margin: 0 10px;
  margin-top: 8px;
}
.left {
  float: left;
  margin-right: 20px;
}
.left span {
  display: inline-block;
  transform: translateY(-5px);
}
.right {
  float: left;
  margin-right: 10px;
}
.calculate {
  float: right;
  margin-right: 10px;
  background-color: rgb(230, 0, 0);
  font-size: 16px;
  font-weight: 700;
  color: white;
  padding: 0 20px;
}
</style>
