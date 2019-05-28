import Vue from 'vue'
import Vuex from 'Vuex'
import api from './modules/api'

Vue.use(Vuex);

const state = {

}

const modules = {
  api: api
}

const mutations = {

}

const actions = {

}

const store = new Vuex.Store({
  state,
  modules,
  mutations,
  actions,
})

export default store;