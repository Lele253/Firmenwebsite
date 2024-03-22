<template>
  <v-row class="d-flex align-center justify-center" style="width: 100%; height: 86vh">
    <v-col class="d-flex align-center justify-center" cols="11" style="height: 100% ">
      <v-card v-if="handy" class="pa-4 mx-5"
              style="height: 80%; background-color: rgba(255,255,255,0.66); overflow-y: scroll; font-size: 1.7vw">
        <h2>
          Impressum</h2>
        <p>Name FastGlobeIT Franke/Graf Gbr<br/>


          Straße: Wasserloses Tal 23
          <br/>
          Ort: 58093 <br>
          Tel:
          <a href="https://wa.me/message/SCZOXGKWSLF6M1" target="_blank">01786565122</a>

        </p>
        <!--        Telefon: <a class="email" href="tel:+491635059366">+49 163 5059366</a> <br>-->
        E-Mail: <a class="email" href="mailto:email.de">FastGlobeIt@gmail.com</a> <br><br>

        <h2>Website created by</h2>
        <a href="https://franke-arts.de">Stefan Franke</a> <br>
        <a href="https://leandro-graf.de">Leandro Graf</a>
        <br><br>

        <h2>Haftung für Inhalte:</h2>
        <p>
          Als Seitenbetreiber bin ich für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen
          verantwortlich.
          Ich
          bin jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde Informationen zu überwachen oder
          nach
          Umständen
          zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen. Verpflichtungen zur Entfernung oder
          Sperrung der
          Nutzung von Informationen nach den allgemeinen Gesetzen bleiben hiervon unberührt. Eine diesbezügliche
          Haftung
          ist
          jedoch erst ab dem Zeitpunkt der Kenntnis einer konkreten Rechtsverletzung möglich. Bei Bekanntwerden
          von
          entsprechenden Rechtsverletzungen werde ich diese Inhalte umgehend entfernen.</p> <br>
        <h2>Haftung für Links:</h2>
        <p>Diese Website enthält Links zu externen Websites Dritter, auf deren Inhalte ich keinen Einfluss habe.
          Deshalb
          kann ich für diese fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der verlinkten Seiten
          ist
          stets
          der jeweilige Anbieter oder Betreiber der Seiten verantwortlich. Die verlinkten Seiten wurden zum
          Zeitpunkt
          der
          Verlinkung auf mögliche Rechtsverstöße überprüft. Rechtswidrige Inhalte waren zum Zeitpunkt der
          Verlinkung
          nicht
          erkennbar. Eine permanente inhaltliche Kontrolle der verlinkten Seiten ist jedoch ohne konkrete
          Anhaltspunkte
          einer Rechtsverletzung nicht zumutbar. Bei Bekanntwerden von Rechtsverletzungen werde ich derartige
          Links
          umgehend
          entfernen.</p> <br>
        <h2>Urheberrecht:</h2>
        <p>Die durch mich erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen Urheberrecht.
          Die
          Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der Grenzen des
          Urheberrechtes
          bedürfen meiner schriftlichen Zustimmung. Downloads und Kopien dieser Seite sind nur für den privaten,
          nicht
          kommerziellen Gebrauch gestattet. Soweit die Inhalte auf dieser Seite nicht von mir erstellt wurden,
          werden
          die
          Urheberrechte Dritter beachtet. Insbesondere werden Inhalte Dritter als solche gekennzeichnet. Sollten
          Sie
          trotzdem auf eine Urheberrechtsverletzung aufmerksam werden, bitte ich um einen entsprechenden Hinweis.
          Bei
          Bekanntwerden von Rechtsverletzungen werde ich derartige Inhalte umgehend entfernen.</p>

      </v-card>
      <v-card v-if="!handy" class="pa-4 mx-5"
              style="height: 80%; background-color: rgba(255,255,255,0.66); overflow-y: scroll; font-size: 0.7vw">
        <h2>
          Impressum</h2>
        <p>Name FastGlobeIT Franke/Graf GBR<br/>


          Straße: Wasserloses Tal 23
          <br/>
          Ort: 58093 <br>
          Tel:
          <a href="https://wa.me/message/SCZOXGKWSLF6M1" target="_blank">01786565122</a>

        </p>
        <!--        Telefon: <a class="email" href="tel:+491635059366">+49 163 5059366</a> <br>-->
        E-Mail: <a class="email" href="mailto:email.de">FastGlobeIt@gmail.com</a> <br><br>

        <h2>Website created by</h2>
        <a href="https://franke-arts.de">Stefan Franke</a> <br>
        <a href="https://leandro-graf.de">Leandro Graf</a>
        <br><br>

        <h2>Haftung für Inhalte:</h2>
        <p>
          Als Seitenbetreiber bin ich für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen
          verantwortlich.
          Ich
          bin jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde Informationen zu überwachen oder
          nach
          Umständen
          zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen. Verpflichtungen zur Entfernung oder
          Sperrung der
          Nutzung von Informationen nach den allgemeinen Gesetzen bleiben hiervon unberührt. Eine diesbezügliche
          Haftung
          ist
          jedoch erst ab dem Zeitpunkt der Kenntnis einer konkreten Rechtsverletzung möglich. Bei Bekanntwerden
          von
          entsprechenden Rechtsverletzungen werde ich diese Inhalte umgehend entfernen.</p> <br>
        <h2>Haftung für Links:</h2>
        <p>Diese Website enthält Links zu externen Websites Dritter, auf deren Inhalte ich keinen Einfluss habe.
          Deshalb
          kann ich für diese fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der verlinkten Seiten
          ist
          stets
          der jeweilige Anbieter oder Betreiber der Seiten verantwortlich. Die verlinkten Seiten wurden zum
          Zeitpunkt
          der
          Verlinkung auf mögliche Rechtsverstöße überprüft. Rechtswidrige Inhalte waren zum Zeitpunkt der
          Verlinkung
          nicht
          erkennbar. Eine permanente inhaltliche Kontrolle der verlinkten Seiten ist jedoch ohne konkrete
          Anhaltspunkte
          einer Rechtsverletzung nicht zumutbar. Bei Bekanntwerden von Rechtsverletzungen werde ich derartige
          Links
          umgehend
          entfernen.</p> <br>
        <h2>Urheberrecht:</h2>
        <p>Die durch mich erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen Urheberrecht.
          Die
          Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der Grenzen des
          Urheberrechtes
          bedürfen meiner schriftlichen Zustimmung. Downloads und Kopien dieser Seite sind nur für den privaten,
          nicht
          kommerziellen Gebrauch gestattet. Soweit die Inhalte auf dieser Seite nicht von mir erstellt wurden,
          werden
          die
          Urheberrechte Dritter beachtet. Insbesondere werden Inhalte Dritter als solche gekennzeichnet. Sollten
          Sie
          trotzdem auf eine Urheberrechtsverletzung aufmerksam werden, bitte ich um einen entsprechenden Hinweis.
          Bei
          Bekanntwerden von Rechtsverletzungen werde ich derartige Inhalte umgehend entfernen.</p>

      </v-card>
    </v-col>
  </v-row>

</template>

<script>


import {mapGetters} from "vuex";

export default {
  name: "ImpressumView",
  components: {},
  computed: {
    ...mapGetters(['handy'])
  }
}
</script>

<style>

.hintergrundbild {
  background-color: white;
}
</style>