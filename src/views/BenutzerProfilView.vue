<template>

  <div class="img"/>
  <HeaderComponent class="pt-10"/>


  <div class="divOverBackground">
    <v-card class="card">
      <v-tabs
          v-model="tab"
          align-tabs="center"
          style="color: #e3dede">
        <v-tab :value="0" color="#b69351">Meine Kurse</v-tab>
        <v-tab :value="1" color="#b69351">Meine Website -></v-tab>
        <v-tab :value="2" color="#b69351">Laptop</v-tab>
        <v-tab :value="3" color="#b69351">Ipad & Handy</v-tab>
      </v-tabs>

      <v-window v-model="tab" style="overflow-y: scroll">

        <v-window-item class="text-white" value="0">
          {{ user }}
          {{ tab }}
        </v-window-item>

        <v-window-item class="text-white" style="overflow-y: scroll" value="1">

        </v-window-item>

        <v-window-item class="text-white" style="overflow-y: scroll" value="2">
          <div class="d-flex justify-center">
            <iframe :src="url" class="iframe" frameborder="0"></iframe>
          </div>
        </v-window-item>

        <v-window-item class="text-white" style="overflow-y: scroll" value="3">
          <v-row class="mt-5">
            <v-col cols="5">
              <p class="text-center">
                Ansicht Auf dem Handy
              </p>
            </v-col>
            <v-col cols="5">
              <p class="text-center">
                Ansicht Auf dem Tablet
              </p>
            </v-col>
          </v-row>
          <div class="d-flex justify-center">
            <iframe :src="url" class="iframeHandy"/>
            <iframe :src="url" class="iframeTablet"/>
          </div>
        </v-window-item>
      </v-window>
    </v-card>
  </div>

</template>

<script>
import HeaderComponent from "@/components/HeaderComponent";
import {mapGetters} from "vuex";
import axios from "axios";

export default {
  name: "BenutzerProfilView",
  data() {
    return {
      tab: '2',
      url: 'https://fastglobeit.de'
    }
  },
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
    async logout() {
      localStorage.removeItem('token')
      this.$store.dispatch('user', null)
      await location.reload()
    },
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
.iframeHandy {
  height: 700px;
  width: 400px;
  scale: 0.9;
  border-radius: 20px;
  border-color: #CBB26A
}

.iframeTablet {
  height: 700px;
  width: 1000px;
  scale: 0.9;
  border-radius: 20px;
  border-color: #CBB26A
}

.iframe {
  height: 800px;
  width: 1400px;
  scale: 0.9;
  border-radius: 20px;
  border-color: #CBB26A !important;
}

.card {
  /*overflow-y: scroll;*/
  border-radius: 20px;
  background: linear-gradient(to bottom, black, #494747);
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