<template>
  <div class="home">
    test2-vue2-home
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'

export default {
  // name: 'Home',
  // components: {
  //   HelloWorld
  // }
  mounted() {
    console.log(1212121, this.$router.history.current.query.id);
  }
}
</script>
