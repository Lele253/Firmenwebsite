<template>
  <v-row class="mx-0 mt-16" style="width:100%; height: 70%">
    <v-col class="d-flex align-center justify-center">
      <div class="fly-in-from-bottom-left">
        <h1 :style="$store.state.handy ? 'font-size: 8vw' : 'font-size: 2.5vw'" class="headline"
            style=" text-shadow: 1px 1px black"> Effiziente <br> Webentwicklung</h1>
        <p :style="$store.state.handy ? 'font-size: 3.2vw' : 'font-size: 1.1vw'" class="mt-16">
          Unser Ansatz zur effizienten Webentwicklung basiert <br>
          auf bewährten Methoden und modernsten Technologien. <br>
          Durch die Nutzung von agilen Entwicklungsmethoden <br>
          können wir flexibel auf Änderungen reagieren und den <br>
          Entwicklungsprozess optimieren. Darüber hinaus <br>
          setzen wir auf kontinuierliche Integration und <br>
          automatisierte Tests, um die Qualität unserer Arbeit <br>
          sicherzustellen und die Time-to-Market zu verkürzen. <br>
          Unser Ziel ist es, unseren Kunden eine schnelle, <br>
          zuverlässige und hochwertige Webentwicklungslösung <br>
          zu bieten, die ihre Anforderungen erfüllt und ihre <br>
          Ziele unterstützt.
        </p>
        <TerminComponent class="mt-n4"></TerminComponent>
      </div>
    </v-col>
    <v-col v-if="!handy" class="d-flex align-center justify-center fly-in-from-top-right" style="max-height: 100%">
      <v-img height="100%" src="../assets/Entwicklung.png"
             style="border-radius: 13px; filter: drop-shadow(2px 2px 4px rgb(0,0,0));"></v-img>
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