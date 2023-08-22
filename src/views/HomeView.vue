<template>
  <div class="img" style=" height: 100vh">
    <div class="background pt-10">
    <HeaderComponent></HeaderComponent>
      <v-row  style="width: 100%; margin-top: 130px" class="mx-0 justify-center">
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
    }
  },
  computed:{

    initials: function (){
      const splitted = this.$store.state.user.username.split(' ')
      try {
      return splitted[0].charAt(0) + splitted[1].charAt(0)
      }
      catch{
        return splitted[0].charAt(0)
      }

    },
    ...mapGetters(['user'])
  },
  mounted() {
    this.getUser()
  },
  methods:{
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
  width: 250px;
  background-image: url("../assets/background.jpg");
  background-size: cover;
}
</style>
