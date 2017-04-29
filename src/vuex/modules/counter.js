/** * Created by admin on 2017/4/29. */import * as types from './../mutaionTypes';const state = {  counter: 0};const actions = {  add ({commit}) {    commit(types.ADD);  },  minus ({commit}) {    commit(types.MINUS);  }};const mutations = {  [types.ADD] (state) {    state.counter++;  },  [types.MINUS] (state) {    state.counter--;  }};const getters = {  counter: state => state.counter,  addToAdd: state => state.counter + 2};export default {  actions,  mutations,  state,  getters};