<template>
  <div>
    <v-menu location="bottom">
      <template v-slot:activator="{ props }">
        <v-btn :class="handy ? 'button-handy' : 'button'" v-bind="props">
          <p :style="handy ?  'font-size: 3vw':'font-size: 1vw'">
            Termin Vereinbaren
          </p>
        </v-btn>
      </template>

      <v-list
          :class="handy ? 'button-handy1' : 'button1'"
      >
        <v-list-item @click="weiterleitenAufWhatsapp">
          Über Whatsapp kontaktieren
        </v-list-item>
        <v-divider thickness="3"/>
        <v-list-item @click="dialog = true">
          Über Kontaktformular kontaktieren
        </v-list-item>
      </v-list>
    </v-menu>

    <v-dialog v-if="handy" v-model="dialog" scrim="black" width="1200">
      <v-card
          class="mx-auto my-12 pa-5 dialogBackground"
          style="box-shadow:0 4px 8px 0 rgb(0,0,0), 0 6px 20px 0 rgb(0,0,0)"
          width="350">
        <v-row>
          <v-col>
            <v-row class="justify-center">
              <v-col class="d-flex justify-center" cols="10">
                <h1 class="line"> Termin Vereinbaren</h1>
              </v-col>
              <v-col class="d-flex justify-center mt-16" cols="10">
                <v-text-field v-model="name" label="Name" variant="underlined"/>
              </v-col>
              <v-col class="d-flex justify-center mt-n8" cols="10">
                <v-text-field v-model="email" label="Email" variant="underlined"/>
              </v-col>
              <v-col class="d-flex justify-center mt-n8" cols="10">
                <v-text-field v-model="telefonnummer" label="Telefonnummer" variant="underlined"/>
              </v-col>
              <v-col class="d-flex justify-center mt-n8" cols="10">
                <v-textarea v-model="text" clearable="true" counter
                            label="Nachricht" no-resize="true" variant="underlined"/>
              </v-col>
            </v-row>
          </v-col>

          <v-col cols="12">
            <v-row class="mt-n10">
              <v-col class="d-flex justify-center" cols="6">
                <v-btn variant="text" @click="create">
                  Senden
                </v-btn>
              </v-col>
              <v-col class="d-flex justify-center" cols="6">
                <v-btn variant="text" @click="dialog = false">
                  Schließen
                </v-btn>
              </v-col>
            </v-row>
          </v-col>
        </v-row>
      </v-card>

    </v-dialog>
    <v-dialog v-if="!handy" v-model="dialog" scrim="black" width="1200">
      <v-card
          class="mx-auto my-12 pa-5 dialogBackground"
          style=" box-shadow: 0 4px 8px 0 rgb(0,0,0), 0 6px 20px 0 rgb(0,0,0)"
          width="1200">
        <v-row>
          <v-col>
            <v-row class="justify-center">
              <v-col class="d-flex justify-center" cols="10">
                <h1 class="line"> Termin Vereinbaren</h1>
              </v-col>
              <v-col class="d-flex justify-center mt-n8" cols="10">
                <v-text-field v-model="name" label="Name" variant="underlined"/>
              </v-col>
              <v-col class="d-flex justify-center mt-n8" cols="10">
                <v-text-field v-model="email" label="Email" variant="underlined"/>
              </v-col>
              <v-col class="d-flex justify-center mt-n8" cols="10">
                <v-text-field v-model="telefonnummer" label="Telefonnummer" variant="underlined"/>
              </v-col>
              <v-col class="d-flex justify-center mt-6" cols="10">
                <v-textarea v-model="text" clearable="true" counter
                            label="Nachricht" no-resize="true" variant="underlined"/>
              </v-col>
            </v-row>
          </v-col>
          <v-col>
            <v-row class=" mr-n5">
              <v-col class="d-flex justify-center" cols="12">
                <div class="logo"/>
              </v-col>
              <v-col class="px-8 mt-8 " cols="12">
                <h1 class="line">Ihre Anliegen sind uns wichtig!</h1>
                <br>
                <p class="" style="font-size: 16px">Zögern Sie nicht, unser
                  Kontaktformular
                  zu
                  nutzen,
                  um
                  mit
                  uns in Verbindung zu treten und die bestmögliche Betreuung für
                  Ihre Website zu erhalten.
                </p>
              </v-col>
            </v-row>
          </v-col>

          <v-col cols="12">
            <v-row class="mt-n10">
              <v-col class="d-flex justify-center" cols="6">
                <v-btn variant="text" @click="create">
                  Senden
                </v-btn>
              </v-col>
              <v-col class="d-flex justify-center" cols="6">
                <v-btn variant="text" @click="dialog = false">
                  Schließen
                </v-btn>
              </v-col>
            </v-row>
          </v-col>
        </v-row>
      </v-card>

    </v-dialog>
  </div>

</template>

<script>
import {mapGetters} from "vuex";
import axios from "axios";

export default {
  computed: {
    ...mapGetters(['user', 'handy'])
  },
  methods: {
    weiterleitenAufWhatsapp() {
      window.open("https://wa.me/message/SCZOXGKWSLF6M1")
    },
    async create() {

      if (this.email !== '' && this.name !== '') {
        try {
          const response = await axios.post('https://fastglobeit.de:8081/auth/sendMailAsHTML', {
                "to": 'fastglobeit@gmail.com',
                "subject": this.name + " möchte kontakt mit dir aufnehmen.",
                "htmlText": "<div><h3>Hallo ihr Götter,</h3><p>" + this.name + "" +
                    " möchte kontakt mit dir aufnehmen. Im Folgenden siehst du seine" +
                    " eingetragenen Daten und die dazugehörige Nachricht:</p><p>Name: " + this.name + "" +
                    "<br>Telefonnummer: <a href=\"tel:" + this.telefonnummer + "\">" + this.telefonnummer + "</a>" +
                    "<br>Email: <a href=\"mailto:" + this.email + "\">" + this.email + "</a><br>Nachricht: <br> <br> " + this.text + "</p>" +
                    "<br><p>Mit freundlichen Grüßen<br>Deine sexy Boys</p><i>Diese E-Mail wurde automatisch erzeugt.</i></div>"
              }
          )
          console.log(response)
          /* try {
             const response = await axios.post('https://fastglobeit.de:8081/auth/sendMailAsHTML', {
                   "to": this.email,
                   "subject": "Sie haben eine Kontaktanfrage geschickt",
                   "htmlText": `
   <div>
     <h3>
       Hallo ` + this.vorname + ` ` + this.nachname + `
     </h3>
     <p>
       Sie haben eine Kontaktanfrage an Benjamin Bodtländer verschickt. Es wird sich, so schnell wie möglich, bei Ihnen melden.
     </p>
     <p>
       Falls weitere Probleme oder Fragen entstehen, bitten wir Sie, das Kontaktformular auf
       <a href="https://mpu-institut-saar.de/">www.mpu-institut-saar.de</a> auszufüllen
       und diese konkret zu schildern.
     </p>

     <br>
     <p>
       Mit freundlichen Grüßen
       <br>
       <a href="https://fastglobeit.de"> Ihr FastGlobeIT-Team</a>
     </p>
     <i>Diese E-Mail wurde automatisch erzeugt.</i>
   </div>
 `
                 }
             )
             console.log(response)
           }
           catch (e) {
             console.log(e)
           }*/

          this.name = null
          this.email = null
          this.telefonnummer = null
          this.text = 'Vielen Dank für Ihre Anfrage. Sie können den Dialog jetzt schließen. Wir werden uns in Kürze bei Ihnen melden.'
        } catch (e) {
          console.log(e)
        }
      }

    },
  },
  data() {
    return {
      name: '',
      email: '',
      telefonnummer: '',
      text: '',
      isHovered: false,
      dialog: false,
    }
  },
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Dancing+Script:wght@400..700&display=swap');

.line {
  font-family: "Dancing Script", cursive;
  color: white;
}

.dialogBackground {
  color: #f2f2f2;
  background-color: rgb(0, 0, 0);
}

.logo {
  background-image: url("../assets/Logo.webp");
  background-size: cover;
  width: 372px;
  height: 122px;
}
</style>