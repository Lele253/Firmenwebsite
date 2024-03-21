<template>
  <div class="header">
    <v-row v-if="!handy" class="ma-0" style="width: 100%">
      <v-col class="d-flex justify-center align-center">
        <div class="logo" style="cursor: pointer"
             @click="$router.push('/')"></div>
      </v-col>
      <v-col class=" d-flex justify-center align-center">
        <router-link :class="$route.path === '/skills' ? 'mein-link-active':'mein-link'" to="skills">Skills
        </router-link>
      </v-col>
      <v-col class=" d-flex justify-center align-center">
        <router-link :class="$route.path === '/website' ? 'mein-link-active':'mein-link'" to="website">Website
        </router-link>
      </v-col>
      <v-col class=" d-flex justify-center align-center">
        <router-link :class="$route.path === '/webapp' ? 'mein-link-active':'mein-link'" to="webapp">Webapp
        </router-link>
      </v-col>
      <v-col class=" d-flex justify-center align-center">
        <router-link :class="$route.path === '/entwicklung' ? 'mein-link-active':'mein-link'" to="entwicklung">
          Entwicklung
        </router-link>
      </v-col>
      <v-col class=" d-flex justify-center align-center">
        <router-link :class="$route.path === '/service' ? 'mein-link-active':'mein-link'" to="service">Service
        </router-link>
      </v-col>
    </v-row>
    <v-row v-if="handy" class="ma-0" style="width: 100%">
      <v-col class="d-flex justify-center mt-n8" cols="12">
        <div class="logo" style="cursor: pointer"
             @click="$router.push('/')"></div>
      </v-col>
      <v-col class="d-flex justify-center align-center">
        <router-link :class="$route.path === '/skills' ? 'mein-link-handy':'mein-link-handy-active'"
                     to="skills">Skills
        </router-link>
      </v-col>
      <v-col class=" d-flex justify-center align-center">
        <router-link :class="$route.path === '/website' ? 'mein-link-handy':'mein-link-handy-active'" to="website">
          Website
        </router-link>
      </v-col>
      <v-col class=" d-flex justify-center align-center">
        <router-link :class="$route.path === '/webapp' ? 'mein-link-handy':'mein-link-handy-active'" to="webapp">
          Webapp
        </router-link>
      </v-col>
      <v-col class=" d-flex justify-center align-center">
        <router-link :class="$route.path === '/entwicklung' ? 'mein-link-handy':'mein-link-handy-active'"
                     to="entwicklung">Entwicklung
        </router-link>
      </v-col>
      <v-col class=" d-flex justify-center align-center">
        <router-link :class="$route.path === '/service' ? 'mein-link-handy':'mein-link-handy-active'" to="service">
          Service
        </router-link>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import {mapGetters} from "vuex";

export default {
  name: "HeaderComponent",
  data() {
    return {}
  },

  computed: {
    ...mapGetters(['user', 'handy'])
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
  cursor: pointer;

}

.mein-link-handy {
  text-decoration: none; /* Entfernt den Unterstrich */
  color: inherit; /* Verwendet die Standardfarbe */
  font-size: 12px;
}

.mein-link-handy-active {
  text-decoration: none; /* Entfernt den Unterstrich */
  color: #969262;
  cursor: pointer;
  font-size: 12px;
}

.header {
  background-color: black;
  padding-top: 30px;
  height: 120px;
  color: #f2f2f2;
  box-shadow: black 0px 20px 100px 100px;
}

.mein-link-active {
  text-decoration: none; /* Entfernt den Unterstrich */
  color: #969262;
  cursor: pointer;
}
</style>
