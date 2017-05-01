import Vue from 'vue'
import Router from 'vue-router'
import Main from '../components/common/main.vue'
import Welcome from '../components/common/welcome.vue'
import Login from '../components/Login/login.vue'
import TestManagement from '../components/testManagement/TestManagement.vue'
import  UserGroup from '../components/userGroup/UserGroup.vue'
import  UserList from '../components/user/UserList.vue'
import  FeedBack from '../components/feedback/Feedback.vue'
import  Echarts from '../components/echart/echarts.vue'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component:Login
    },
    {
      path: '/main',
      component:Main,
      children:[
        {
          name:'首页',
          path:'',
          component:Welcome
        },
        {
          name: '测试管理',
          path:'testManagement',
          component: TestManagement
        },
        {
          name: '用户分群管理',
          path: 'userGroup',
          component:UserGroup
        },
        {
          name: '用户管理',
          path: 'userList',
          component: UserList
        },
        {
          name: '意见反馈',
          path: 'feedBack',
          component: FeedBack
        },
        {
          name: '图表列表',
          path: 'echarts',
          component: Echarts
        }
      ]
    }
  ]
})
