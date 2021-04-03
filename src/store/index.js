import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    weapons:[
      {
        name: 'AK-47',
        description: 'Mata geral',
        price: 60.99,
        id: 0
      },
      {
        name: 'AGM-1',
        description: 'Mata geral',
        price: 20.99,
        id: 1
      },
      {
        name: 'AWC G2',
        description: 'Mata geral',
        price: 10.99,
        id: 2
      },
      {
        name: 'SKS',
        description: 'Mata geral',
        price: 62.99,
        id: 3
      },
      {
        name: 'SCAR-L',
        description: 'Mata geral',
        price: 90.99,
        id: 4
      },
      {
        name: 'Ruger XGI',
        description: 'Mata geral',
        price: 70.99,
        id: 5
      },
    ],
    loggedIn: false,
    user:{},
    cart: []
  },
  mutations: {
    setUSer(state, payload){
      state.user = payload
    },
    logout(state){
      state.user = {}
      state.loggedIn = false
      localStorage.removeItem('token')
    }
  },
  actions: {
  },
  getters: {
    gerUserData(state){
      return state.user
    },
  }
})
