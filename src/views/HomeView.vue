<template>
  <div class="img pb-0" style=" height: 100vh">
    <!--    <h1 style="position: fixed"> Test Höhe {{ $store.state.scrollwert }}</h1>-->
    <div class="background pt-10 pb-0">

      <!--   Headder-->


      <div v-if="!mobile">
        <v-row align="center" class=" mx-0" justify="center" style="width: 100%; position:fixed; z-index: 10">
          <v-col cols="10">
            <div class="header">
              <v-row class="justify-center align-center my-0 mx-0" style="width: 100%; height: 100%">
                <v-col class=" pt-0 d-flex justify-center" cols="4" @click="$router.push('/')">
                  <svg class="css-1j8o68f" height="69.16933316395921" style="cursor: pointer"
                       viewBox="0 0 369.6551724137931 59.60093654188913" width="320">
                    <defs id="SvgjsDefs7931">
                      <linearGradient id="SvgjsLinearGradient7936">
                        <stop id="SvgjsStop7937" offset="0" stop-color="#8f5e25"></stop>
                        <stop id="SvgjsStop7938" offset="0.5" stop-color="#fbf4a1"></stop>
                        <stop id="SvgjsStop7939" offset="1" stop-color="#8f5e25"></stop>
                      </linearGradient>
                      <linearGradient id="SvgjsLinearGradient7940">
                        <stop id="SvgjsStop7941" offset="0" stop-color="#8f5e25"></stop>
                        <stop id="SvgjsStop7942" offset="0.5" stop-color="#fbf4a1"></stop>
                        <stop id="SvgjsStop7943" offset="1" stop-color="#8f5e25"></stop>
                      </linearGradient>
                    </defs>
                    <g id="SvgjsG7932" featurekey="symbolFeature-0"
                       fill="url(#SvgjsLinearGradient7936)"
                       transform="matrix(0.1922610856189972,0,0,0.1922610856189972,-0.025152198031466292,0)">
                      <defs xmlns="http://www.w3.org/2000/svg"></defs>
                      <g xmlns="http://www.w3.org/2000/svg">
                        <path class="fil0"
                              d="M301 191c-3,31 -17,59 -38,80 -24,24 -58,39 -95,39l0 -11c34,0 65,-14 88,-36 18,-19 31,-44 35,-72l-12 0 17 -30 18 30 -13 0zm-65 43c-19,19 -46,31 -75,33l-9 0c-29,-2 -55,-14 -74,-33 -68,-68 -24,-187 74,-191l9 0c99,4 143,123 75,191zm-31 -41c5,2 9,8 9,14 0,1 0,2 -1,3 8,4 14,9 20,14 17,-18 27,-42 27,-69l0 0 -52 0c0,12 -1,25 -3,38zm5 25c-3,3 -8,5 -12,5l-1 0c-4,12 -9,24 -18,33 18,-5 35,-13 48,-25 -5,-5 -11,-10 -17,-13zm-21 3c-5,-3 -8,-8 -8,-14 0,0 0,-1 0,-1 -6,-2 -13,-3 -20,-3l0 54c14,-3 23,-21 28,-36zm-5 -23c3,-4 8,-7 13,-7 1,-12 2,-24 2,-36l-38 0 0 39c8,1 16,2 23,4zm14 1c-5,0 -8,4 -8,8 0,4 3,7 8,7 4,0 7,-3 7,-7 0,-4 -3,-8 -7,-8zm-82 -69c7,2 13,8 15,16l21 0 0 -36c-11,-1 -22,-3 -32,-6 -2,8 -3,17 -4,26zm14 25c-1,7 -7,13 -15,15 1,11 2,21 4,31 11,-4 22,-6 33,-7l0 -39 -22 0zm-24 15c-8,-1 -14,-7 -16,-15l-36 0 0 0c0,27 10,51 27,69 8,-8 19,-15 30,-20 -3,-11 -4,-22 -5,-34zm-16 -24c1,-9 8,-15 17,-17 1,-10 3,-20 5,-28 -10,-5 -20,-11 -29,-19 -16,17 -27,39 -29,64l36 0zm20 -8c-7,0 -12,5 -12,12 0,7 5,12 12,12 7,0 12,-5 12,-12 0,-7 -5,-12 -12,-12zm86 -57c5,0 9,3 13,6 5,-3 11,-7 15,-10 -13,-11 -28,-19 -45,-23 7,8 13,17 17,27l0 0zm16 14c0,1 0,2 0,3 0,5 -3,11 -8,14 2,10 3,22 4,34l52 0c-2,-25 -13,-47 -30,-64 -3,3 -11,9 -18,13zm-16 19c-5,0 -10,-3 -13,-7l0 0c-7,2 -14,3 -22,3l0 36 38 0c0,-11 -2,-22 -3,-32zm-16 -15c0,-1 0,-1 0,-1 0,-6 3,-11 7,-14l0 0c-5,-13 -14,-29 -26,-32l0 49c7,0 13,-1 19,-2zm16 -9c-4,0 -7,3 -7,8 0,4 3,7 7,7 4,0 8,-3 8,-7 0,-5 -4,-8 -8,-8zm-82 2c4,-13 11,-28 20,-38 -16,4 -32,12 -44,23 7,6 15,11 24,15l0 0zm38 9l0 -49c-15,4 -25,29 -30,43 10,4 20,6 30,6zm-31 108c4,16 15,44 31,48l0 -54c-11,1 -21,3 -31,6zm-34 22c13,12 29,20 47,25 -10,-12 -17,-28 -21,-43 -10,4 -19,10 -26,18zm-33 28c-25,-19 -42,-45 -49,-73 -9,-33 -6,-69 13,-101l9 5c-17,29 -21,63 -12,93 7,26 22,50 44,67l6 -11 18 31 -35 0 6 -11zm65 -248c29,-12 60,-14 88,-6 33,8 63,30 81,62l-9 5c-17,-29 -44,-49 -75,-57 -26,-7 -54,-6 -80,5l6 10 -34 0 17 -30 6 11z"
                              style="fill: url('#SvgjsLinearGradient7936'); fill-rule: nonzero;"></path>
                      </g>
                    </g>
                    <g id="SvgjsG7933" featurekey="nameFeature-0"
                       fill="url(#SvgjsLinearGradient7940)"
                       transform="matrix(1.3753806458648425,0,0,1.3753806458648425,76.64407344080396,-4.478729280143298)">
                      <path
                          d="M8.72 9.96 l13.4 0 l0 1.32 c0 0.24 -0.2 0.44 -0.44 0.44 l-12.96 0 c-2.32 0 -4.2 1.88 -4.2 4.2 l0 8.56 c0.24 -0.24 0.6 -0.4 1 -0.4 l15.72 0 l0 1.32 c0 0.28 -0.24 0.48 -0.48 0.48 l-16.24 0 l0 13.68 c0 0.24 -0.2 0.44 -0.44 0.44 l-1.64 0 l0 -23.76 c0 -3.44 2.8 -6.28 6.28 -6.28 z M35.2 19.96 c2.76 0 4.96 2.28 4.96 5.04 l0 14.56 c0 0.24 -0.2 0.44 -0.44 0.44 l-10.04 0 c-2.76 0 -4.96 -2.24 -4.96 -5 l0 -2.08 c0 -2.8 2.2 -5.04 4.96 -5.04 l8.24 0 c0.24 0 0.4 -0.16 0.44 -0.44 l0 -2.6 c0 -1.76 -1.4 -3.2 -3.16 -3.2 l-8.36 0 c-0.2 0 -0.4 -0.2 -0.4 -0.44 l0 -1.24 l8.76 0 z M29.68 38.24 l8.68 0 l0 -8.84 c-0.08 0.08 -0.2 0.16 -0.32 0.16 l-8.36 0 c-1.76 0 -3.16 1.44 -3.16 3.2 l0 2.32 c0 1.76 1.4 3.16 3.16 3.16 z M58.36 33.04 c0 -0.24 -0.2 -0.52 -0.4 -0.56 l-12.48 -4.48 c-0.6 -0.2 -1.08 -0.88 -1.08 -1.52 l0 -2 c0 -2.76 2.2 -4.48 4.96 -4.48 l9.2 0 l0 1.2 c0 0.24 -0.2 0.44 -0.44 0.44 l-8.76 0 c-1.76 0 -3.16 1.12 -3.16 2.88 l0 1.48 c0 0.24 0.2 0.48 0.4 0.56 l12.4 4.48 c0.6 0.2 1.08 0.88 1.08 1.52 l0 3.04 c0 2.8 -2.24 4.4 -4.96 4.4 l-10.76 0 l0 -1.24 c0 -0.24 0.2 -0.44 0.44 -0.44 l10.32 0 c1.72 0 3.24 -0.96 3.24 -2.68 l0 -2.6 z M73.52000000000001 38.32 c0.2 0 0.4 0.2 0.4 0.44 l0 1.24 l-3.96 0 c-2.76 0 -4.96 -2.24 -4.96 -5.04 l0 -25.04 l1.36 0 c0.24 0 0.44 0.2 0.44 0.44 l0 10.44 c0.04 -0.44 0.56 -0.76 1.12 -0.76 l4.88 0 l0 1.2 c0 0.24 -0.2 0.44 -0.44 0.44 l-5.56 0 l0 13.48 c0 1.72 1.4 3.16 3.16 3.16 l3.56 0 z M77.56 16.08 c0 -3.48 2.8 -6.28 6.28 -6.28 l13.64 0 l0 1.28 c0 0.24 -0.2 0.44 -0.44 0.44 l-13.2 0 c-2.32 0 -4.2 1.88 -4.2 4.2 l0 18.52 c0 2.32 1.88 4.2 4.2 4.2 l8.8 0 c2.32 0 4.2 -1.88 4.2 -4.2 l0 -8.64 l-7.48 0 c-0.24 0 -0.44 -0.2 -0.44 -0.44 l0 -1.32 l9.6 0 c0.24 0 0.4 0.2 0.4 0.44 l0 9.64 c0 3.44 -2.8 6.28 -6.28 6.28 l-8.8 0 c-3.48 0 -6.28 -2.84 -6.28 -6.28 l0 -17.84 z  M103.64000000000001 39.56 l0 -27.92 l1.36 0 c0.24 0 0.44 0.2 0.44 0.44 l0 27.88 l-1.36 0 c-0.24 0 -0.44 -0.16 -0.44 -0.4 z M121.36000000000001 40.28 l-6.04 0 c-2.76 0 -4.96 -2.24 -4.96 -5 l0 -10.52 c0 -2.76 2.2 -5.04 4.96 -5.04 l6.04 0 c2.72 0 4.92 2.28 4.92 5.04 l0 10.52 c0 2.76 -2.2 5 -4.92 5 z M121.36000000000001 21.4 l-6.04 0 c-1.76 0 -3.16 1.44 -3.16 3.2 l0 10.84 c0 1.76 1.4 3.16 3.16 3.16 l6.04 0 c1.72 0 3.12 -1.4 3.12 -3.16 l0 -10.84 c0 -1.76 -1.4 -3.2 -3.12 -3.2 z M141.84 20 c2.76 0 4.96 1.88 4.96 4.88 l0 10.24 c0 3 -2.2 4.88 -4.96 4.88 l-10.28 0 c-0.24 0 -0.44 -0.2 -0.44 -0.44 l0 -29.56 l1.36 0 c0.24 0 0.44 0.2 0.44 0.44 l0 10.32 c0.04 -0.44 0.56 -0.76 1.12 -0.76 l7.8 0 z M145.07999999999998 35.16 l0 -10.32 c0 -1.76 -1.48 -3.2 -3.24 -3.2 l-8.24 0 c-0.36 0.04 -0.64 0.32 -0.68 0.72 l0 3.72 l0 12.24 l8.92 0 c1.76 0 3.24 -1.4 3.24 -3.16 z M156.24 40 c-2.76 0 -4.96 -1.8 -4.96 -4.84 l0 -10.36 c0 -3 2.12 -4.8 4.84 -4.8 l6.32 0 c2.72 0 4.84 1.8 4.84 4.8 l0 5.44 c0 0.28 -0.2 0.48 -0.44 0.48 l-12.84 0 c-0.36 0 -0.68 -0.2 -0.88 -0.48 l-0.04 0 l0 4.88 c0 1.76 1.4 3.16 3.16 3.16 l10.28 0 c0.24 0 0.44 0.2 0.44 0.44 l0 1.28 l-10.72 0 z M162.44 21.64 l-6.32 0 c-1.72 0 -3.04 1.44 -3.04 3.2 l0 3.76 c0 0.24 0.16 0.4 0.44 0.44 l11.96 0 l0 -4.2 c0 -1.76 -1.32 -3.2 -3.04 -3.2 z M186.35999999999999 39.56 l0 -29.6 l1.64 0 c0.24 0 0.44 0.2 0.44 0.44 l0 29.6 l-1.64 0 c-0.24 0 -0.44 -0.2 -0.44 -0.44 z M201.32 11.719999999999999 l-9.56 0 l0 -1.32 c0 -0.24 0.2 -0.4 0.44 -0.4 l20.84 0 l0 1.28 c0 0.24 -0.2 0.44 -0.44 0.44 l-9.2 0 l0 27.84 c0 0.24 -0.2 0.44 -0.44 0.44 l-1.64 0 l0 -28.28 z"></path>
                    </g>
                  </svg>
                </v-col>
                <v-col class=" pt-0 d-flex justify-center"><h4 class="text-white">
                  <button @click="scrollDown('Kurs')">Kurse</button>

                </h4></v-col>
                <v-col class=" pt-0 d-flex justify-center"><h4 class="text-white">
                  <button @click=" scrollDown('Website');">Webiste</button>
                </h4></v-col>
                <v-col class=" pt-0 d-flex justify-center"><h4 class="text-white">
                  <button @click=" scrollDown();">Kurse</button>
                </h4></v-col>
                <v-col class=" pt-0 d-flex justify-center"><h4 class="text-white">
                  <button @click=" scrollDown();">Kurse</button>
                </h4></v-col>
              </v-row>
            </div>
          </v-col>
          <v-col cols="1">
            <div v-if="!user" class="d-flex justify-center align-center login-button" @click="$router.push('/login')">
              <h4>Login</h4>
            </div>

            <div v-else-if="$route.path === '/benutzerprofil'" class="d-flex justify-center align-center login-button"
                 @click="logout">
              <h4>
                Logout
              </h4>
            </div>

            <div v-else class="d-flex justify-center align-center login-button"
                 @click="$router.push('/benutzerprofil')">
              <h3>
                {{ initials }}
              </h3>
            </div>

          </v-col>
        </v-row>
      </div>
      <div v-if="mobile">



        <v-row align="center" class=" mx-0" justify="center" style="width: 100%; position:fixed; z-index: 10">
          <v-col class="d-flex justify-center" cols="10">
            <div class="headerMobile">
              <v-row class="justify-center align-center my-0 mx-0" style="width: 100%; height: 100%">
                <v-col class="pt-0 d-flex justify-center" cols="6" @click="$router.push('/')">
                  <svg class="css-1j8o68f" height="69.16933316395921" style="cursor: pointer"
                       viewBox="0 0 369.6551724137931 59.60093654188913" width="320">
                    <defs id="SvgjsDefs7931">
                      <linearGradient id="SvgjsLinearGradient7936">
                        <stop id="SvgjsStop7937" offset="0" stop-color="#8f5e25"></stop>
                        <stop id="SvgjsStop7938" offset="0.5" stop-color="#fbf4a1"></stop>
                        <stop id="SvgjsStop7939" offset="1" stop-color="#8f5e25"></stop>
                      </linearGradient>
                      <linearGradient id="SvgjsLinearGradient7940">
                        <stop id="SvgjsStop7941" offset="0" stop-color="#8f5e25"></stop>
                        <stop id="SvgjsStop7942" offset="0.5" stop-color="#fbf4a1"></stop>
                        <stop id="SvgjsStop7943" offset="1" stop-color="#8f5e25"></stop>
                      </linearGradient>
                    </defs>
                    <g id="SvgjsG7932" featurekey="symbolFeature-0"
                       fill="url(#SvgjsLinearGradient7936)"
                       transform="matrix(0.1922610856189972,0,0,0.1922610856189972,-0.025152198031466292,0)">
                      <defs xmlns="http://www.w3.org/2000/svg"></defs>
                      <g xmlns="http://www.w3.org/2000/svg">
                        <path class="fil0"
                              d="M301 191c-3,31 -17,59 -38,80 -24,24 -58,39 -95,39l0 -11c34,0 65,-14 88,-36 18,-19 31,-44 35,-72l-12 0 17 -30 18 30 -13 0zm-65 43c-19,19 -46,31 -75,33l-9 0c-29,-2 -55,-14 -74,-33 -68,-68 -24,-187 74,-191l9 0c99,4 143,123 75,191zm-31 -41c5,2 9,8 9,14 0,1 0,2 -1,3 8,4 14,9 20,14 17,-18 27,-42 27,-69l0 0 -52 0c0,12 -1,25 -3,38zm5 25c-3,3 -8,5 -12,5l-1 0c-4,12 -9,24 -18,33 18,-5 35,-13 48,-25 -5,-5 -11,-10 -17,-13zm-21 3c-5,-3 -8,-8 -8,-14 0,0 0,-1 0,-1 -6,-2 -13,-3 -20,-3l0 54c14,-3 23,-21 28,-36zm-5 -23c3,-4 8,-7 13,-7 1,-12 2,-24 2,-36l-38 0 0 39c8,1 16,2 23,4zm14 1c-5,0 -8,4 -8,8 0,4 3,7 8,7 4,0 7,-3 7,-7 0,-4 -3,-8 -7,-8zm-82 -69c7,2 13,8 15,16l21 0 0 -36c-11,-1 -22,-3 -32,-6 -2,8 -3,17 -4,26zm14 25c-1,7 -7,13 -15,15 1,11 2,21 4,31 11,-4 22,-6 33,-7l0 -39 -22 0zm-24 15c-8,-1 -14,-7 -16,-15l-36 0 0 0c0,27 10,51 27,69 8,-8 19,-15 30,-20 -3,-11 -4,-22 -5,-34zm-16 -24c1,-9 8,-15 17,-17 1,-10 3,-20 5,-28 -10,-5 -20,-11 -29,-19 -16,17 -27,39 -29,64l36 0zm20 -8c-7,0 -12,5 -12,12 0,7 5,12 12,12 7,0 12,-5 12,-12 0,-7 -5,-12 -12,-12zm86 -57c5,0 9,3 13,6 5,-3 11,-7 15,-10 -13,-11 -28,-19 -45,-23 7,8 13,17 17,27l0 0zm16 14c0,1 0,2 0,3 0,5 -3,11 -8,14 2,10 3,22 4,34l52 0c-2,-25 -13,-47 -30,-64 -3,3 -11,9 -18,13zm-16 19c-5,0 -10,-3 -13,-7l0 0c-7,2 -14,3 -22,3l0 36 38 0c0,-11 -2,-22 -3,-32zm-16 -15c0,-1 0,-1 0,-1 0,-6 3,-11 7,-14l0 0c-5,-13 -14,-29 -26,-32l0 49c7,0 13,-1 19,-2zm16 -9c-4,0 -7,3 -7,8 0,4 3,7 7,7 4,0 8,-3 8,-7 0,-5 -4,-8 -8,-8zm-82 2c4,-13 11,-28 20,-38 -16,4 -32,12 -44,23 7,6 15,11 24,15l0 0zm38 9l0 -49c-15,4 -25,29 -30,43 10,4 20,6 30,6zm-31 108c4,16 15,44 31,48l0 -54c-11,1 -21,3 -31,6zm-34 22c13,12 29,20 47,25 -10,-12 -17,-28 -21,-43 -10,4 -19,10 -26,18zm-33 28c-25,-19 -42,-45 -49,-73 -9,-33 -6,-69 13,-101l9 5c-17,29 -21,63 -12,93 7,26 22,50 44,67l6 -11 18 31 -35 0 6 -11zm65 -248c29,-12 60,-14 88,-6 33,8 63,30 81,62l-9 5c-17,-29 -44,-49 -75,-57 -26,-7 -54,-6 -80,5l6 10 -34 0 17 -30 6 11z"
                              style="fill: url('#SvgjsLinearGradient7936'); fill-rule: nonzero;"></path>
                      </g>
                    </g>
                    <g id="SvgjsG7933" featurekey="nameFeature-0"
                       fill="url(#SvgjsLinearGradient7940)"
                       transform="matrix(1.3753806458648425,0,0,1.3753806458648425,76.64407344080396,-4.478729280143298)">
                      <path
                          d="M8.72 9.96 l13.4 0 l0 1.32 c0 0.24 -0.2 0.44 -0.44 0.44 l-12.96 0 c-2.32 0 -4.2 1.88 -4.2 4.2 l0 8.56 c0.24 -0.24 0.6 -0.4 1 -0.4 l15.72 0 l0 1.32 c0 0.28 -0.24 0.48 -0.48 0.48 l-16.24 0 l0 13.68 c0 0.24 -0.2 0.44 -0.44 0.44 l-1.64 0 l0 -23.76 c0 -3.44 2.8 -6.28 6.28 -6.28 z M35.2 19.96 c2.76 0 4.96 2.28 4.96 5.04 l0 14.56 c0 0.24 -0.2 0.44 -0.44 0.44 l-10.04 0 c-2.76 0 -4.96 -2.24 -4.96 -5 l0 -2.08 c0 -2.8 2.2 -5.04 4.96 -5.04 l8.24 0 c0.24 0 0.4 -0.16 0.44 -0.44 l0 -2.6 c0 -1.76 -1.4 -3.2 -3.16 -3.2 l-8.36 0 c-0.2 0 -0.4 -0.2 -0.4 -0.44 l0 -1.24 l8.76 0 z M29.68 38.24 l8.68 0 l0 -8.84 c-0.08 0.08 -0.2 0.16 -0.32 0.16 l-8.36 0 c-1.76 0 -3.16 1.44 -3.16 3.2 l0 2.32 c0 1.76 1.4 3.16 3.16 3.16 z M58.36 33.04 c0 -0.24 -0.2 -0.52 -0.4 -0.56 l-12.48 -4.48 c-0.6 -0.2 -1.08 -0.88 -1.08 -1.52 l0 -2 c0 -2.76 2.2 -4.48 4.96 -4.48 l9.2 0 l0 1.2 c0 0.24 -0.2 0.44 -0.44 0.44 l-8.76 0 c-1.76 0 -3.16 1.12 -3.16 2.88 l0 1.48 c0 0.24 0.2 0.48 0.4 0.56 l12.4 4.48 c0.6 0.2 1.08 0.88 1.08 1.52 l0 3.04 c0 2.8 -2.24 4.4 -4.96 4.4 l-10.76 0 l0 -1.24 c0 -0.24 0.2 -0.44 0.44 -0.44 l10.32 0 c1.72 0 3.24 -0.96 3.24 -2.68 l0 -2.6 z M73.52000000000001 38.32 c0.2 0 0.4 0.2 0.4 0.44 l0 1.24 l-3.96 0 c-2.76 0 -4.96 -2.24 -4.96 -5.04 l0 -25.04 l1.36 0 c0.24 0 0.44 0.2 0.44 0.44 l0 10.44 c0.04 -0.44 0.56 -0.76 1.12 -0.76 l4.88 0 l0 1.2 c0 0.24 -0.2 0.44 -0.44 0.44 l-5.56 0 l0 13.48 c0 1.72 1.4 3.16 3.16 3.16 l3.56 0 z M77.56 16.08 c0 -3.48 2.8 -6.28 6.28 -6.28 l13.64 0 l0 1.28 c0 0.24 -0.2 0.44 -0.44 0.44 l-13.2 0 c-2.32 0 -4.2 1.88 -4.2 4.2 l0 18.52 c0 2.32 1.88 4.2 4.2 4.2 l8.8 0 c2.32 0 4.2 -1.88 4.2 -4.2 l0 -8.64 l-7.48 0 c-0.24 0 -0.44 -0.2 -0.44 -0.44 l0 -1.32 l9.6 0 c0.24 0 0.4 0.2 0.4 0.44 l0 9.64 c0 3.44 -2.8 6.28 -6.28 6.28 l-8.8 0 c-3.48 0 -6.28 -2.84 -6.28 -6.28 l0 -17.84 z  M103.64000000000001 39.56 l0 -27.92 l1.36 0 c0.24 0 0.44 0.2 0.44 0.44 l0 27.88 l-1.36 0 c-0.24 0 -0.44 -0.16 -0.44 -0.4 z M121.36000000000001 40.28 l-6.04 0 c-2.76 0 -4.96 -2.24 -4.96 -5 l0 -10.52 c0 -2.76 2.2 -5.04 4.96 -5.04 l6.04 0 c2.72 0 4.92 2.28 4.92 5.04 l0 10.52 c0 2.76 -2.2 5 -4.92 5 z M121.36000000000001 21.4 l-6.04 0 c-1.76 0 -3.16 1.44 -3.16 3.2 l0 10.84 c0 1.76 1.4 3.16 3.16 3.16 l6.04 0 c1.72 0 3.12 -1.4 3.12 -3.16 l0 -10.84 c0 -1.76 -1.4 -3.2 -3.12 -3.2 z M141.84 20 c2.76 0 4.96 1.88 4.96 4.88 l0 10.24 c0 3 -2.2 4.88 -4.96 4.88 l-10.28 0 c-0.24 0 -0.44 -0.2 -0.44 -0.44 l0 -29.56 l1.36 0 c0.24 0 0.44 0.2 0.44 0.44 l0 10.32 c0.04 -0.44 0.56 -0.76 1.12 -0.76 l7.8 0 z M145.07999999999998 35.16 l0 -10.32 c0 -1.76 -1.48 -3.2 -3.24 -3.2 l-8.24 0 c-0.36 0.04 -0.64 0.32 -0.68 0.72 l0 3.72 l0 12.24 l8.92 0 c1.76 0 3.24 -1.4 3.24 -3.16 z M156.24 40 c-2.76 0 -4.96 -1.8 -4.96 -4.84 l0 -10.36 c0 -3 2.12 -4.8 4.84 -4.8 l6.32 0 c2.72 0 4.84 1.8 4.84 4.8 l0 5.44 c0 0.28 -0.2 0.48 -0.44 0.48 l-12.84 0 c-0.36 0 -0.68 -0.2 -0.88 -0.48 l-0.04 0 l0 4.88 c0 1.76 1.4 3.16 3.16 3.16 l10.28 0 c0.24 0 0.44 0.2 0.44 0.44 l0 1.28 l-10.72 0 z M162.44 21.64 l-6.32 0 c-1.72 0 -3.04 1.44 -3.04 3.2 l0 3.76 c0 0.24 0.16 0.4 0.44 0.44 l11.96 0 l0 -4.2 c0 -1.76 -1.32 -3.2 -3.04 -3.2 z M186.35999999999999 39.56 l0 -29.6 l1.64 0 c0.24 0 0.44 0.2 0.44 0.44 l0 29.6 l-1.64 0 c-0.24 0 -0.44 -0.2 -0.44 -0.44 z M201.32 11.719999999999999 l-9.56 0 l0 -1.32 c0 -0.24 0.2 -0.4 0.44 -0.4 l20.84 0 l0 1.28 c0 0.24 -0.2 0.44 -0.44 0.44 l-9.2 0 l0 27.84 c0 0.24 -0.2 0.44 -0.44 0.44 l-1.64 0 l0 -28.28 z"></path>
                    </g>
                  </svg>
                </v-col>

                <v-col class="mt-n3" cols="4">
                  <h4 v-if="!user"
                      class="d-flex justify-center align-center text-white"
                      @click="$router.push('/login')">
                    Login
                  </h4>

                  <h4 v-else-if="$route.path === '/benutzerprofil'" class="d-flex justify-center align-center"
                      @click="logout">
                    Logout
                  </h4>

                  <h3 v-else class="d-flex justify-center align-center"
                      @click="$router.push('/benutzerprofil')">
                    {{ initials }}
                  </h3>
                </v-col>
              </v-row>
            </div>
          </v-col>

          <!--                <div v-if="!user" class="d-flex justify-center align-center login-button" @click="$router.push('/login')">
                            <h4>Login</h4>
                          </div>

                  <div v-else-if="$route.path === '/benutzerprofil'" class="d-flex justify-center align-center login-button"
                       @click="logout">
                    <h4>
                      Logout
                    </h4>
                  </div>

                  <div v-else class="d-flex justify-center align-center login-button"
                       @click="$router.push('/benutzerprofil')">
                    <h3>
                      {{ initials }}
                    </h3>
                  </div>-->

        </v-row>
      </div>



      <div style="height: 95vh">
        <v-row class="mx-0 justify-center" style="width: 100%; height: 35vh; margin-top: 180px">
          <v-col class="d-flex  justify-center" cols="5">
            <div :class="wide ? 'nonscale': 'scale' " class="mr-11 pl-0">

              <h1 class="text-white"> Dein IT-Dienstleister <br> des Vertrauens</h1>
              <p class="mt-2 text-white">Du hast Interesse an einem Coding-Kurs <br> oder dein Unternehmen benötigt eine
                <br> Softwarelösung, SEO
                oder eine Website?
                <br> dann Kontaktiere uns oder Trage dich <br> in einen Kurs ein.</p>
              <v-btn class="routebutton mt-5 ">Zur Website</v-btn>
              <v-btn class="routebutton mt-5 ml-16">Zum Kurs</v-btn>
            </div>
          </v-col>
          <v-col cols="7" style=" margin-top: -200px">
            <HexaComponent :class="tabletHorizontal? 'hexagon1':' hexagon2'"></HexaComponent>
          </v-col>
          <v-col cols="1"></v-col>
        </v-row>
        <v-row class="hidden-sm-and-down mx-0" style="width: 100%; margin-top: 150px">
          <v-col :cols="tabletHorizontal ? 8 : 10">
            <h3 class="text-white text-center">Auf unserer Website können Sie in Echtzeit verfolgen,<br>wie Ihr Design
              entsteht und sich entwickelt.
              Erleben Sie hautnah, <br> wie Ihre Webseite gestaltet wird.</h3>
          </v-col>
        </v-row>
      </div>
      <div id="Kurs" style="height: 15vh">

      </div>
      <div  style="height: 90vh">
        <v-row class="mx-0 " style="padding-left: 110px; width: 100%;">
          <v-col cols="6" style="max-width: 350px">
            <v-card class="cart-curs">
              <v-card-title class="text-center">
             <b>
                Einsteiger
             </b>
              </v-card-title>
              <v-card-subtitle class="text-center">
                <b>
                Java oder Webentwicklung
                </b>
              </v-card-subtitle>
              <v-row class="mt-2 justify-center">
                <v-col>
                  <p class="ml-7">- Java</p>
                  <p class="ml-7">- HTML</p>
                  <p class="ml-7">- CSS</p>
                  <p class="ml-7">- Javascript</p>
                </v-col>
                <v-col>
                  <h2>4 Stunden <br></h2>
                  <h2  class="text-center mt-7" style="  text-shadow: 0px 0px  3px black; text-stroke: 1px black; color: #dabe6e">  160 Euro</h2>
                </v-col>
              </v-row>
            </v-card>
          </v-col>
          <v-col cols="8">
            <v-card class="cart-curs-green cart-curs">
              <v-card-title class="text-center">
                <b>
                  Fortgeschritten
                </b>
              </v-card-title>
              <v-card-subtitle class="text-center">
                <b>
                  Java oder Webentwicklung
                </b>
              </v-card-subtitle>
              <v-row class="mt-2 justify-center">
                <v-col>
                  <p class="ml-7">- Java</p>
                  <p class="ml-7">- HTML</p>
                  <p class="ml-7">- CSS</p>
                  <p class="ml-7">- Javascript</p>
                </v-col>
                <v-col>
                  <h2>8 Stunden <br></h2>
                  <h2  class="text-center mt-7" style="  text-shadow: 0px 0px  3px black; text-stroke: 1px black; color: #dabe6e">  300 Euro</h2>
                </v-col>
              </v-row>
            </v-card>
          </v-col>
          <v-col cols="5" style="max-width: 350px">
            <v-card class="cart-curs">
              <v-card-title class="text-center">
                <b>
                  Einsteiger Framework
                </b>
              </v-card-title>
              <v-card-subtitle class="text-center">
                <b>
                  Java oder Webentwicklung
                </b>
              </v-card-subtitle>
              <v-row class="mt-2 justify-center">
                <v-col>
                  <p class="ml-7">- Springboot</p>
                  <p class="ml-7">- Vue.js</p>
                  <p class="ml-7">- Vuetify</p>
                  <p class="ml-7">- Angular</p>
                </v-col>
                <v-col>
                  <h2>4 Stunden <br></h2>
                  <h2  class="text-center mt-7" style="  text-shadow: 0px 0px  3px black; text-stroke: 1px black; color: #dabe6e">  200 Euro</h2>
                </v-col>
              </v-row>

            </v-card>
          </v-col>
          <v-col cols="8">
            <v-card class="cart-curs-green cart-curs">
              <v-card-title class=" text-center">
                <b >
                  Fortgeschritten Framework
                </b>
              </v-card-title>
              <v-card-subtitle class="text-center">
                <b>
                  Java oder Webentwicklung
                </b>
              </v-card-subtitle>
              <v-row class="mt-2 justify-center">
                <v-col>
                  <p class="ml-7">- Springboot</p>
                  <p class="ml-7">- Vue.js</p>
                  <p class="ml-7">- Vuetify</p>
                  <p class="ml-7">- Angular</p>
                </v-col>
                <v-col>
                  <h2>8 Stunden <br></h2>
                  <h2  class=" text-center mt-7" style="  text-shadow: 0px 0px  3px black; text-stroke: 1px black; color: #dabe6e">  350 Euro</h2>
                </v-col>
              </v-row>
            </v-card>
            <div class="pt-2 " style="background-color: black; height: 35px; width: 340px ;margin-left: 90px; border-radius: 5px;">
              <p class="text-center " style="color: #dabe6e">Best Price</p>
            </div>
          </v-col>
        </v-row>
        <div style="margin-left: 185px">
          <h1 class="mt-16 text-white">Verschiedene Technologien mit <br>großem Lernerfolg.</h1>
          <p class="mt-4 text-white">Melde dich zu einem Kurs an und wir vereinbaren schnell einen zeitnahen Termin.</p>
          <p class="mt-4 text-white">Wir nehmen uns die Zeit, ermitteln deinen Kenntnisstand und setzen da an wo du
            stehst.</p>
        </div>
      </div>
      <div style="height: 60vh">
        <v-row class="mx-0" justify="center" style="width: 100%">
          <v-col :cols="tabletHorizontal ? 5:6 ">
            <v-card class="websitebox">
              <div v-if="websiteformular" class="websitebox-innerdiv">
                <v-row class="ma-0" style="width: 100%">
                  <h3 class=" my-4 text-white text-center" style="width: 100vh">Füllen SIe das Formular aus und wir
                    melden uns bei zeitnah bei Ihnen.</h3>
                  <v-col cols="6">
                    <v-text-field base-color="white"
                                  class="text-white"
                                  color="white"
                                  label="Name"
                                  persistent-hint
                                  required
                                  variant="outlined">

                    </v-text-field>
                  </v-col>
                  <v-col cols="6">
                    <v-text-field base-color="white"
                                  class="text-white"
                                  color="white"
                                  label="Firmenname"
                                  persistent-hint
                                  required
                                  variant="outlined">

                    </v-text-field>
                  </v-col>
                  <v-col cols="6">
                    <v-text-field base-color="white"
                                  class="text-white mt-n5"
                                  color="white"
                                  label="Telefonnummer"
                                  persistent-hint
                                  required
                                  variant="outlined">

                    </v-text-field>
                  </v-col>
                  <v-col cols="6">
                    <v-text-field base-color="white"
                                  class="text-white mt-n5"
                                  color="white"
                                  label="Email"
                                  persistent-hint
                                  required
                                  variant="outlined">

                    </v-text-field>
                  </v-col>
                  <v-col class="mt-n5" cols="12">
                    <v-radio-group inline v-model="auswahl">
                      <v-row>
                        <v-col>
                      <v-radio  style="color: white" label="Es besteht bereits eine Website"  value="Es besteht bereits eine Website"></v-radio>

                        </v-col>
                        <v-col>

                          <v-radio style="color: white"  label="Es besteht keine Website"  value="Es besteht keine Website"></v-radio>
                        </v-col>
                      </v-row>
                    </v-radio-group>
                  </v-col>

                  <v-col class=" d-flex justify-center" cols="12">
                    <v-btn class="routebutton">
                      Absenden
                    </v-btn>
                  </v-col>
                </v-row>
              </div>
            </v-card>
          </v-col>
          <v-col class="d-flex justify-center align-center" cols="5">
            <div class="ml-12 mt-n1" style="max-width: 80%">

              <h1 v-if="tabletHorizontal" class="mb-6 text-white">Ihre Webseite, Ihr Erfolg: <br> Maßgeschneiderte Designs von Expertenhand
              </h1>
              <h3 v-if="!tabletHorizontal" class="mb-n6 text-white">Ihre Webseite, Ihr Erfolg: <br> Maßgeschneiderte Designs von Expertenhand
              </h3>
              <p class="mt-10 text-white"> FastGlobe IT - Ihr Partner für erstklassige Webseiten. Wir verwandeln Ideen
                in ansprechende Online-Präsenzen, die Ihre Marke
                zum Leuchten bringen.
                Unser Team aus erfahrenen Designern und Entwicklern steht bereit, um Ihre Visionen Wirklichkeit werden
                zu lassen.</p>

              <h4 class="mt-12 " style="color:#CBB26A;">Jetzt kostenlose Beratung sichern</h4>
              <v-btn class="mt-8 routebutton" @click="websiteformular = !websiteformular">Beratung</v-btn>
            </div>
          </v-col>
        </v-row>
      </div>

      <div style="height: 60vh">
        <v-row class="mx-0" justify="center" style="width: 100%">
          <v-col class="d-flex align-center" cols="5">
            <div class=" mt-n1" style="max-width: 60%">

              <h1 class="text-white">Warum wir?
              </h1>
              <p class="mt-10 text-white">Unsere Stärke liegt in maßgeschneidertem Webdesign, das Ästhetik und Funktionalität vereint. Wir optimieren für alle Geräte, integrieren modernste Technologien und sorgen für Sichtbarkeit durch SEO.</p>

            </div>
          </v-col>
          <v-col :cols="tabletHorizontal ? 5:6 ">
            <v-card class="websitebox1">
            </v-card>
          </v-col>

        </v-row>
      </div>
      <div style="height: 50vh">
        <v-row class="mx-0" justify="center" style="width: 100%">
          <v-col :cols="tabletHorizontal ? 5:6 ">
            <v-card class="websitebox3">
            </v-card>
          </v-col>
          <v-col class="d-flex justify-center align-center" cols="5">
            <div class="ml-12 mt-n1" style="max-width: 80%">

              <h1 v-if="tabletHorizontal" class="mb-6 text-white"> Live-Entwicklungs-Tracker: <br> Sehen Sie Ihre Webseite wachsen!

              </h1>
              <h3 v-if="!tabletHorizontal" class="mb-n6 text-white">"Live-Entwicklungs-Tracker: <br> Sehen Sie Ihre Webseite wachsen!

              </h3>
              <p class="mt-10 text-white"> Verpassen Sie keine Entwicklungsschritte Ihrer Webseite! Mit unserem Live-Entwicklungs-Tracker halten wir Sie kontinuierlich auf dem Laufenden. Tauchen Sie in den Fortschritt ein, während Ihre Webseite Form annimmt – in einem beeindruckenden Zusammenspiel aus Kreativität und Technologie.</p>
            </div>
          </v-col>
        </v-row>
      </div>
      <div style="height: 60vh">
        <v-row class="mx-0" justify="center" style="width: 100%">
          <v-col class="d-flex align-center" style="padding-top: 150px" cols="5">
            <div class=" mt-n1" style=" max-width: 75%">


              <h1 v-if="tabletHorizontal" class="mb-6 text-white"> Unsere vielfältigen Lösungen für Ihren digitalen Erfolg:



              </h1>
              <h3 v-if="!tabletHorizontal" class="mb-n6 text-white">Unsere vielfältigen Lösungen für Ihren digitalen Erfolg:



              </h3>
              <p class="mt-10 text-white">
               - Kreative Webanwendungen <br>
               - Maßgeschneiderte Softwarelösungen <br>
               - Ansprechende Webseiten mit SEO-Optimierung <br>
               - Inspirierende Kurse in HTML, CSS, Java, Vue.Js und Spring Boot
              </p>

            </div>
          </v-col>
          <v-col :cols="tabletHorizontal ? 5:6 ">
            <v-card class="websitebox4">
            </v-card>
          </v-col>

        </v-row>
      </div>
      <div class="pt-6" style="height: 8vh; width: 100vw;  background-color: black">
        <v-row class="mx-0  justify-center" style="width: 100%">
          <v-col @click="$router.push('/impressum')" style="cursor: pointer" cols="1">
            <h3 class="text-center text-white">Impressum</h3>
          </v-col>
          <v-divider class="border-opacity-50" vertical="true" color="white"></v-divider>
          <v-col @click="$router.push('/datenschutz')" style="cursor: pointer" cols="1">
            <h3 class="text-center text-white">Datenschutz</h3>
          </v-col>
          <v-divider class="border-opacity-50" vertical="true" color="white"></v-divider>
          <v-col style="cursor: pointer" cols="1">
            <h3 class="text-center text-white">Kontakt</h3>
          </v-col>
        </v-row>
      </div>

    </div>
  </div>
</template>

<script>
import {mapGetters} from "vuex";
import axios from "axios";
import HexaComponent from "@/components/HexaComponent";

export default {
  name: "HomeView",
  components: {
     HexaComponent

  },

  data() {
    return {
      auswahl:',ajenfaefkabk',
      websiteformular: false,
      mobile: false,
      tabletHorizontal: false,
      wide: false,

    }
  },
  computed: {
    initials: function () {
      try {
        const splitted = this.$store.state.user.username.split(' ')
        try {
          return splitted[0].charAt(0) + splitted[1].charAt(0)
        } catch {
          return splitted[0].charAt(0)
        }
      } catch {
        return null
      }

    },

    ...mapGetters(['user'])
  },
  mounted() {
    this.getUser()
    this.checkMobileView()
  },
  methods: {
    scrollDown(id) {
      const element = document.getElementById(id);
      if (element) {



        element.scrollIntoView({
          behavior: 'smooth',
          block: 'start',
          inline: 'nearest'
        });


      }

    },

    checkMobileView() {
      if (window.innerWidth >= 1800) {
        this.wide = true;
        this.$store.state.wide = true;
      } else {
        this.wide = false;
        this.$store.state.wide = false;

      }
      if (window.innerWidth <= 850) {
        this.mobile = true;
        this.$store.state.mobile = true;
      } else {
        this.mobile = false;
        this.$store.state.mobile = false;

      }
      if (window.innerWidth <= 1300) {
        this.tabletHorizontal = false
        this.$store.state.tablet = false
      } else {
        this.tabletHorizontal = true
        this.$store.state.tablet = true
      }
    },
    logout() {
      localStorage.removeItem('token');
      this.$store.dispatch('user', null);
      location.reload(); // Soll woanders weitergeleitet werden?
    },
    async getUser() {
      try {
        const user = await axios.get('/user')
        this.$store.dispatch('user', user.data)
      } catch (error) {
        console.log(error)
      }
    },
  }

}
</script>

<style scoped>
.header {
  background: linear-gradient(to left, #333333, #000000);
  height: 70px;
  width: 100%;
  border-radius: 60px;
  box-shadow: 1px 1px 3px #b2afaf;
}

.headerMobile {
  background: linear-gradient(to left, #333333, #000000);
  height: 70px;
  width: 120%;
  border-radius: 60px;
  box-shadow: 1px 1px 3px #b2afaf;
}


.login-button {
  background-color: #333333;
  border-radius: 200px;
  height: 70px;
  width: 100%;
  box-shadow: 1px 1px 3px #b2afaf;
  color: #CBB26A;
}

.login-button:hover {
  border-radius: 200px;
  height: 70px;
  width: 100%;
  background-color: #333333;
  box-shadow: 1px 1px 3px #b2afaf;
  cursor: pointer;
  color: #CBB26A;

}

.login-button:active {
  border-radius: 200px;
  height: 70px;
  width: 100%;
  background-color: #262424;
  box-shadow: 0 0 0px black;
  cursor: pointer;
  color: #CBB26A;
}
.websitebox-innerdiv {
  height: 100%;
  width: 100%;
  background-color: rgba(2, 2, 2, 0.9);
  backdrop-filter: blur(1px);
}

.websitebox {
  width: 100%;
  height: 50vh;
  background-color: #7c7b7b;
  box-shadow: 5px 5px 11px black;
  transition: ease-in-out 0.4s;
  border-left: 2px solid #CBB26A;
  border-top: 2px solid #CBB26A;
  background-image: url("../assets/websitebackground.jpg");
  background-size: cover;
}
.websitebox1 {
  width: 100%;
  height: 50vh;
  transition: ease-in-out 0.4s;
background-color: transparent;
  box-shadow: 0px 0px 0px transparent;
  background-image: url("../assets/SEO.png");
  background-size: cover;
}
.websitebox3 {
  width: 770px;
  margin-left: -50px;
  height: 440px;
  transition: ease-in-out 0.4s;
  background-color: transparent;
  box-shadow: 0px 0px 0px transparent;
  background-image: url("../assets/vorschau-removebg-preview.png");
  background-size: cover;
}
.websitebox4 {
  width: 770px;
  margin-left: -50px;
  height: 440px;
  transition: ease-in-out 0.4s;
  background-color: transparent;
  box-shadow: 0px 0px 0px transparent;
  background-image: url("../assets/Mac.png");
  background-size: cover;
}

.background {
  height: 450vh;
  width: 100vw;
  background-image: url("../assets/Hintergrund.png");
  background-size: cover;
}

.img {
  background-image: url("../assets/background.jpg");
  background-size: cover;
}

.routebutton {
  width: 130px;
  background-color: #014285;
  color: white;
}

.laptop {
  height: 300px;
  width: 480px;
  background-image: url("../assets/Monitor.png");
  background-size: cover;
}

.cart-curs {
  margin-left: 90px;
  height: 200px;
  width: 340px;
  background-color: rgba(255, 255, 255, 0.55);
  backdrop-filter: blur(4px) !important;
  border-left: rgba(255, 255, 255, 0.76) 1px solid !important;
  border-top: rgba(255, 255, 255, 0.88) 1px solid !important;
  box-shadow: 3px 3px 5px black;
  transition: ease-in-out 0.4s;
}
.cart-curs-green{
  background-color: rgba(83, 211, 40, 0.55);

}
.cart-curs-green:hover{
  background-color: rgba(83, 211, 40, 0.55) !important;

}
.cart-curs:hover {
  cursor: pointer;
  margin-left: 60px;
  height: 200px;
  width: 340px;
  background-color: rgba(255, 255, 255, 0.55);
  backdrop-filter: blur(4px) !important;
  border-left: rgba(255, 255, 255, 0.76) 1px solid !important;
  border-top: rgba(255, 255, 255, 0.88) 1px solid !important;
  box-shadow: 3px 3px 5px black;
  transform: scale(1.16);
}

.hexagon1 {
  transform: scale(0.75);
  margin-left: -40px;
  margin-top: -30px;
}

.hexagon2 {
  margin-left: -140px;
  margin-top: -70px;
  transform: scale(0.6);
}
.scale{
  transform: scale(1.4);
}
.nonscale{
  transform: scale(1.2);

}

</style>
