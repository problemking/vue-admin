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
For detailed explanation on how things work, checkout the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).
