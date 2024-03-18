<template>
    <LoginComponent></LoginComponent>
</template>
<script>
import LoginComponent from "@/components/LoginComponent";
import axios from "axios";

export default {
  name: "LoginView",
  components: {
    LoginComponent,
  },
  mounted() {
    this.umleiung()

  },
  methods:{

    async umleiung() {
      try {
        const user = await axios.get('/user')
        this.$store.dispatch('user', user.data)
      } catch (error) {
        console.log(error)
      }
      if (this.user){
        this.$router.push('/rechnung')

      }

    },

  },

}
</script>

<style scoped>
.background {
  filter: brightness(70%) blur(0px);;
  background-image: url("../assets/backgroundLogin.jpg");
  background-size: cover;
  width: 100vw;
}

.divOverBackground {
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  top: 0px;
  width: 100vw
}
</style>
