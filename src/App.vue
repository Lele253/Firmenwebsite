<template>
  <v-app id="home">
    <v-main>
      <div class="home">
        <HeaderComponent v-if="$router.path === '/rechnung'"></HeaderComponent>
        <router-view></router-view>
        <FooterComponent></FooterComponent>
        <cookie-accept-decline element-id="id"/>
      </div>
    </v-main>
  </v-app>
</template>

<script>

import HeaderComponent from "@/components/HeaderComponent.vue";
import FooterComponent from "@/components/FooterComponent.vue";
import cookieAcceptDecline from "@/views/Cookie-accept-decline.vue";

export default {
  name: 'App',
  components: {FooterComponent, HeaderComponent, cookieAcceptDecline},
  methods: {},

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

@keyframes slideInFromLeft {
  0% {
    transform: translateX(-100%);
    opacity: 0;
  }
  100% {
    transform: translateX(0);
    opacity: 1;
  }
}

.fly-in-from-left {
  animation: 1.2s ease-out 0s 1 slideInFromLeft;
}

@keyframes slideInFromRight {
  0% {
    transform: translateX(100%);
    opacity: 0;
  }
  100% {
    transform: translateX(0);
    opacity: 1;
  }
}

.fly-in-from-right {
  animation: 1.2s ease-out 0s 1 slideInFromRight;
}

@keyframes slideInFromTop {
  0% {
    transform: translateY(-100%);
    opacity: 0;
  }
  100% {
    transform: translateY(0);
    opacity: 1;
  }
}

.fly-in-from-top {
  animation: 1.2s ease-out 0s 1 slideInFromTop;
}

@keyframes slideInFromBottom {
  0% {
    transform: translateY(100%);
    opacity: 0;
  }
  100% {
    transform: translateY(0);
    opacity: 1;
  }
}

.fly-in-from-bottom {
  animation: 1.2s ease-out 0s 1 slideInFromBottom;
}

@keyframes slideInFromTopRight {
  0% {
    transform: translate(100%, -100%);
    opacity: 0;
  }
  100% {
    transform: translate(0, 0);
    opacity: 1;
  }
}

.fly-in-from-top-right {
  animation: 1.2s ease-out 0s 1 slideInFromTopRight;
}

@keyframes slideInFromBottomLeft {
  0% {
    transform: translate(-100%, 100%);
    opacity: 0;
  }
  100% {
    transform: translate(0, 0);
    opacity: 1;
  }
}

.fly-in-from-bottom-left {
  animation: 1.2s ease-out 0s 1 slideInFromBottomLeft;
}

@keyframes slideInFromTopLeft {
  0% {
    transform: translate(-100%, -100%);
    opacity: 0;
  }
  100% {
    transform: translate(0, 0);
    opacity: 1;
  }
}

.fly-in-from-top-left {
  animation: 1.2s ease-out 0s 1 slideInFromTopLeft;
}

@keyframes slideInFromBottomRight {
  0% {
    transform: translate(100%, 100%);
    opacity: 0;
  }
  100% {
    transform: translate(0, 0);
    opacity: 1;
  }
}

.fly-in-from-bottom-right {
  animation: 1.2s ease-out 0s 1 slideInFromBottomRight;
}

.button {
  margin-top: 60px;
  border: solid #969262 2px !important;
  background-color: black !important;
  color: white !important;
  box-shadow: 3px 3px 7px black !important;
  width: 16vw;
  height: 50px !important;
  border-radius: 30px !important;
}

.button1 {

  border: solid #969262 2px !important;
  background-color: black !important;
  color: white !important;
  box-shadow: 3px 3px 7px black !important;
  width: 16vw;
  border-radius: 30px !important;
  margin-top: 5px;
  margin-bottom: 5px;

}

.buttonOpen {
  margin-top: 60px;
  border: solid #969262 2px !important;
  background-color: black !important;
  color: white !important;
  box-shadow: 3px 3px 7px black !important;
  width: 16vw;
  height: 50px !important;
  border-radius: 30px 30px 0px 0px !important;
}

.button-handy {
  margin-top: 60px;
  border: solid #969262 2px !important;
  background-color: black !important;
  color: white !important;
  box-shadow: 3px 3px 7px black !important;
  width: 50vw;
  height: 50px !important;
  border-radius: 30px !important;
}

.button-handy1 {
  border: solid #969262 2px !important;
  background-color: black !important;
  color: white !important;
  box-shadow: 3px 3px 7px black !important;
  width: 50vw;
  font-size: 12px;
  margin-top: 5px;
  margin-bottom: 5px;
  border-radius: 30px !important;
}

.button:active {
  margin-top: 60px;
  border: solid #969262 2px !important;
  background-color: black !important;
  color: white !important;
  box-shadow: 0px 0px 0px black !important;
  width: 16vw;
  height: 50px !important;
  border-radius: 30px !important;
}

.logo {
  height: 100px;
  width: 300px;
  background-size: cover;
  background-image: url("./assets/Logo.webp");
}

.button-handy:active {
  margin-top: 60px;
  border: solid #969262 2px !important;
  background-color: black !important;
  color: white !important;
  box-shadow: 0px 0px 0px black !important;
  width: 50vw;
  height: 50px !important;
  border-radius: 30px !important;
}

.home {
  height: 100vh;
  background-image: url("./assets/BackGround_1_11zon.webp");
  background-size: cover;
}

.headline {
  color: #969262;
}

#home {
  font-family: 'Poppins', sans-serif;
}
</style>
