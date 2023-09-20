import {createStore} from 'vuex'

export default createStore({
    state: {
        user: false,
        contentDelta: '',
        scrollwert: 0,
        website: {
            todos: [
                {name: 'Handyansicht', isFinished: false},
                {name: 'Benutzer anlegen', isFinished: true},
                {name: 'Aktuelles-Ansicht', isFinished: false},
                {name: 'Beitrag anlegen, bearbeiten & Bild hinzufügen', isFinished: false},
                {name: 'Beitrag anlegen', isFinished: false},
                {name: 'Responsive Design anpassen', isFinished: true},
                {name: 'Datenbank-Schema entwerfen', isFinished: false},
                {name: 'API für Benutzerverwaltung entwickeln', isFinished: true},
                {name: 'Frontend UI-Elemente stylen', isFinished: true},
                {name: 'Beitragsvorschau implementieren', isFinished: false},
                {name: 'SEO-Optimierung durchführen', isFinished: true},
                {name: 'Integration von Social-Media-Sharing', isFinished: false},
                {name: 'Benutzerdokumentation schreiben', isFinished: true},
                {name: 'Einheitstests für Backend schreiben', isFinished: true},
                {name: 'Lasttests durchführen', isFinished: false}
            ]
        }
    },

    getters: {
        user: (state) => {
            return state.user
        },
        website: (state) => {
            return state.website
        },
        contentDelta: (state) => {
            return state.contentDelta
        },
    },
    mutations: {
        user(state, user) {
            state.user = user
        },
    },
    actions: {

        user(context, user) {
            context.commit('user', user)
        },
    },
    modules: {}
})
