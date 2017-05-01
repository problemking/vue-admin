<template>
 <div class="hello">
        <p class="welcome">vue.js2.0 和 element 搭建的一个后台管理界面</P>
        <el-card class="box-card">
        <div class="headimg">
            <img :src="imgsrc">
        </div>
        <ul class="font">
            <li><i class="fa fa-thumbs-o-up"></i> vuejs2.0：渐进式JavaScript框架，易用、灵活、高效，似乎任何规模的应用都适用。</li>
            <li><i class="fa fa-thumbs-o-up"></i> element：基于vuejs2.0的ui组件库。</li>
            <li><i class="fa fa-thumbs-o-up"></i> vue-router：一般单页面应用spa都要用到的前端路由</li>
            <li><i class="fa fa-thumbs-o-up"></i> vuex：Vuex 是一个专为 Vue.js 应用程序开发的状态管理模式</li>
            <li><i class="fa fa fa-envelope-open"></i> 仓库地址：<a href="https://github.com/problemking">https://github.com/problemking</a></li>
            <li><i class="fa fa-address-book-o"> 请联系我QQ：1075242836</i></li>
        </ul>
        </el-card>
 </div>
</template>

<script>
export default {
  data () {
    return {
      imgsrc:"../static/commonimg/head.jpg"
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .welcome{
        color:red;
        font-size:30px;
        text-align:center;
        box-sizing:content-box;
    }
    .headimg{
        float:left;
    }
    .font{
        text-align:left;
        margin-left:200px;
        list-style:none
    }
    .font li:nth-child(5){
        margin-top:10px;
        padding-top:5px;
        border-top:1px solid #bbb
    }
    .font li{
        margin-top:10px;
    }
</style>
