<template>
  <div id="app">
    <el-menu :router="true" mode="horizontal">
        <el-menu-item index="/">主应用Home</el-menu-item>
        <el-menu-item index="/vue/about?id='1000'">子应用/about</el-menu-item>
        <el-menu-item index="/vue/home?id='2000'">子应用/home</el-menu-item>
        <!-- <el-menu-item index="/vue2/home?id='3000'">子2应用/home</el-menu-item>
        <el-menu-item index="/vue2/about?id='4000'">子2应用/about</el-menu-item> -->
        <!-- <el-menu-item index="/vue2">vue2的应用</el-menu-item> -->
    </el-menu>
    <router-view/>
    <div>
        <div id="vue"></div>
        <div id="vue2"></div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
      return {
        
      }
  }
}
</script>
<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
