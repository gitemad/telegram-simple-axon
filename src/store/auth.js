import axios from 'axios'

export default {
    namespaced: true,
    state: {
        user: null
    },
    getters: {
        userInfo(state) {
            return state.user
        }
    },
    mutations: {
        SET_USER(state, user) {
            state.user = user
        }
    },
    actions: {
        async attempt({ commit }) {
            try {
                let url = '/3c1f52ae-3bf3-4bc7-8b6a-46c3b59d7b4d'
                let response = await axios.get(url)
                commit('SET_USER', response.data)
            } catch (error) {
                if (error.response.status == 401) {
                    commit('SET_USER', null)
                }
            }
        },
    },
}