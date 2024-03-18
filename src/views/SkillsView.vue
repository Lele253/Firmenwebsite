<template>
    <v-row style="width:100%; height: 70%" class="mx-0 mt-16">
      <v-col class="d-flex align-center justify-center">
        <div class="fly-in-from-bottom-right">
          <h1 :style="$store.state.handy ? 'font-size: 8vw' : 'font-size: 3vw'"  style=" text-shadow: 1px 1px black" class="headline">Auf dem <br> neusten Stand</h1>
          <p :style="$store.state.handy ? 'font-size: 3.2vw' : 'font-size: 1.1vw'"  class="mt-16">
            Wir setzen modernste Technologien ein, um Ihren <br>
            individuellen Anforderungen gerecht zu werden und <br>
            innovative Lösungen zu entwickeln. Unser Fachwissen <br>
            erstreckt sich über die gesamte Bandbreite der <br>
            Webentwicklung,
            einschließlich responsivem Design  <br>
            für eine optimale Darstellung auf verschiedenen Geräten. <br>
            Zudem legen wir besonderen Wert auf die Sicherheit <br>
            Ihrer Anwendungen, indem wir bewährte <br>
            Sicherheitspraktiken und -standards <br>
            implementieren. Mit unserer Expertise bieten wir Ihnen nicht <br>
            nur eine erstklassige Nutzererfahrung, sondern auch die <br>
            Gewissheit, dass Ihre Anwendungen vor potenziellen <br>
            Bedrohungen geschützt sind
          </p>
          <TerminComponent></TerminComponent>
        </div>
      </v-col>
      <v-col class="fly-in-from-top-left"  v-if="!handy" >
        <v-row style="width: 100%; height: 60vh" class="ma-0 align-center justify-center">
          <v-col style="height: 40%; width: 40%" class="d-flex justify-center" cols="4">
            <v-img cover class="skills" src="../assets/java.png"></v-img>
          </v-col>
          <v-col style="height: 40%; width: 40%" class="d-flex justify-center" cols="4">
            <v-img cover  class="skills" src="../assets/vue.png"></v-img>
          </v-col>
          <v-col style="height: 40%; width: 40%" class="d-flex justify-center" cols="4">
            <v-img cover  class="skills" src="../assets/Vuetify3.png"></v-img>
          </v-col>
          <v-col style="height: 40%; width: 40%" class="d-flex justify-center" cols="4">
            <v-img cover class="skills" src="../assets/Angular.png"></v-img>
          </v-col>
          <v-col style="height: 40%; width: 40%" class="d-flex justify-center" cols="4">
            <v-img cover  class="skills" src="../assets/Springboot.png"></v-img>
          </v-col>
          <v-col style="height: 40%; width: 40%" class="d-flex justify-center" cols="4">
            <v-img cover  class="skills" src="../assets/typescript.png"></v-img>
          </v-col>
          <v-col style="height: 40%; width: 40%" class="d-flex justify-center" cols="4">
            <v-img cover class="skills" src="../assets/html.png"></v-img>
          </v-col>
          <v-col style="height: 40%; width: 40%" class="d-flex justify-center" cols="4">
            <v-img cover  class="skills" src="../assets/CSS.png"></v-img>
          </v-col>
          <v-col style="height: 40%; width: 40%" class="d-flex justify-center" cols="4">
            <v-img cover  class="skills" src="../assets/JavaScript.png"></v-img>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
</template>


<script >

import TerminComponent from "@/components/TerminComponent.vue";
import {mapGetters} from "vuex";

export default {
  components: { TerminComponent},
  computed:{
    ...mapGetters(['user','handy'])
  },
}
</script>

<style scoped>
.skills{
  height: 100%;
  width: 100%;
  border-radius: 10px !important;
  box-shadow: 3px 3px 6px black;
}
</style>