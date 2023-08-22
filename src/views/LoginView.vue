<template>

  <div class="background"/>

  <div class="divOverBackground">
        <LoginComponent></LoginComponent>
    <v-card style="background-color: #014285; height: 800px">
      sadfsaf
    </v-card>
  </div>

</template>
<script>
import LoginComponent from "@/components/LoginComponent";

export default {
  name: "LoginView",
  components:{
    LoginComponent,
  }
}
</script>

<style scoped>
.background{
  filter: brightness(80%);
  background-image: url("../assets/backgroundLogin.jpg");
  background-size: cover;
  height: 100vh;
  width: 100vw;
  z-index: 0;
}
.divOverBackground {
  display: flex;
  align-items: center;
  justify-content: center;
  position:fixed; top: 0;
  height: 100vh;
  width: 100vw;
  z-index: 1;
}
</style>
