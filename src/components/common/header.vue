<template>
  <div class="header-wraper">
    <el-menu :default-active="activeIndex" theme="dark" class="el-menu-demo" mode="horizontal" @select="handleSelect">
        <li class="title">
            <i class="el-icon-menu"></i>
            <span class="font">后台管理系统</span>
        </li>
        <li class="user">
            <i class="fa fa-user-circle fa-2x ft"></i>欢迎{{user.name}}
        </li>
        <li class="quit">
            <i class="fa fa-window-close fa-1x"></i>
            <span >关闭系统</span>
        </li>
        <li class="set">
            <i class="fa  fa-cog fa-1x"></i>
            <span >系统设置</span>
        </li>
    </el-menu>
  </div>
</template>

<script>
export default {
  name: 'hello',
  data () {
    return {
      activeIndex:'1'
    }
  },
  methods: {
      handleSelect(key, keyPath) {
        console.log(key, keyPath);
      }
  },
  computed: {
			user(){
				 //因为在main.js中已经全局注册了store，所以这里直接用this.$直接使用。
				return this.$store.state.user
			}
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
.header-wraper .title {
    float: left;
    margin-left: 20px;
    margin-top: 5px;
    color:#fff;
}

.title {
    padding: 1em .2em;
}
.quit,.set{
    cursor:pointer
}
.title span {
    font-size: 1.4em;
    margin-left: 5px;
}
.header-wraper .quit{
    float:right;
    color:#fff;
    margin-top:20px;
    margin-right:40px;
}
.header-wraper .user{
    float:right;
    color:#fff;
    margin-top:15px;
    margin-right:20px;
}
.header-wraper .set{
    float:right;
    color:#fff;
    margin-top:20px;
    margin-right:60px;
}
.el-select-dropdown__list{
  max-height: 187px !important;
}
.option {
    padding-top: 10px;
}
.ft{
    margin-right:5px;
}

</style>
