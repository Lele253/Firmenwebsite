<template>
  <div class="footer">
    <v-row style="width: 100%">
      <v-col>
        <span>
          <router-link class="link" to="/impressum">
            Impressum
          </router-link>
        </span>
        <span v-if="!handy">
              |
        </span>
        <span v-if="!handy">
          <router-link class="link" to="/rechnung">
             Verwaltung

          </router-link>
        </span>
        <span>
      |
       </span>

        <span>
          <router-link class="link" to="/datenschutz">
             Datenschutz

          </router-link>
        </span>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import {mapGetters} from "vuex";

export default {
  computed: {
    ...mapGetters(['handy'])
  }
}
</script>


<style scoped>
.footer {
  position: absolute;
  top: 96%;
  padding: 0px;
  margin: 0px;
  left: 20px;
  height: 10px;
  width: 300px;
  font-size: 12px;
}

.link {
  text-decoration: none;
  color: black;
}
</style>
