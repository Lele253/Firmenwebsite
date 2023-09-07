<template>
  <div class="img pb-0" style=" height: 100vh">
    <!--    <h1 style="position: fixed"> Test Höhe {{ $store.state.scrollwert }}</h1>-->
    <div class="background pt-10 pb-0">
      <HeaderComponent></HeaderComponent>
      <div style="height: 110vh">
        <v-row class="mx-0 justify-center" style="width: 100%; height: 35vh; margin-top: 180px">
          <v-col class="d-flex  justify-center" cols="5">
            <div :class="wide ? 'nonscale': 'scale' " class="mr-11 pl-0">

              <h1 class="text-white"> Dein IT-Dienstleister <br> des Vertrauens</h1>
              <p class="mt-2 text-white">Du hast Interesse an einem Coding-Kurs <br> oder dein Unternehmen benötigt eine
                <br> Softwarelösung, SEO
                oder eine Website?
                <br> dann Kontaktiere uns oder Trage dich <br> in einen Kurs ein.</p>
              <v-btn class="routebutton mt-5 ">Zur Website</v-btn>
              <v-btn class="routebutton mt-5 ml-16">Zum Kurs</v-btn>
            </div>
          </v-col>
          <v-col cols="7" style=" margin-top: -200px">
            <HexaComponent :class="tabletHorizontal? 'hexagon1':' hexagon2'"></HexaComponent>
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
      <div style="height: 90vh">
        <v-row class="mx-0 " style="padding-left: 110px; width: 100%;">
          <v-col cols="6" style="max-width: 350px">
            <v-card class="cart-curs">
              <v-card-title class="text-center">
             <b>
                Einsteiger
             </b>
              </v-card-title>
              <v-card-subtitle class="text-center">
                <b>
                Java oder Webentwicklung
                </b>
              </v-card-subtitle>
              <v-row class="mt-2 justify-center">
                <v-col>
                  <p class="ml-7">- Java</p>
                  <p class="ml-7">- HTML</p>
                  <p class="ml-7">- CSS</p>
                  <p class="ml-7">- Javascript</p>
                </v-col>
                <v-col>
                  <h2>4 Stunden <br></h2>
                  <h2  class="text-center mt-7" style="  text-shadow: 0px 0px  3px black; text-stroke: 1px black; color: #dabe6e">  160 Euro</h2>
                </v-col>
              </v-row>
            </v-card>
          </v-col>
          <v-col cols="8">
            <v-card class="cart-curs-green cart-curs">
              <v-card-title class="text-center">
                <b>
                  Fortgeschritten
                </b>
              </v-card-title>
              <v-card-subtitle class="text-center">
                <b>
                  Java oder Webentwicklung
                </b>
              </v-card-subtitle>
              <v-row class="mt-2 justify-center">
                <v-col>
                  <p class="ml-7">- Java</p>
                  <p class="ml-7">- HTML</p>
                  <p class="ml-7">- CSS</p>
                  <p class="ml-7">- Javascript</p>
                </v-col>
                <v-col>
                  <h2>8 Stunden <br></h2>
                  <h2  class="text-center mt-7" style="  text-shadow: 0px 0px  3px black; text-stroke: 1px black; color: #dabe6e">  300 Euro</h2>
                </v-col>
              </v-row>
            </v-card>
          </v-col>
          <v-col cols="5" style="max-width: 350px">
            <v-card class="cart-curs">
              <v-card-title class="text-center">
                <b>
                  Einsteiger Framework
                </b>
              </v-card-title>
              <v-card-subtitle class="text-center">
                <b>
                  Java oder Webentwicklung
                </b>
              </v-card-subtitle>
              <v-row class="mt-2 justify-center">
                <v-col>
                  <p class="ml-7">- Springboot</p>
                  <p class="ml-7">- Vue.js</p>
                  <p class="ml-7">- Vuetify</p>
                  <p class="ml-7">- Angular</p>
                </v-col>
                <v-col>
                  <h2>4 Stunden <br></h2>
                  <h2  class="text-center mt-7" style="  text-shadow: 0px 0px  3px black; text-stroke: 1px black; color: #dabe6e">  200 Euro</h2>
                </v-col>
              </v-row>

            </v-card>
          </v-col>
          <v-col cols="8">
            <v-card class="cart-curs-green cart-curs">
              <v-card-title class=" text-center">
                <b >
                  Fortgeschritten Framework
                </b>
              </v-card-title>
              <v-card-subtitle class="text-center">
                <b>
                  Java oder Webentwicklung
                </b>
              </v-card-subtitle>
              <v-row class="mt-2 justify-center">
                <v-col>
                  <p class="ml-7">- Springboot</p>
                  <p class="ml-7">- Vue.js</p>
                  <p class="ml-7">- Vuetify</p>
                  <p class="ml-7">- Angular</p>
                </v-col>
                <v-col>
                  <h2>8 Stunden <br></h2>
                  <h2  class=" text-center mt-7" style="  text-shadow: 0px 0px  3px black; text-stroke: 1px black; color: #dabe6e">  350 Euro</h2>
                </v-col>
              </v-row>
            </v-card>
            <div class="pt-2 " style="background-color: black; height: 35px; width: 340px ;margin-left: 90px; border-radius: 5px;">
              <p class="text-center " style="color: #dabe6e">Best Price</p>
            </div>
          </v-col>
        </v-row>
        <div style="margin-left: 185px">
          <h1 class="mt-16 text-white">Verschiedene Technologien mit <br>großem Lernerfolg.</h1>
          <p class="mt-4 text-white">Melde dich zu einem Kurs an und wir vereinbaren schnell einen zeitnahen Termin.</p>
          <p class="mt-4 text-white">Wir nehmen uns die Zeit, ermitteln deinen Kenntnisstand und setzen da an wo du
            stehst.</p>
        </div>
      </div>
      <div style="height: 60vh">
        <v-row class="mx-0" justify="center" style="width: 100%">
          <v-col :cols="tabletHorizontal ? 5:6 ">
            <v-card class="websitebox">
              <div v-if="websiteformular" class="websitebox-innerdiv">
                <v-row class="ma-0" style="width: 100%">
                  <h3 class=" my-4 text-white text-center" style="width: 100vh">Füllen SIe das Formular aus und wir
                    melden uns bei zeitnah bei Ihnen.</h3>
                  <v-col cols="6">
                    <v-text-field base-color="white"
                                  class="text-white"
                                  color="white"
                                  label="Name"
                                  persistent-hint
                                  required
                                  variant="outlined">

                    </v-text-field>
                  </v-col>
                  <v-col cols="6">
                    <v-text-field base-color="white"
                                  class="text-white"
                                  color="white"
                                  label="Firmenname"
                                  persistent-hint
                                  required
                                  variant="outlined">

                    </v-text-field>
                  </v-col>
                  <v-col cols="6">
                    <v-text-field base-color="white"
                                  class="text-white mt-n5"
                                  color="white"
                                  label="Telefonnummer"
                                  persistent-hint
                                  required
                                  variant="outlined">

                    </v-text-field>
                  </v-col>
                  <v-col cols="6">
                    <v-text-field base-color="white"
                                  class="text-white mt-n5"
                                  color="white"
                                  label="Email"
                                  persistent-hint
                                  required
                                  variant="outlined">

                    </v-text-field>
                  </v-col>
                  <v-col class="mt-n5" cols="12">
                    <v-radio-group inline v-model="auswahl">
                      <v-row>
                        <v-col>
                      <v-radio  style="color: white" label="Es besteht bereits eine Website"  value="Es besteht bereits eine Website"></v-radio>

                        </v-col>
                        <v-col>

                          <v-radio style="color: white"  label="Es besteht keine Website"  value="Es besteht keine Website"></v-radio>
                        </v-col>
                      </v-row>
                    </v-radio-group>
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
          <v-col class="d-flex justify-center align-center" cols="5">
            <div class="ml-12 mt-n1" style="max-width: 80%">

              <h1 v-if="tabletHorizontal" class="mb-6 text-white">Ihre Webseite, Ihr Erfolg: <br> Maßgeschneiderte Designs von Expertenhand
              </h1>
              <h3 v-if="!tabletHorizontal" class="mb-n6 text-white">Ihre Webseite, Ihr Erfolg: <br> Maßgeschneiderte Designs von Expertenhand
              </h3>
              <p class="mt-10 text-white"> FastGlobe IT - Ihr Partner für erstklassige Webseiten. Wir verwandeln Ideen
                in ansprechende Online-Präsenzen, die Ihre Marke
                zum Leuchten bringen.
                Unser Team aus erfahrenen Designern und Entwicklern steht bereit, um Ihre Visionen Wirklichkeit werden
                zu lassen.</p>

              <h4 class="mt-12 " style="color:#CBB26A;">Jetzt kostenlose Beratung sichern</h4>
              <v-btn class="mt-8 routebutton" @click="websiteformular = !websiteformular">Beratung</v-btn>
            </div>
          </v-col>
        </v-row>
      </div>
      <div style="height: 60vh">
        <v-row class="mx-0" justify="center" style="width: 100%">
          <v-col class="d-flex align-center" cols="5">
            <div class=" mt-n1" style="max-width: 60%">

              <h1 class="text-white">Warum wir?
              </h1>
              <p class="mt-10 text-white">Unsere Stärke liegt in maßgeschneidertem Webdesign, das Ästhetik und Funktionalität vereint. Wir optimieren für alle Geräte, integrieren modernste Technologien und sorgen für Sichtbarkeit durch SEO.</p>

            </div>
          </v-col>
          <v-col :cols="tabletHorizontal ? 5:6 ">
            <v-card class="websitebox1">
            </v-card>
          </v-col>

        </v-row>
      </div>
      <div style="height: 50vh">
        <v-row class="mx-0" justify="center" style="width: 100%">
          <v-col :cols="tabletHorizontal ? 5:6 ">
            <v-card class="websitebox3">
            </v-card>
          </v-col>
          <v-col class="d-flex justify-center align-center" cols="5">
            <div class="ml-12 mt-n1" style="max-width: 80%">

              <h1 v-if="tabletHorizontal" class="mb-6 text-white"> Live-Entwicklungs-Tracker: <br> Sehen Sie Ihre Webseite wachsen!

              </h1>
              <h3 v-if="!tabletHorizontal" class="mb-n6 text-white">"Live-Entwicklungs-Tracker: <br> Sehen Sie Ihre Webseite wachsen!

              </h3>
              <p class="mt-10 text-white"> Verpassen Sie keine Entwicklungsschritte Ihrer Webseite! Mit unserem Live-Entwicklungs-Tracker halten wir Sie kontinuierlich auf dem Laufenden. Tauchen Sie in den Fortschritt ein, während Ihre Webseite Form annimmt – in einem beeindruckenden Zusammenspiel aus Kreativität und Technologie.</p>
            </div>
          </v-col>
        </v-row>
      </div>
      <div style="height: 60vh">
        <v-row class="mx-0" justify="center" style="width: 100%">
          <v-col class="d-flex align-center" style="padding-top: 150px" cols="5">
            <div class=" mt-n1" style=" max-width: 75%">


              <h1 v-if="tabletHorizontal" class="mb-6 text-white"> Unsere vielfältigen Lösungen für Ihren digitalen Erfolg:



              </h1>
              <h3 v-if="!tabletHorizontal" class="mb-n6 text-white">Unsere vielfältigen Lösungen für Ihren digitalen Erfolg:



              </h3>
              <p class="mt-10 text-white">
               - Kreative Webanwendungen <br>
               - Maßgeschneiderte Softwarelösungen <br>
               - Ansprechende Webseiten mit SEO-Optimierung <br>
               - Inspirierende Kurse in HTML, CSS, Java, Vue.Js und Spring Boot
              </p>

            </div>
          </v-col>
          <v-col :cols="tabletHorizontal ? 5:6 ">
            <v-card class="websitebox4">
            </v-card>
          </v-col>

        </v-row>
      </div>
      <div class="pt-6" style="height: 8vh; width: 100vw;  background-color: black">
        <v-row class="mx-0  justify-center" style="width: 100%">
          <v-col @click="$router.push('/impressum')" style="cursor: pointer" cols="1">
            <h3 class="text-center text-white">Impressum</h3>
          </v-col>
          <v-divider class="border-opacity-50" vertical="true" color="white"></v-divider>
          <v-col @click="$router.push('/datenschutz')" style="cursor: pointer" cols="1">
            <h3 class="text-center text-white">Datenschutz</h3>
          </v-col>
          <v-divider class="border-opacity-50" vertical="true" color="white"></v-divider>
          <v-col style="cursor: pointer" cols="1">
            <h3 class="text-center text-white">Kontakt</h3>
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
    HeaderComponent, HexaComponent

  },

  data() {
    return {
      auswahl:',ajenfaefkabk',
      websiteformular: false,
      mobile: false,
      tabletHorizontal: false,
      wide: false
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
      if (window.innerWidth >= 1800) {
        this.wide = true;
        this.$store.state.wide = true;
      } else {
        this.wide = false;
        this.$store.state.wide = false;

      }
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
.websitebox-innerdiv {
  height: 100%;
  width: 100%;
  background-color: rgba(2, 2, 2, 0.9);
  backdrop-filter: blur(1px);
}

.websitebox {
  width: 100%;
  height: 50vh;
  background-color: #7c7b7b;
  box-shadow: 5px 5px 11px black;
  transition: ease-in-out 0.4s;
  border-left: 2px solid #CBB26A;
  border-top: 2px solid #CBB26A;
  background-image: url("../assets/websitebackground.jpg");
  background-size: cover;
}
.websitebox1 {
  width: 100%;
  height: 50vh;
  transition: ease-in-out 0.4s;
background-color: transparent;
  box-shadow: 0px 0px 0px transparent;
  background-image: url("../assets/SEO.png");
  background-size: cover;
}
.websitebox3 {
  width: 770px;
  margin-left: -50px;
  height: 440px;
  transition: ease-in-out 0.4s;
  background-color: transparent;
  box-shadow: 0px 0px 0px transparent;
  background-image: url("../assets/vorschau-removebg-preview.png");
  background-size: cover;
}
.websitebox4 {
  width: 770px;
  margin-left: -50px;
  height: 440px;
  transition: ease-in-out 0.4s;
  background-color: transparent;
  box-shadow: 0px 0px 0px transparent;
  background-image: url("../assets/Mac.png");
  background-size: cover;
}

.background {
  height: 450vh;
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
  margin-left: 90px;
  height: 200px;
  width: 340px;
  background-color: rgba(255, 255, 255, 0.55);
  backdrop-filter: blur(4px) !important;
  border-left: rgba(255, 255, 255, 0.76) 1px solid !important;
  border-top: rgba(255, 255, 255, 0.88) 1px solid !important;
  box-shadow: 3px 3px 5px black;
  transition: ease-in-out 0.4s;
}
.cart-curs-green{
  background-color: rgba(83, 211, 40, 0.55);

}
.cart-curs-green:hover{
  background-color: rgba(83, 211, 40, 0.55) !important;

}
.cart-curs:hover {
  cursor: pointer;
  margin-left: 60px;
  height: 200px;
  width: 340px;
  background-color: rgba(255, 255, 255, 0.55);
  backdrop-filter: blur(4px) !important;
  border-left: rgba(255, 255, 255, 0.76) 1px solid !important;
  border-top: rgba(255, 255, 255, 0.88) 1px solid !important;
  box-shadow: 3px 3px 5px black;
  transform: scale(1.16);
}

.hexagon1 {
  transform: scale(0.75);
  margin-left: -40px;
  margin-top: -30px;
}

.hexagon2 {
  margin-left: -140px;
  margin-top: -70px;
  transform: scale(0.6);
}
.scale{
  transform: scale(1.4);
}
.nonscale{
  transform: scale(1.2);

}

</style>
