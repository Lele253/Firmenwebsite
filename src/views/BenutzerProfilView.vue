<template>

  <div class="img"/>
  <HeaderComponent class="pt-10"/>


  <div class="divOverBackground">
    <v-card class="card">
      <v-card-item>
        <h1 class="text-white">
          tesasdfasdfa
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et
          dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet
          clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet,
          consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
          sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea
          takimata sanctus est Lorem ipsum dolor sit amet.
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et
          dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet
          clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet,
          consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
          sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea
          takimata sanctus est Lorem ipsum dolor sit amet.

        </h1>
      </v-card-item>
    </v-card>
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
.card {
  border-radius: 20px;
  background: linear-gradient(to right, black, #494747);
  height: 80%;
  width: 80%
}

.img {
  position: fixed;
  background-image: url("../assets/background.jpg");
  filter: brightness(60%);
  background-size: cover;
  height: 100vh;
  width: 100vw;
  z-index: 0;
}

.divOverBackground {
  overflow-y: scroll !important;
  position: fixed;
  top: 120px;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 88vh;
  width: 100vw;
  background-color: transparent;
  z-index: 100;
}
</style>