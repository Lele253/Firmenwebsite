<template>
  <div class="img pb-0" style=" height: 100vh">
    <h1 style="position: fixed"> Test Höhe {{ $store.state.scrollwert }}</h1>

    <div class="background pt-10 pb-0">
      <HeaderComponent></HeaderComponent>
      <div style="height: 110vh">
        <v-row class="mx-0 justify-center" style="width: 100%; height: 35vh; margin-top: 180px">
          <v-col class="d-flex  justify-center" cols="4">
            <div class="mr-11 pl-0">
              <h1 class="text-white"> Dein IT-Dienstleister <br> des Vertrauens</h1>
              <p class="mt-2 text-white">Du hast Interesse an einem Coding-Kurs <br> oder dein Unternehmen benötigt eine
                <br> Softwarelösung, SEO
                oder eine Website?
                <br> dann Kontaktiere uns oder Trage dich <br> in einen Kurs ein.</p>
              <v-btn class="routebutton mt-5 ">Zur Website</v-btn>
              <v-btn class="routebutton mt-5 ml-16">Zum Kurs</v-btn>
            </div>
          </v-col>
          <v-col style=" margin-top: -270px" class="pr-0 mr-6 d-flex justify-center" cols="7">
            <HexaComponent class="hexagon1"></HexaComponent>
          </v-col>
          <v-col cols="1"></v-col>
        </v-row>
        <v-row class="hidden-sm-and-down mx-0" style="width: 100%; margin-top: 150px">
          <v-col :cols="tabletHorizontal ? 8 : 10">
            <h3 class="text-white text-center">Auf unserer Website können Sie in Echtzeit verfolgen,<br>wie Ihr Design
              entsteht und sich entwickelt.
              Erleben Sie hautnah, <br> wie Ihre Webseite gestaltet wird.</h3>
          </v-col>
        </v-row>
      </div>
      <div style="height: 100vh">
        <v-row class="mx-0" style="width: 100%;">
          <v-col cols="6" style="max-width: 350px">
            <v-card class="cart-curs">
            </v-card>
          </v-col>
          <v-col cols="8">
            <v-card class="cart-curs">
            </v-card>
          </v-col>
          <v-col cols="5" style="max-width: 350px">
            <v-card class="cart-curs">
            </v-card>
          </v-col>
          <v-col cols="8">
            <v-card class="cart-curs">

            </v-card>
          </v-col>
        </v-row>
        <div style="margin-left: 75px">
          <h1 class="mt-16 text-white">Verschiedene Technologien mit <br>großem Lernerfolg.</h1>
          <p class="mt-4 text-white">Melde dich zu einem Kurs an und wir vereinbaren schnell einen zeitnahen Termin.</p>
          <p class="mt-4 text-white">Wir nehmen uns die Zeit, ermitteln deinen Kentnisstand und setzen da an wo du stehst.</p>
        </div>
      </div>
      <div style="height: 80vh">
        <v-row justify="center" style="width: 100%" class="mx-0">
          <v-col cols="7">
            <v-card class="ml-n3 websitebox">
              <div v-if="websiteformular" class="websitebox-innerdiv">
                <v-row style="width: 100%" class="ma-0">
                    <h3 style="width: 100vh" class=" my-4 text-white text-center">Füllen SIe das Formular aus und wir melden uns bei zeitnah bei Ihnen.</h3>
                  <v-col cols="6">
                    <v-text-field  class="text-white"
                                   base-color="white"
                                   color="white"
                                   label="Passwort"
                                   persistent-hint
                                   required
                                   variant="outlined">

                    </v-text-field>
                  </v-col>
                  <v-col cols="6">
                    <v-text-field  class="text-white"
                                   base-color="white"
                                   color="white"
                                   label="Passwort"
                                   persistent-hint
                                   required
                                   variant="outlined">

                    </v-text-field>
                  </v-col>
                  <v-col cols="6">
                    <v-text-field  class="text-white mt-n5"
                                   base-color="white"
                                   color="white"
                                   label="Passwort"
                                   persistent-hint
                                   required
                                   variant="outlined">

                    </v-text-field>
                  </v-col>
                  <v-col cols="6">
                    <v-text-field  class="text-white mt-n5"
                                   base-color="white"
                                   color="white"
                                   label="Passwort"
                                   persistent-hint
                                   required
                                   variant="outlined">

                    </v-text-field>
                  </v-col>
                  <v-col cols="6">
                    <v-text-field  class="text-white mt-n5"
                                   base-color="white"
                                   color="white"
                                   label="Passwort"
                                   persistent-hint
                                   required
                                   variant="outlined">

                    </v-text-field>
                  </v-col>
                  <v-col cols="6">
                    <v-text-field  class="text-white mt-n5"
                                   base-color="white"
                                   color="white"
                                   label="Passwort"
                                   persistent-hint
                                   required
                                   variant="outlined"
                                   >

                    </v-text-field>
                  </v-col>
                  <v-col class=" d-flex justify-center" cols="12">
                    <v-btn class="routebutton">
                      Absenden
                    </v-btn>
                  </v-col>
                </v-row>
              </div>
            </v-card>
          </v-col>
          <v-col  cols="4">
test
          </v-col>
        </v-row>
      </div>
    </div>
  </div>
</template>

<script>
import {mapGetters} from "vuex";
import axios from "axios";
import HeaderComponent from "@/components/HeaderComponent";
import HexaComponent from "@/components/HexaComponent";

export default {
  name: "HomeView",
  components: {
    HeaderComponent,HexaComponent

  },

  data() {
    return {
      websiteformular: true,
      mobile: false,
      tabletHorizontal: false
    }
  },
  computed: {
    ...mapGetters(['user'])
  },
  mounted() {
    this.getUser()
    this.checkMobileView()
  },
  methods: {
    checkMobileView() {
      if (window.innerWidth <= 850) {
        this.mobile = true;
        this.$store.state.mobile = true;
      } else {
        this.mobile = false;
        this.$store.state.mobile = false;

      }
      if (window.innerWidth <= 1300) {
        this.tabletHorizontal = false
        this.$store.state.tablet = false
      } else {
        this.tabletHorizontal = true
        this.$store.state.tablet = true
      }
    },
    logout() {
      localStorage.removeItem('token');
      this.$store.dispatch('user', null);
      location.reload(); // Soll woanders weitergeleitet werden?
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
.websitebox-innerdiv{
  height: 100%;
  width: 100%;
  background-color: rgba(2, 2, 2, 0.9);
  backdrop-filter: blur(1px);
}
.websitebox{
  width: 84%;
  height: 50vh;
  background-color: #7c7b7b;
  box-shadow: 5px 5px 11px black ;
  transition: ease-in-out 0.4s;
  border-left: 2px solid rgba(255, 255, 255, 0.78);
  border-top: 2px solid rgba(255, 255, 255, 0.78);
  background-image: url("../assets/websitebackground.png");
  background-size: cover;
}
.background {
  height: 432vh;
  width: 100vw;
  background-image: url("../assets/Hintergrund.png");
  background-size: cover;
}

.img {
  background-image: url("../assets/background.jpg");
  background-size: cover;
}

.routebutton {
  width: 130px;
  background-color: #014285;
  color: white;
}

.laptop {
  height: 300px;
  width: 480px;
  background-image: url("../assets/Monitor.png");
  background-size: cover;
}

.cart-curs {
  margin-left: 60px;
  height: 200px;
  width: 300px;
  background-color: rgba(255, 255, 255, 0.17);
  backdrop-filter: blur(4px) !important;
  border-left: rgba(255, 255, 255, 0.76) 1px solid !important;
  border-top: rgba(255, 255, 255, 0.88) 1px solid !important;
  box-shadow: 3px 3px 5px black ;
  transition: ease-in-out 0.4s;
}
.cart-curs:hover {
  margin-left: 60px;
  height: 200px;
  width: 300px;
  background-color: rgba(255, 255, 255, 0.17);
  backdrop-filter: blur(4px) !important;
  border-left: rgba(255, 255, 255, 0.76) 1px solid !important;
  border-top: rgba(255, 255, 255, 0.88) 1px solid !important;
  box-shadow: 3px 3px 5px black ;
  transform: scale(1.16);
}

.hexagon1{
  transform: scale(0.75);
}
</style>
