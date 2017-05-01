import * as types from './mutation-types'

export default {
    isLogin({ commit }, user) {
    commit(types.ADD_LOGIN, user)
  },
}
  