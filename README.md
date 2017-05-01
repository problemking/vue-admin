# vue-admin

> 基于elementUI的后台管理

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```
## 默认的用户名：张宇
## 默认的密码：123

data() {
      return {
        pathName:this.$route.name
      }
  },
watch: {
    '$route': function(){
      this.pathName = this.$route.name;
 }
获取路由的name属性

在vue2.0中废除了使用事件的方式进行通信，所以在小项目中我们可以使用Event Bus，其余最好都使用vuex，本文我们使用Vuex来实现数据通信

mutation-types 记录我们所有的事件名

mutations 注册我们各种数据变化的方法

actions 则可以编写异步的逻辑或者是一些逻辑，再去commit我们的事件

For detailed explanation on how things work, checkout the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).
