<template>
  <v-app id="home">
    <v-main style="position: fixed; z-index: 9000">
      <router-view style="overflow-y: scroll"  @scroll="handleScroll"/>
    </v-main>
  </v-app>
</template>

<script>

export default {
  name: 'App',
  methods:{
    handleScroll(event) {
      this.$store.state.scrollwert = event.target.scrollTop;
    }
  },

  data: () => ({
    //
  }),
}
</script>
<style>
::-webkit-scrollbar {
  width: 0;
  background: transparent;
}

#home {
   font-family: 'Poppins', sans-serif;
 }
</style>
