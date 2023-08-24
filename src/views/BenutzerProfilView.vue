<template>

  <div class="img pt-10"/>
  <div class="pt-10">
    <HeaderComponent class="pt-10"/>
  </div>

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
      <v-window v-model="tab">

        <v-window-item class="text-white " value="0">
          <div class=" d-flex justify-center mt-10">
            <div>
              <v-alert class="alert" type="info">
                Das Angebot der Kurse ist zur Zeit noch in Arbeit...
              </v-alert>
            </div>
          </div>
        </v-window-item>

        <v-window-item class="text-white" value="1">

          <v-row class="d-flex justify-center align-center mx-0"
                 style="width: 100%; height: 80vh">
            <v-col cols="6">
              <v-card class="cardWebsite">
                <v-card-title class="text-center mt-2">
                  Ihr gebuchtes Paket
                </v-card-title>
              </v-card>
            </v-col>

            <v-col cols="4">
              <v-card class="cardWebsite" style="overflow-y: scroll; width: 100%">
                <v-card-title class="text-center mt-2">
                  Ihr aktueller Status
                </v-card-title>
                <v-card-item v-for="todo in sortedTodos" :key="todo"
                             class="mb-n10">
                  <v-switch v-model="todo.isFinished"
                            color="green"
                            readonly>
                    <template v-slot:label>
                      <Icon v-if="!todo.isFinished" class="mr-3" icon="svg-spinners:3-dots-fade"/>
                      {{ todo.name }}
                      <!--                      <v-progress-circular
                                                v-if="!todo.isFinished"
                                                :indeterminate="!todo.isFinished"
                                                class="ml-5"
                                                size="30"
                                                style="color: #CBB26A"
                                            ></v-progress-circular>-->
                    </template>
                  </v-switch>
                </v-card-item>
              </v-card>
            </v-col>

          </v-row>

        </v-window-item>

        <v-window-item class="text-white" value="2">
          <div class="d-flex justify-center">
            <iframe :src="url" class="iframe" frameborder="0"></iframe>
          </div>
        </v-window-item>

        <v-window-item class="text-white" value="3">
          <div class="d-flex justify-center align-center ml-10 mt-5">
            <div>
              <h4 class="text-center">Ansicht Auf dem Handy</h4>
              <iframe :src="url" class="iframeHandy"/>
            </div>

            <div>
              <h4 class="text-center">Ansicht Auf dem Tablet</h4>
              <iframe :src="url" class="iframeTablet"/>
            </div>
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
import {Icon} from '@iconify/vue';

export default {
  name: "BenutzerProfilView",
  data() {
    return {
      tab: '1',
      url: 'https://leandro-graf.de',
      switchMe: false,
    }
  },
  components: {
    HeaderComponent, Icon
  },
  computed: {
    ...mapGetters(['user']),
    ...mapGetters(['website']),
    sortedTodos() {
      const todos = this.$store.state.website.todos;
      const trueTodos = todos.filter(todo => todo.isFinished);
      const falseTodos = todos.filter(todo => !todo.isFinished);
      return [...falseTodos, ...trueTodos];
    }
  },
  mounted() {
    this.checkUser();
  },
  methods: {
    async logout() {
      localStorage.removeItem("token");
      this.$store.dispatch("user", null);
      await location.reload();
    },
    async checkUser() {
      await this.getUser();
      if (this.user === false) {
        this.$router.push("/");
      } else {
        this.user = {
          name: "admin",
          username: "admin",
        };
      }
    },
    async getUser() {
      try {
        const user = await axios.get("/user");
        this.$store.dispatch("user", user.data);
      } catch (error) {
        console.log(error);
      }
    },
  },
}

</script>

<style scoped>
.iframeHandy {
  /*height: 700px;
  width: 400px;*/
  height: 75vh;
  width: 20vw;
  transform: scale(0.9);
  border-radius: 20px;
  border: #CBB26A 3px solid;
}

.iframeTablet {
  /*height: 700px;
  width: 1000px;*/
  height: 75vh;
  width: 60vw;
  transform: scale(0.9);
  border-radius: 20px;
  border: #CBB26A 3px solid;
}

.iframe {
  height: 80vh;
  width: 80vw;
  max-width: 1920px;
  max-height: 1080px;
  scale: 0.9;
  border-radius: 20px;
  border: #CBB26A 3px solid;
}

.card {
  /*overflow-y: scroll;*/
  border-radius: 20px;
  background: linear-gradient(to bottom, black, #494747);
  height: 95%;
  width: 80%
}

.cardWebsite {
  color: white;
  box-shadow: 10px 10px 20px black;
  border: #CBB26A 1px solid;
  background: linear-gradient(to bottom, black, #494747);
  border-radius: 20px;
  height: 65vh;
}

.alert {
  max-width: 500px;
  width: 50vw;
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
