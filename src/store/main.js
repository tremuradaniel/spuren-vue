import Vue from 'vue'
import Vuex from 'vuex'
import auth from './auth'
import createPersistedState from 'vuex-persistedstate'
import * as Cookies from 'js-cookie'

Vue.use(Vuex)

export default new Vuex.Store({
  state:{
    isLoading: false
  },
  getters:{
    getLoading(state){
      return state.isLoading
    }
  },
  mutations:{
    setLoading(state, newLoadingState){
      state.isLoading = newLoadingState
    }
  },
  actions:{
  },
  modules:{
    auth
  },
  plugins: [createPersistedState({
    storage: {
      getItem: key => Cookies.get(key),
      setItem: (key, value) => Cookies.set(key, value, { expires: 3, secure: true }),
      removeItem: key => Cookies.remove(key)
    }
  })],
})