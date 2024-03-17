import { createRouter, createWebHistory } from 'vue-router'
import ImpressumView from "@/views/ImpressumView";
import DatenschutzView from "@/views/DatenschutzView";
import LoginView from "@/views/LoginView";
import HomeView from "@/views/HomeView";
import RechnungenView from "@/views/RechnungenView.vue";
import SkillsView from "@/views/SkillsView.vue";
import WebsiteView from "@/views/WebsiteView.vue";
import WebappView from "@/views/WebappView.vue";
import EntwicklungView from "@/views/EntwicklungView.vue";

const routes = [

  {
    path: '/impressum',
    name: 'impressum',
    component: ImpressumView
  },
  {
    path: '/webapp',
    name: 'Webapp',
    component: WebappView
  }, {
    path: '/entwicklung',
    name: 'Entwicklung',
    component: EntwicklungView
  },
  {
    path: '/',
    name: 'Homeview',
    component: HomeView
  },
  {
    path: '/website',
    name: 'Website',
    component: WebsiteView
  },
  {
    path: '/skills',
    name: 'SkillsView',
    component: SkillsView
  },
  {
    path: '/datenschutz',
    name: 'datenschutz',
    component: DatenschutzView
  },{
    path: '/rechnung',
    name: 'rechnung',
    component: RechnungenView
  },
  {
    path: '/login',
    name: 'login',
    component: LoginView
  },



  {
    path: '/:catchAll(.*)', component: HomeView
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  scrollBehavior: function (to) {
    if (to.hash) {
      return {
        el: to.hash,
        behavior: 'smooth',
      }
    } else {
      return {el: document.getElementById('home'), behavior: 'smooth'}
    }
  }
})

export default router
