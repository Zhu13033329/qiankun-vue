<template>
  <div class="home">
    <p>{{ userName }}</p>
    <img @click="handlerChange" alt="Vue logo" src="../assets/logo.png">
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
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
  computed: {
    userName() {
      return this.$store.state.user.name
    }
  },
  methods: {
    handlerChange() {
      this.$store.commit('changeUser', 'haunghaung');
      console.log(123, this.$store.state.user.name);
      this.$actions.setGlobalState({name: 'xixiix'})
    }
  },
  mounted() {
    
  }
}
</script>
