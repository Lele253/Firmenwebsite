import {createRouter, createWebHistory} from 'vue-router'
import ImpressumView from "@/views/ImpressumView";
import DatenschutzView from "@/views/DatenschutzView";
import LoginView from "@/views/LoginView";
import HomeView from "@/views/HomeView";
import RechnungenView from "@/views/RechnungenView.vue";
import SkillsView from "@/views/SkillsView.vue";
import WebsiteView from "@/views/WebsiteView.vue";
import WebappView from "@/views/WebappView.vue";
import EntwicklungView from "@/views/EntwicklungView.vue";
import ServiceView from "@/views/ServiceView.vue";

const routes = [

    {
        path: '/impressum',
        name: 'impressum',
        component: ImpressumView
    }, {
        path: '/service',
        name: 'Service',
        component: ServiceView
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
    }, {
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
    // Nutze process.env.BASE_URL oder '/' als Fallback, falls die Umgebungsvariable nicht gesetzt ist
    history: createWebHistory(process.env.BASE_URL || '/'),
    routes,

    // Konfiguriere das Scrollverhalten
    scrollBehavior(to, from, savedPosition) {
        // Wenn eine gespeicherte Position existiert (z.B. durch Zurücknavigieren), nutze diese Position
        if (savedPosition) {
            return savedPosition;
        }
        // Falls eine Ziel-Hash (Anker) im Ziel-Pfad vorhanden ist
        if (to.hash) {
            return {
                el: to.hash,
                behavior: 'smooth',
            };
        }
        // Standardverhalten: Scrolle zu einem Element mit der ID 'home'
        return {
            el: document.getElementById('home'),
            behavior: 'smooth'
        };
    }
});


export default router
