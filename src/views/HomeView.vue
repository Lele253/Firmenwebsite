<template>
  <div class="img" style=" height: 100vh">
    <div class="background pt-10">
    <HeaderComponent></HeaderComponent>
      <v-row  style="width: 100%; height: 35vh; margin-top: 200px" class="mx-0 justify-center">
        <v-col cols="5">
          <div>
            <h1 class="text-white"> Dein IT-Dienstleister <br> des Vertrauens</h1>
            <p class="mt-2 text-white">Du hast Interesse an einem Coding-Kurs <br> oder dein Unternehmen benötigt eine <br> Softwarelösung, SEO
              oder eine Website?
              <br> dann Kontaktiere uns oder Trage dich <br> in einen Kurs ein.</p>
            <v-btn class="routbutton mt-5 ">Zur Website</v-btn>
            <v-btn class="routbutton mt-5 ml-16">Zum Kurs</v-btn>
          </div>
        </v-col>
        <v-col class="d-flex justify-center" cols="5">
          <div class="laptop">
          </div>
        </v-col>
      </v-row>
      <v-row   style="width: 100%; margin-top: 150px"  class="hidden-sm-and-down mx-0">
          <v-col :cols="tabletHorizontal ? 8 : 10" >
            <h3 class="text-white text-center">Auf unserer Website können Sie in Echtzeit verfolgen,<br>wie Ihr Design entsteht und sich entwickelt.
               Erleben Sie hautnah, <br> wie Ihre Webseite gestaltet wird.</h3>
          </v-col>
      </v-row>
      <h1 style="position: fixed"> Test Höhe {{$store.state.scrollwert}}</h1>
    </div>
  </div>
</template>

<script>
import {mapGetters} from "vuex";
import axios from "axios";
import HeaderComponent from "@/components/HeaderComponent";

export default {
  name: "HomeView",
  components: {
    HeaderComponent
  },

  data(){
    return{
      mobile: false,
      tabletHorizontal: false
    }
  },
  computed:{
    ...mapGetters(['user'])
  },
  mounted() {
    this.getUser()
    this.checkMobileView()
  },
  methods:{
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
.background{
  height: 432vh;
  width: 100vw;
  background-image: url("../assets/Hintergrund.png");
  background-size: cover;
}
.img{
  background-image: url("../assets/background.jpg");
  background-size: cover;
}
.routbutton{
  width: 130px;
  background-color: #014285;
  color: white;
}
.laptop{
  height: 100%;
  width: 100%;
  background-image: url("../assets/Monitor.png");
  background-size: cover;
}
</style>
