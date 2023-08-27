export default {
  namespaced: true,

  state () {
    return {
      // 全部内容
      mainMassage: [{ id: 1, main: '第一' }, { id: 2, main: '第二' }, { id: 3, main: '第三' }]
    }
  },
  mutations: {

  },
  actions: {

  },
  getters: {
    getMainMassage (state) {
      return state.mainMassage
    }
  }
}
