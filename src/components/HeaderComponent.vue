<template>
  <div class="header">
    <v-row class="ma-0" style="width: 100%">
      <v-col class="d-flex justify-center align-center">
        <v-img @click="$router.push('/')" style="cursor: pointer" src="../assets/Logo.png" height="80" width="300"></v-img>
      </v-col>
      <v-col class=" d-flex justify-center align-center">
        <router-link class="mein-link" to="Skills">Skills</router-link>
      </v-col>
      <v-col class=" d-flex justify-center align-center">
        <router-link class="mein-link" to="website">Website</router-link>
      </v-col>
      <v-col class=" d-flex justify-center align-center">
        <router-link class="mein-link" to="webapp">Webapp</router-link>
      </v-col>
      <v-col class=" d-flex justify-center align-center">
        <router-link class="mein-link" to="entwicklung">Entwicklung</router-link>
      </v-col>
      <v-col class=" d-flex justify-center align-center">
        <router-link class="mein-link" to="service">Service</router-link>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import {mapGetters, mapMutations} from "vuex";

export default {
  name: "HeaderComponent",
  data() {
    return {
    }
  },

  computed: {
    ...mapGetters(['user'])
  },
  mounted() {
    this.checkMobileView()
  },
  methods: {
    ...mapMutations(['scrollDown']),

    checkMobileView() {
      if (window.innerWidth <= 850) {
        this.$store.state.handy = true;
      } else {
        this.$store.state.handy = false;

      }
      if (window.innerWidth <= 1300) {
        this.$store.state.tablet = false
      } else {
        this.$store.state.tablet = true
      }
    },
    async logout() {
      localStorage.removeItem('token')
      this.$store.dispatch('user', null)
      await location.reload()
    },
  }
}
</script>

<style scoped>
.mein-link {
  text-decoration: none; /* Entfernt den Unterstrich */
  color: inherit; /* Verwendet die Standardfarbe */
}
.header{
  background-color: black;
  padding-top: 30px;
  height: 120px;
  color: #f2f2f2;
  box-shadow: black 0px 20px 100px 100px;
}
</style>
