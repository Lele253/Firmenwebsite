<template>

  <div class="background"/>

  <div class="divOverBackground">
    <LoginComponent></LoginComponent>
  </div>
</template>
<script>
import LoginComponent from "@/components/LoginComponent";

export default {
  name: "LoginView",
  components: {
    LoginComponent,
  }
}
</script>

<style scoped>
.background {
  filter: brightness(80%);
  background-image: url("../assets/backgroundLogin.jpg");
  background-size: cover;
  height: 100vh;
  width: 100vw;
}

.divOverBackground {
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  top: 0;
  height: 100vh;
  width: 100vw
}
</style>
