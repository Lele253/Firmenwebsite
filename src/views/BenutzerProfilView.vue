<template>
  <div class="img"/>

  <div class="divOverBackground">
    <HeaderComponent class="pt-10"/>
  </div>

</template>

<script>
import HeaderComponent from "@/components/HeaderComponent";
import {mapGetters} from "vuex";
import axios from "axios";

export default {
  name: "BenutzerProfilView",
  components: {
    HeaderComponent
  },
  computed: {
    ...mapGetters(['user'])
  },
  mounted() {
    this.checkUser()
  },
  methods: {
    async checkUser() {
      await this.getUser()
      if (this.user === false) {
        this.$router.push('/')
      } else {
        this.user = {
          name: 'admin',
          username: 'admin'
        }
      }
    },
    async getUser() {
      try {
        const user = await axios.get('/user')
        this.$store.dispatch('user', user.data)
      } catch (error) {
        console.log(error)
      }
    },
  }
}
</script>

<style scoped>
.img{
  position: fixed;
  background-image: url("../assets/background.jpg");
  filter: brightness(60%);
  background-size: cover;
  height: 100vh;
  width: 100vw;
}
</style>