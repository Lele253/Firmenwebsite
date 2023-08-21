<template>
  <div style=" height: 100vh">
    <div class="body pt-10" >
      <v-row justify="center" style="width: 100%" class=" mx-0">
        <v-col cols="10">
          <div class="header">
            <v-row style="width: 100%; height: 100%" class="justify-center align-center my-0 mx-0">
              <v-col cols="4" class="d-flex justify-center">
                logo
                <h2>NameVonUns</h2>
              </v-col>
              <v-col class="d-flex justify-center">test2</v-col>
              <v-col class="d-flex justify-center">test3</v-col>
              <v-col class="d-flex justify-center">test4</v-col>
              <v-col class="d-flex justify-center">test5</v-col>
            </v-row>
          </div>
        </v-col>
        <v-col  cols="1">
          <div v-if="!user" @click="$router.push('/login')" class="d-flex justify-center align-center login-button">
            <h4>Login</h4>
          </div>
          <div v-if="user" @click="logout" class="d-flex justify-center align-center login-button">
            <h2>Profil</h2>
          </div>
        </v-col>
      </v-row>

    </div>
  </div>


</template>

<script>
import {mapGetters} from "vuex";
import axios from "axios";

export default {
  name: "HomeView",
  computed:{
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
.body{
  height: 432vh;
  width: 100vw;
  background-image: url("../assets/Hintergrund.png");
  background-size: cover;
}
.header{
  height: 70px;
  width: 100%;
  border: black solid 3px;
  border-radius: 60px;
}
.login-button{
  border-radius: 200px;
  border: solid black 3px;
  height: 70px;
  width: 100%;
  background-color: #57c057;
  box-shadow: 2px 2px 5px black;
}
.login-button:hover{
  border-radius: 200px;
  border: solid black 3px;
  height: 70px;
  width: 100%;
  background-color: forestgreen;
  box-shadow: 2px 2px 5px black;
  cursor: pointer;
}

.login-button:active{
  border-radius: 200px;
  border: solid black 3px;
  height: 70px;
  width: 100%;
  background-color: forestgreen;
  box-shadow: 0 0 0px black;
  cursor: pointer;
}
</style>
