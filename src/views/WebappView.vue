<template>
  <v-row class="mx-0 mt-16" style="width:100%; height: 70%">
    <v-col class="d-flex align-center justify-center">
      <div class="fly-in-from-bottom">
        <h1 :style="$store.state.handy ? 'font-size: 8vw' : 'font-size: 3vw'" class="headline"
            style=" text-shadow: 1px 1px  black"> Maßgeschneiderte <br>
          Webanwendungen</h1>
        <p :style="$store.state.handy ? 'font-size: 3.2vw' : 'font-size: 1.1vw'" class="mt-16">
          Wir sind erfahrene Entwickler, die sich auf die Erstellung <br>
          maßgeschneiderter Webanwendungen spezialisiert haben. <br>
          Mit einem breiten Spektrum an Technologien und Frameworks <br>
          können wir leistungsstarke und benutzerfreundliche <br>
          Lösungen entwickeln. Von der Planung bis zur <br>
          Implementierung stehen wir unseren Kunden zur Seite, <br>
          um ihre Anforderungen zu erfüllen. Durch den Einsatz <br>
          modernster Methoden garantieren wir effizientes <br>
          Arbeiten und erstklassige Ergebnisse. <br>
        </p>
        <TerminComponent class="mt-n4"></TerminComponent>
      </div>
    </v-col>
    <v-col v-if="!handy" class="d-flex align-center justify-center fly-in-from-top" style="max-height: 100%">
      <v-img height="100%" src="../assets/Webapp.png"></v-img>
    </v-col>
  </v-row>
</template>


<script>

import {defineComponent} from "vue";
import TerminComponent from "@/components/TerminComponent.vue";
import {mapGetters} from "vuex";

export default defineComponent({
  components: {TerminComponent},
  data() {
    return {}
  },
  computed: {
    ...mapGetters(['user', 'handy'])
  },
  methods: {}
})
</script>

<style scoped>


</style>