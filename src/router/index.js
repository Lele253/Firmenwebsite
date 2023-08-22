import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ImpressumView from "@/views/ImpressumView";
import DatenschutzView from "@/views/DatenschutzView";
import LoginView from "@/views/LoginView";
import BenutzerProfilView from "@/views/BenutzerProfilView";

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/impressum',
    name: 'impressum',
    component: ImpressumView
  },
  {
    path: '/datenschutz',
    name: 'datenschutz',
    component: DatenschutzView
  },
  {
    path: '/login',
    name: 'login',
    component: LoginView
  },
  {
    path: '/benutzerprofil',
    name: 'profile',
    component: BenutzerProfilView
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
