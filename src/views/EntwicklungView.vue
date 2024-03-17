
<template>
  <v-row style="width:100%; height: 70%" class="mx-0 mt-16">
    <v-col class="d-flex align-center justify-center">
      <div>
        <h1 style="font-size: 2.5vw" class="headline"> Effiziente <br> Webentwicklung <br> für optimale Ergebnisse</h1>
        <p style="font-size: 1.1vw"  class="mt-16">
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
        <TerminComponent></TerminComponent>
      </div>
    </v-col>
    <v-col style="max-height: 100%" class="d-flex align-center justify-center">
      <v-img style="border-radius: 13px" cover height="90%" src="../assets/Entwicklung.png"></v-img>
    </v-col>
  </v-row>
</template>


<script >

import {defineComponent} from "vue";
import TerminComponent from "@/components/TerminComponent.vue";

export default defineComponent({
  components: { TerminComponent},
  data(){
    return{
    }
  },
  methods: {
  }
})
</script>

<style scoped>


</style>