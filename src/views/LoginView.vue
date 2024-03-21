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
  methods: {

    async umleiung() {
      try {
        const user = await axios.get('https://tier-gesundheitszentrum.com:8080/user')
        this.$store.dispatch('user', user.data)
      } catch (error) {
        console.log(error)
      }
      if (this.user) {
        this.$router.push('/rechnung')

      }

    },

  },

}
</script>

<style scoped>

</style>
