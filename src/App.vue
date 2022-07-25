<template>
  <div id="app">
    <router-view />
    <h6>hello</h6>
    <main-tab-bar></main-tab-bar>
  </div>
</template>

<script>
import MainTabBar from 'components/content/MainTabbar/MainTabBar'
export default {
  name: 'App',
  components: {
    MainTabBar
  }
}
</script>

<style >
@import "assets/css/base.css";
</style>
