import Vue from "vue"
import Vuex from "vuex"
import {getters} from "./getters"
import {mutations} from "./mutations"
import {actions} from './actions'
import channel from './modules/channel'
import group from './modules/group'
import token from './modules/token'
import refreshToken from './modules/refreshToken'

Vue.use(Vuex)

const state = {
  roomid: 0,
  userInfo: '',
  openId: '',
  scanAddress: '',
  score: 0
}

const modules = { 
  channel,
  group,
  token,
  refreshToken
};

var store = new Vuex.Store({
  state,
  getters,
  mutations,
  modules,
  actions
})
export default store
