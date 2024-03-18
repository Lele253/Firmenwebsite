<template>
  <div class="header">
    <v-row v-if="!handy" class="ma-0" style="width: 100%">
      <v-col  class="d-flex justify-center align-center">
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
    <v-row v-if="handy" class="ma-0" style="width: 100%">
      <v-col cols="12" class="d-flex justify-center mt-n8">
        <v-img @click="$router.push('/')" style="cursor: pointer" src="../assets/Logo.png" height="80" width="300"></v-img>
      </v-col>
      <v-col class="d-flex justify-center align-center">
        <router-link class="mein-link-handy" to="Skills">Skills</router-link>
      </v-col>
      <v-col class=" d-flex justify-center align-center">
        <router-link class="mein-link-handy" to="website">Website</router-link>
      </v-col>
      <v-col class=" d-flex justify-center align-center">
        <router-link class="mein-link-handy" to="webapp">Webapp</router-link>
      </v-col>
      <v-col class=" d-flex justify-center align-center">
        <router-link class="mein-link-handy" to="entwicklung">Entwicklung</router-link>
      </v-col>
      <v-col class=" d-flex justify-center align-center">
        <router-link class="mein-link-handy" to="service">Service</router-link>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import {mapGetters} from "vuex";

export default {
  name: "HeaderComponent",
  data() {
    return {
    }
  },

  computed: {
    ...mapGetters(['user','handy'])
  },
  mounted() {
    this.checkMobileView()
    this.resize()
  },
  methods: {

    resize() {
      window.addEventListener('resize', this.checkMobileView);
    },
    checkMobileView() {
      if (window.innerWidth <= 1050) {
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
.mein-link-handy {
  text-decoration: none; /* Entfernt den Unterstrich */
  color: inherit; /* Verwendet die Standardfarbe */
  font-size: 12px;
}
.header{
  background-color: black;
  padding-top: 30px;
  height: 120px;
  color: #f2f2f2;
  box-shadow: black 0px 20px 100px 100px;
}
</style>
