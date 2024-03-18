<template>
  <v-app id="home">
    <v-main>
        <div class="home">
          <HeaderComponent></HeaderComponent>
          <router-view></router-view>
        </div>
    </v-main>
  </v-app>
</template>

<script>

import HeaderComponent from "@/components/HeaderComponent.vue";

export default {
  name: 'App',
  components: {HeaderComponent},
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
.button{
  margin-top: 60px;
  border: solid #969262 2px !important;
  background-color: black !important;
  color: white !important;
  box-shadow: 3px 3px 7px black !important;
  width: 16vw;
  height: 50px !important;
  border-radius: 30px !important;
}
.button-handy{
  margin-top: 60px;
  border: solid #969262 2px !important;
  background-color: black !important;
  color: white !important;
  box-shadow: 3px 3px 7px black !important;
  width: 50vw;
  height: 50px !important;
  border-radius: 30px !important;
}
.button:active{
  margin-top: 60px;
  border: solid #969262 2px !important;
  background-color: black !important;
  color: white !important;
  box-shadow: 0px 0px 0px black !important;
  width: 16vw;
  height: 50px !important;
  border-radius: 30px !important;
}.button-handy:active{
  margin-top: 60px;
  border: solid #969262 2px !important;
  background-color: black !important;
  color: white !important;
  box-shadow: 0px 0px 0px black !important;
  width: 50vw;
  height: 50px !important;
  border-radius: 30px !important;
}
.home{
  height: 100vh;
  background-image: url("./assets/BackGround.png");
  background-size: cover;
}
.headline{
  color: #969262;
}
#home {
  font-family: 'Poppins', sans-serif;
}
</style>
