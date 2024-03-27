<template>
  <v-row class="mx-0 mt-16" style="width:100%; height: 70%">
    <v-col class="d-flex align-center justify-center">
      <div class="fly-in-from-bottom-right">
        <h1 :style="$store.state.handy ? 'font-size: 8vw' : 'font-size: 3vw'" class="headline"
            style=" text-shadow: 1px 1px black">Auf dem <br> neusten Stand</h1>
        <p :style="$store.state.handy ? 'font-size: 3.2vw' : 'font-size: 1.1vw'" class="mt-16">
          Wir setzen modernste Technologien ein, um Ihren individuellen <br> Anforderungen gerecht zu werden und
          innovative Lösungen zu entwickeln.
          <br> Unser Fachwissen erstreckt sich über die gesamte Bandbreite der Webentwicklung, <br> einschließlich
          responsivem Design für eine optimale Darstellung <br> auf verschiedenen Geräten. Zudem legen wir besonderen
          Wert
          auf die Sicherheit <br> Ihrer Anwendungen, indem wir bewährte Sicherheitspraktiken <br> und -standards
          implementieren.
          Mit unserer Expertise bieten wir Ihnen <br> nicht nur eine erstklassige Nutzererfahrung, sondern auch die
          Gewissheit, <br> dass Ihre Anwendungen vor potenziellen Bedrohungen geschützt sind.
        </p>
        <TerminComponent class="mt-n4"></TerminComponent>
      </div>
    </v-col>
    <v-col v-if="!handy" class="fly-in-from-top-left">
      <v-row class="ma-0 align-center justify-center" style="width: 100%; height: 60vh">
        <v-col class="d-flex justify-center" cols="4" style="height: 40%; width: 40%">
          <v-img alt="Webdesign und Entwicklung" class="skills" cover src="../assets/java.webp"></v-img>
        </v-col>
        <v-col class="d-flex justify-center" cols="4" style="height: 40%; width: 40%">
          <v-img alt="Webdesign und Entwicklung" class="skills" cover src="../assets/vue.webp"></v-img>
        </v-col>
        <v-col class="d-flex justify-center" cols="4" style="height: 40%; width: 40%">
          <v-img alt="Webdesign und Entwicklung" class="skills" cover src="../assets/Vuetify3.webp"></v-img>
        </v-col>
        <v-col class="d-flex justify-center" cols="4" style="height: 40%; width: 40%">
          <v-img alt="Webdesign und Entwicklung" class="skills" cover src="../assets/Angular.webp"></v-img>
        </v-col>
        <v-col class="d-flex justify-center" cols="4" style="height: 40%; width: 40%">
          <v-img alt="Webdesign und Entwicklung" class="skills" cover src="../assets/Springboot.webp"></v-img>
        </v-col>
        <v-col class="d-flex justify-center" cols="4" style="height: 40%; width: 40%">
          <v-img alt="Webdesign und Entwicklung" class="skills" cover src="../assets/typescript.webp"></v-img>
        </v-col>
        <v-col class="d-flex justify-center" cols="4" style="height: 40%; width: 40%">
          <v-img alt="Webdesign und Entwicklung" class="skills" cover src="../assets/html.webp"></v-img>
        </v-col>
        <v-col class="d-flex justify-center" cols="4" style="height: 40%; width: 40%">
          <v-img alt="Webdesign und Entwicklung" class="skills" cover src="../assets/CSS.webp"></v-img>
        </v-col>
        <v-col class="d-flex justify-center" cols="4" style="height: 40%; width: 40%">
          <v-img alt="Webdesign und Entwicklung" class="skills" cover src="../assets/JavaScript.webp"></v-img>
        </v-col>
      </v-row>
    </v-col>
  </v-row>
</template>


<script>

import TerminComponent from "@/components/TerminComponent.vue";
import {mapGetters} from "vuex";

export default {
  components: {TerminComponent},
  computed: {
    ...mapGetters(['user', 'handy'])
  },
}
</script>

<style scoped>
.skills {
  height: 100%;
  width: 100%;
  border-radius: 10px !important;
  box-shadow: 3px 3px 6px black;
}
</style>