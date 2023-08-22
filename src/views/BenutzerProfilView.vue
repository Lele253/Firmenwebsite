<template>
<div>
  <HeaderComponent/>
  <div style="height: 100vh" class="d-flex align-center">
  <h1 class=" ml-16"> user: {{this.$store.state.user}}</h1>
  </div>
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

</style>