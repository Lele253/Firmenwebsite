
<template>
  <v-btn :class="handy? 'button-handy' : 'button'">
    <p :style="handy ?  'font-size: 3vw':'font-size: 1vw'">
       Termin Vereinbaren
    </p>
  </v-btn>
</template>

<script>
import {mapGetters} from "vuex";

export default {
  computed:{
    ...mapGetters(['user','handy'])
  }
}
</script>

<style scoped>

</style>