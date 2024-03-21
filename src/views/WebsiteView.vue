<template>
  <v-row class="mx-0 mt-16" style="width:100%; height: 70%">
    <v-col :cols="handy ? 12: ''" class="d-flex align-center justify-center">
      <div class="fly-in-from-top">
        <h1 :style="$store.state.handy ? 'font-size: 8vw' : 'font-size: 3vw'" class="headline"
            style=" text-shadow: 1px 1px  black">Webdesigner <br>
          aus Dortmund</h1>
        <p :style="$store.state.handy ? 'font-size: 3.5vw' : 'font-size: 1.1vw'" class="mt-16">
          Wir sind Ihr Sparringspartner für die Website-Entwicklung, <br>
          optimieren sämtliche Aspekte und bieten ein perfekt <br>
          abgestimmtes Setup. Dank unserer Methoden verläuft die <br>
          Entwicklung reibungslos, auch bei Änderungen während des <br>
          Projekts. Sie erhalten ein benutzerfreundliches, <br>
          erweiterbares System mit geringem Wartungsaufwand. <br>
          Nach dem Launch bieten wir Ihnen zuverlässigen Service <br>
          rund um Ihre Website. Verlassen Sie sich auf unsere <br>
          Kompetenz und erfahrenen Ansprechpartner, <br>
          die Ihnen stets zur Seite stehen.
        </p>
        <TerminComponent class="mt-n7"></TerminComponent>
      </div>
    </v-col>
    <v-col v-if="!handy" class="d-flex align-center justify-center fly-in-from-bottom">
      <v-carousel class="iframe" hide-delimiters show-arrows="hover" style="width: 50%; height: 100%">
        <v-carousel-item>
          <iframe class="iframe" height="100%" src="https://mpu-institut-saar.de" width="100%">

          </iframe>
        </v-carousel-item>
        <v-carousel-item>
          <iframe class="iframe" height="100%" src="https://tier-gesundheitszentrum.com" width="100%">

          </iframe>
        </v-carousel-item>
      </v-carousel>
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
.iframe {
  border: none;
  border-radius: 13px;
  box-shadow: 4px 4px 8px black;
}

</style>