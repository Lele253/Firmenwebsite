
<template>
<v-row style="width:100%; height: 70%" class="mx-0 mt-16">
  <v-col class="d-flex align-center justify-center">
    <div>
      <h1 style="font-size: 3vw; text-shadow: 1px 1px black" class="headline">Webdesign und <br> Webapp-Entwicklung</h1>
      <p style="font-size: 1.5vw"  class="mt-16">
        Dein Unternehmen benötigt eine Softwarelösung, <br>
        Webapp oder Website mit SEO? <br>
        Dann Kontaktiere uns und wir vereinbaren <br>
        einen Termin für ein Erstgespräch.
      </p>
      <TerminComponent></TerminComponent>
    </div>
  </v-col>
  <v-col></v-col>
</v-row>
</template>


<script >

import {defineComponent} from "vue";
import TerminComponent from "@/components/TerminComponent.vue";

export default defineComponent({
  components: { TerminComponent}
})
</script>

<style scoped>

</style>