<template>
  <v-row class="mx-0 mt-16" style="width:100%; height: 70%">
    <v-col class="d-flex align-center justify-center">
      <div class="fly-in-from-left">
        <h1 :style="$store.state.handy ? 'font-size: 8vw' : 'font-size: 2.5vw'" class="headline"
            style=" text-shadow: 1px 1px black"> Effiziente <br> Webentwicklung <br> für optimale Ergebnisse</h1>
        <p :style="$store.state.handy ? 'font-size: 3.2vw' : 'font-size: 1.1vw'" class="mt-16">
          Unsere Dienstleistungen umfassen die Gestaltung und <br>
          Entwicklung ansprechender und funktionaler Websites und <br>
          Webanwendungen. Wir optimieren Ihre Online-Präsenz für <br>
          Suchmaschinen, integrieren Content Management Systeme <br>
          und implementieren Sicherheitsmaßnahmen. Zusätzlich <br>
          bieten wir einen umfassenden Wartungs- und Supportservice, <br>
          um sicherzustellen, dass Ihre Website stets aktuell <br>
          und reibungslos läuft.
        </p>
        <TerminComponent class="mt-n4"></TerminComponent>
      </div>
    </v-col>
    <v-col v-if="!handy" class="d-flex align-center justify-center fly-in-from-right" style="max-height: 100%">
      <v-img alt="Webdesign und Entwicklung" height="100%" src="../assets/notizblock.webp"
             style="height: 80vw"></v-img>
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
.card {
  height: 75%;
  padding: 20px;
  backdrop-filter: blur(6px);
  background-color: rgba(0, 0, 0, 0.23);
  box-shadow: 2px 2px 5px black;
  border-left: solid 1px rgba(255, 255, 255, 0.47);
  border-top: solid 1px rgba(255, 255, 255, 0.47);
}

</style>
