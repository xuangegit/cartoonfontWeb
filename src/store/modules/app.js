const state = {
  isCollapse: localStorage.getItem('isCollapse') || false
}
const getters = {
 isCollapse:(state)=> state.isCollapse 
}
const mutations = {
  setCollapseState(state,value) {
    state.isCollapse = value
    // if(value) 
    localStorage.setItem('isCollapse',value)
  } 
}
const actions = {
  triggerState({commit},value) {
    commit('setCollapseState',value)
  }
}

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
}