<template>
  <v-form @submit.prevent="login">
    <div class="d-flex justify-center " style="margin-top: 20vh">
      <v-card class="card">
        <v-card-title class="text-center">
          <span class="text-h5 text-white">Einloggen</span>
        </v-card-title>
        <v-card-text>
          <v-container>
            <v-row class="d-flex justify-center" style="width: 100%">
              <v-col
                  cols="12">
                <v-text-field v-model="email"
                              base-color="white"
                              class="text-white"
                              color="white"
                              label="Email"
                              required
                              type="email"
                              variant="outlined"
                ></v-text-field>
              </v-col>
              <v-col
                  cols="12">
                <v-text-field v-model="password"
                              base-color="white"
                              class="text-white"
                              color="white"
                              label="Passwort"
                              persistent-hint
                              required
                              type="password"
                              variant="outlined"
                ></v-text-field>
              </v-col>
            </v-row>
          </v-container>
          <v-alert v-if="error === 'AxiosError: Request failed with status code 401'"
                   class="text-center text-black mx-5" type="warning">
            Benutzername oder Passwort ist falsch.
          </v-alert>

          <v-alert v-if="error !== 'AxiosError: Request failed with status code 401' && error != null"
                   class="text-center text-black mx-5" type="error">
            Einloggen ist momentan nicht möglich. Bitte wenden Sie sich an den Administrator.
          </v-alert>
        </v-card-text>
        <v-card-actions class="d-flex justify-center">
          <v-btn
              color="white"
              variant="text"
              @click="$router.push('/')">
            Abbrechen
          </v-btn>
          <v-btn
              color="white"
              type="submit">
            Einloggen
          </v-btn>
        </v-card-actions>
      </v-card>
    </div>

  </v-form>
</template>

<script>
import {mapGetters} from "vuex";
import axios from "axios";

export default {
  name: "LoginComponent",
  data: () => ({
    email: null,
    password: '',
    error: null
  }),

  components: {},
  computed: {
    ...mapGetters(['user'])
  },
  methods: {
    async login() {
      try {
        const response = await axios.post('https://tier-gesundheitszentrum.com:8080/auth/login',
            {
              email: this.email,
              password: this.password
            }, {
              headers: {
                "Content-Type": "application/json",
                "Accept": "application/json",
                "Authorization": "Bearer" + localStorage.getItem('token'),
              }
            });
        await localStorage.setItem('token', response.data.token)
        this.$store.state.user = response.data.user
        this.$router.push('/rechnung')
      } catch (error) {

        if (error === 'AxiosError: Request failed with status code 401') {
          alert('Benutzername oder Passwort ist falsch.')
        }

        if (error !== 'AxiosError: Request failed with status code 401' && error != null) {
          alert('Einloggen ist momentan nicht möglich. Bitte wenden Sie sich an den Administrator.')
        }
      }
    },
  },

}
</script>

<style scoped>
.card {
  background-color: rgba(70, 68, 68, 0.1);
  border-top: 1px solid rgba(255, 255, 255, 0.75);
  border-left: 1px solid rgba(255, 255, 255, 0.75);
  border-radius: 30px;
  backdrop-filter: blur(4px);
  box-shadow: 5px 5px 10px #000000;
  min-height: 350px;
  width: 50vw;
  max-width: 600px;
  min-width: 350px;
}
</style>
