/** * Created by admin on 2017/4/29. */import * as types from './../mutaionTypes';const state = {  count: 0};const actions = {  increment ({commit}) {    commit(types.ADDDUBLE);  },  decrement ({commit}) {    commit(types.MINUSDUBLE);  }};const mutations = {  [types.ADDDUBLE] (state) {    state.count = state.count + 3;  },  [types.MINUSDUBLE] (state) {    state.count = state.count - 3;  }};export default {  state,  actions,  mutations};