import Vuex from 'vuex'

const store = new Vuex.Store({

  state: {
    counter: 0,
    authenticated: false,
    current_user: [],
    token: null
  },

  mutations: {
    // Operações do token
    isAuthenticated (state, payload) {
      state.authenticated = payload
    },
    setToken (state, token) {
      localStorage.setItem('token', token)
      state.token = localStorage.getItem('token')
    },
    destroyToken (state) {
      localStorage.removeItem('token')
      state.authenticated = false
      state.token = null
    },

    // operações para o usuário
    setCurrentUser (state, user) {
      state.current_user = user
    }
  }

})

export default store
