import * as types from './mutation-types'

export default{
 [types.ADD_LOGIN](state,user){
    state.user = user
 }
}