import {createStore} from 'vuex'

export default createStore({
    state: {
        user: false,
        contentDelta: '',
        scrollwert: 0,
        handy: false
    },

    getters: {
        user: (state) => {
            return state.user
        },handy: (state) => {
            return state.handy
        },

        contentDelta: (state) => {
            return state.contentDelta
        },
    },
    mutations: {
        user(state, user) {
            state.user = user
        },handy(state, handy) {
            state.handy = handy
        },
    },
    actions: {

        user(context, user) {
            context.commit('user', user)
        },handy(context, handy) {
            context.commit('handy', handy)
        },
    },
    modules: {}
})
