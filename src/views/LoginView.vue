<template>
  <div class="body d-flex justify-center align-center">
    <v-row style="width: 100%" class="mx-0" justify="center">
      <v-col class="d-flex justify-center">
    <LoginComponent class="mx-10"></LoginComponent>
      </v-col>
      <v-col class="d-flex justify-center">
    <RegistrierenComponent></RegistrierenComponent>

      </v-col>
    </v-row>

  </div>
</template>

<script>
import LoginComponent from "@/components/LoginComponent";
import RegistrierenComponent from "@/components/RegistrierenComponent";

export default {
  name: "LoginView",
  components:{
    LoginComponent,
    RegistrierenComponent
  }
}
</script>

<style scoped>
.body{
  background-image: url("../assets/backgroundLogin.jpg");
  height: 100vh;
  width: 100vw;
}
</style>
