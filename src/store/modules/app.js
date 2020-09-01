const state = {
  isCollapse: localStorage.getItem('isCollapse')&&localStorage.getItem('isCollapse')=='true' || false,
  navBar:{
    backgroundColor: '#ffffff',
    textColor: '#303133',
    activeTextColor: '#409EFF'
  },
  bgColor:'#ffffff',
  

}
const getters = {
 isCollapse:(state)=> state.isCollapse,
 navBar:(state)=> state.navBar,
 bgColor:(state)=>state.bgColor,
}
const mutations = {
  setCollapseState(state,value) {
    
    // if(value) 
    localStorage.setItem('isCollapse',value)
    state.isCollapse = value
  },
  setNavBar(state,{type,color}) {
    switch(type){
      case 'backgroundColor': state.navBar.backgroundColor = color;break;
      case 'textColor': state.navBar.textColor = color;console.log('stete.textColor',state.textColor);break;
      case 'activeTextColor': state.navBar.activeTextColor = color;break;
      default:break;
    } 
  },
  setBgColor(state,color){
    state.bgColor = color
  }
}
const actions = {
  triggerState({commit},value) {
    commit('setCollapseState',value)
  },
  setNavBar({commit},preload){
    commit('setNavBar',preload)
  },
  setBgColor({commit},color){
    console.log('actions')
    commit('setBgColor',color)
  }
}

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
}