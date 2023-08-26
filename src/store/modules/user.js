export default {
  namespaced: true,
  state () {
    return {
      // 个人权证
      userInfo: {
        token: '',
        uid: ''
      }
    }
  },
  mutations: {
    setUserInfo (state, obj) {
      state.userInfo = obj
    }
  },
  actions: {

  },
  getters: {

  }
}
