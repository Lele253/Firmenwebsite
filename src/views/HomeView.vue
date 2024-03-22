<template>
  <v-row class="mx-0 mt-16" style="width:100%; height: 70%">
    <v-col class="d-flex align-center justify-center">
      <div class="fly-in-from-left">
        <h1 :style="$store.state.handy ? 'font-size: 8vw' : 'font-size: 3vw'" class="headline"
            style="text-shadow: 1px 1px black">Webdesign und <br> Webapp-Entwicklung</h1>
        <p :style="$store.state.handy ? 'font-size: 4vw' : 'font-size: 1.5vw'" class="mt-16">
          Dein Unternehmen benötigt eine Softwarelösung, <br>
          Webapp oder Website mit SEO? <br>
          Dann Kontaktiere uns und wir vereinbaren <br>
          einen Termin für ein Erstgespräch.
        </p>

        <TerminComponent class="mt-n4"></TerminComponent>
      </div>
    </v-col>
    <v-col v-if="!handy" class="d-flex align-center">
      <v-img alt="Webdesign und Entwicklung" class="fly-in-from-right office" src="../assets/Office.webp"></v-img>
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
  methods: {},
  data() {
    return {}
  }
}
</script>

<style scoped>
.office {
  border-radius: 13px;
  box-shadow: 3px 3px 6px rgba(0, 0, 0, 0.89);
}
</style>