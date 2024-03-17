
<template>
  <v-row style="width:100%; height: 70%" class="mx-0 mt-16">
    <v-col class="d-flex align-center justify-center">
      <div>
        <h1 style="font-size: 3vw" class="headline"> Maßgeschneiderte <br>
          Webanwendungen</h1>
        <p style="font-size: 1.1vw"  class="mt-16">
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
        <TerminComponent></TerminComponent>
      </div>
    </v-col>
    <v-col style="max-height: 100%" class="d-flex align-center justify-center">
      <v-img height="100%" src="../assets/Webapp.png"></v-img>
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
.iframe{
  border: none;
  border-radius: 13px;
  box-shadow: 4px 4px 8px black;
}

</style>