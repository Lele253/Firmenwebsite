<template>
  <section>
    <div class="hex_row_odd">
      <div class="center">
        <div class="hexagon">
          <div class="hex1">
            <div class="hex2 hexa1" style="">
              <div class="desc">
                <h2>Vue.JS 3</h2>
                <h6>Web-Framework</h6>
              </div>
            </div><!--/hex2-->
          </div><!--/hex1-->
        </div><!--/hexagon-->
      </div><!--/center-->

      <div class="center">
        <div class="hexagon">
          <div class="hex1">
            <div class="hex2 hexa2" >
              <div class="desc">
                <h2>Angular</h2>
                <h6>Web-Framework</h6>
              </div>
            </div><!--/hex2-->
          </div><!--/hex1-->
        </div><!--/hexagon-->
      </div><!--/center-->

      <div class="center">
        <div class="hexagon">
          <div class="hex1">
            <div class="hex2 hexa3" >
              <div class="desc">
                <h2 class="ml-n2">Springboot</h2>
                <h6>Java-Backend <br> Framework</h6>
              </div>
            </div><!--/hex2-->
          </div><!--/hex1-->
        </div><!--/hexagon-->
      </div><!--/center-->
    </div><!--/hex_row_even-->

    <div class="hex_row_even">
      <div class="center">
        <div class="hexagon">
          <div class="hex1">
            <div class="hex2 hexa4">
              <div class="desc">
                <h2>CSS</h2>
                <h6>Sylesheet <br> Language</h6>
              </div>
            </div><!--/hex2-->
          </div><!--/hex1-->
        </div><!--/hexagon-->
      </div><!--/center-->

      <div class="center">
        <div class="hexagon">
          <div class="hex1">
            <div class="hex2 hexa-stefan" >
              <div class="desc">
                <h2>Stefan</h2>
                <h3>Franke</h3>
              </div>
            </div><!--/hex2-->
          </div><!--/hex1-->
        </div><!--/hexagon-->
      </div><!--/center-->

      <div class="center">
        <div class="hexagon">
          <div class="hex1">
            <div class="hex2 hexa-leandro">
              <div class="desc">
                <h2>Leandro</h2>
                <h3>Graf</h3>
              </div>
            </div><!--/hex2-->
          </div><!--/hex1-->
        </div><!--/hexagon-->
      </div><!--/center-->

      <div class="center">
        <div class="hexagon">
          <div class="hex1">
            <div class="hex2 hexa5">
              <div class="desc">
                <h2>HTML</h2>
                <h6>Markup <br> language</h6>
              </div>
            </div><!--/hex2-->
          </div><!--/hex1-->
        </div><!--/hexagon-->
      </div><!--/center-->

    </div><!--/hex_row_even-->

    <div class="hex_row_odd">
      <div class="center">
        <div class="hexagon">
          <div class="hex1">
            <div class="hex2 hexa6" >
              <div class="desc">
                <h2>Java</h2>
                <h6>object-oriented <br> programming <br> language </h6>
              </div>
            </div><!--/hex2-->
          </div><!--/hex1-->
        </div><!--/hexagon-->
      </div><!--/center-->

      <div class="center">
        <div class="hexagon">
          <div class="hex1">
            <div class="hex2 hexa7">
              <div class="desc">
                <h2  style="margin-left: 6px">javascript</h2>
                <h6> interpreted programming language</h6>
              </div>
            </div><!--/hex2-->
          </div><!--/hex1-->
        </div><!--/hexagon-->
      </div><!--/center-->

      <div class="center">
        <div class="hexagon">
          <div class="hex1">
            <div class="hex2 hexa8">
              <div class="desc">
                <h2>Vuetify 3</h2>
                <h6>CSS-Framework</h6>
              </div>
            </div><!--/hex2-->
          </div><!--/hex1-->
        </div><!--/hexagon-->
      </div><!--/center-->
    </div><!--/hex_row_even-->


  </section>
</template>

<script>
import $ from 'jquery';

export default {
  name: "HexaComponent",
  mounted() {
    var color = 'one';
    var counter = 0;
    $('.desc').hide();

    $('.hexagon').hover(
        function () {
          $(this).find('.desc').fadeIn('fast');
          counter++;
          if (counter === 0) {
            color = 'base';
          } else if (counter === 1) {
            color = 'one';
          } else if (counter === 2) {
            color = 'two';
          } else if (counter === 3) {
            color = 'three';
          } else if (counter >= 4) {
            counter = 0;
            color = 'base';
          }
          $(this).find('.desc').addClass(color);
        },
        function () {
          $(this).find('.desc').fadeOut('fast', function () {
            $(this).removeClass(color);
          });
        }
    );
  }
}
</script>

<style scoped>
@import url(https://fonts.googleapis.com/css?family=Lato:300);
/* Variables */
body {
  background: #fff;
}
.hexa1{
  background: url('../assets/vue.png') center no-repeat;
  background-size: cover;
}
.hexa2{
  background: url('../assets/Angular.png') center no-repeat;
  background-size: cover;
}
.hexa3{
  background: url('../assets/Springboot.png') center no-repeat;
  background-size: cover;
}
.hexa4{
  background: url('../assets/CSS.png') center no-repeat;
  background-size: cover;
}
.hexa-leandro{
  background: url('../assets/leandro.png') center no-repeat;
  background-size: cover;
}
.hexa-stefan{
  background: url('../assets/stefan1.png') center no-repeat;
  background-size: cover;
}
.hexa5{
  background: url('../assets/html.png') center no-repeat;
  background-size: cover;
}
.hexa6{
  background: url('../assets/java.png') center no-repeat;
  background-size: cover;
}
.hexa7{
   background: url('../assets/JavaScript.png') center no-repeat;
   background-size: cover;
 }
.hexa8{
  background: url('../assets/logo.png') center no-repeat;
  background-size: cover;
}

section {
  margin: 0 auto;
  text-align: center;
  width: 960px;
}

.hex_row_even {
  display: inline-block;
  margin: 0 auto -275px auto;
  overflow: hidden;
}

.hex_row_odd {
  display: inline-block;
  margin: 0 auto -275px auto;
  overflow: hidden;
}

.center {
  float: left;
  margin: 20px 10px;
  width: 220px;
}

.hexagon {
  -moz-transform: rotate(120deg);
  -ms-transform: rotate(120deg);
  -webkit-transform: rotate(120deg);
  transform: rotate(120deg);
  cursor: pointer;
  height: 440px;
  overflow: hidden;
  visibility: hidden;
  width: 220px;
}

.hex1 {
  -moz-transform: rotate(-60deg);
  -ms-transform: rotate(-60deg);
  -webkit-transform: rotate(-60deg);
  transform: rotate(-60deg);
  height: 100%;
  overflow: hidden;
  width: 100%;
}

.hex2 {
  -moz-transform: rotate(-60deg);
  -ms-transform: rotate(-60deg);
  -webkit-transform: rotate(-60deg);
  transform: rotate(-60deg);
  height: 100%;
  position: relative;
  visibility: visible;
  width: 100%;
}
.hex2[style] {
  background-size: cover !important;
}

.desc {
  color: white;
  font-family: "Lato", sans-serif;
  font-size: 1.5em;
  font-weight: 300;
  height: 440px;
  line-height: 1.5em;
  position: absolute;
  text-align: center;
  text-transform: uppercase;
  visibility: visible;
  width: 220px;
}
.desc.base {
  background: rgba(230, 0, 98, 0.75);
}
.desc.one {
  background: rgba(252, 171, 55, 0.75);
}
.desc.two {
  background: rgba(169, 160, 50, 0.75);
}
.desc.three {
  background: rgba(83, 70, 54, 0.75);
}
.desc h2 {
  margin: 165px 20px 0 20px;
}
.desc p {
  font-size: 0.5em;
  text-transform: lowercase;
}

</style>
