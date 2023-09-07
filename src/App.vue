<template>
  <v-app id="home">
    <v-main style="position: fixed; z-index: 9000">
      <router-view  style="overflow-y: scroll"/>
    </v-main>
  </v-app>
</template>

<script>

export default {
  name: 'App',
  methods: {

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
