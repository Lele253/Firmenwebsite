
<template>
  <v-row style="width:100%; height: 70%" class="mx-0 mt-16">
    <v-col class="d-flex align-center justify-center">
      <div>
        <h1 style="font-size: 2.5vw; text-shadow: 1px 1px black" class="headline"> Effiziente <br> Webentwicklung <br> für optimale Ergebnisse</h1>
        <p style="font-size: 1.1vw"  class="mt-16">
          Unsere Dienstleistungen umfassen die Gestaltung und <br>
          Entwicklung ansprechender und funktionaler Websites und <br>
          Webanwendungen. Wir optimieren Ihre Online-Präsenz für <br>
          Suchmaschinen, integrieren Content Management Systeme <br>
          und  implementieren Sicherheitsmaßnahmen. Zusätzlich <br>
          bieten wir einen umfassenden Wartungs- und Supportservice, <br>
          um sicherzustellen, dass Ihre Website stets aktuell <br>
          und reibungslos läuft.
        </p>
        <TerminComponent></TerminComponent>
      </div>
    </v-col>
    <v-col style="max-height: 100%" class="d-flex align-center justify-center">
      <p style="font-size: 1.1vw"  >
        1. Webdesign <br>
        2. Webentwicklung <br>
        3. Responsive Design <br>
        4. Benutzerfreundlichkeit (Usability) Optimierung <br>
        5. Content Management System (CMS) Integration <br>
        6. Suchmaschinenoptimierung (SEO) <br>
        7. Webanalyse und Tracking <br>
        8. Sicherheitsüberprüfung und -optimierung <br>
        9. Wartung und Support
      </p>

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
