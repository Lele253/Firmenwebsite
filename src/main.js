import {createApp} from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import {loadFonts} from './plugins/webfontloader'
import router from './router'
import store from './store'
import './axios'
import html2pdf from 'html2pdf.js'
import '@vueup/vue-quill/dist/vue-quill.snow.css';


loadFonts()
createApp(App).use(store).use(router).use(html2pdf)
    .use(vuetify)
    .mount('#app')