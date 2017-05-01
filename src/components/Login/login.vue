<template>
    <div class="bg">
      <div class="login">
          <h2>后台管理界面</h2>
          <div class="login-top">
              <h1>管理员登录</h1>
              <form>
                  <input type="text" placeholder="用户名" v-model="name">
                  <input type="password" placeholder="密码" v-model="pwd">
              </form>
              <div class="forgot">
                  <input type="button" value="Login" @click="isLogin">
              </div>
          </div>
          <div class="login-bottom">
              <h3>New User &nbsp;<a href="#">注册</a>&nbsp Here</h3>
          </div>
      </div>
    </div>
</template>
<script>
export default {
  data () {
    return {
        name:'',
	    	pwd:'',
    }
  },
  methods:{
      isLogin() {
        if(this.name=='张宇' && this.pwd =='123'){
            this.$store.dispatch('isLogin',{name:this.name,pwd:this.pwd});
							this.name=''
							this.pwd= ''
							this.$router.push({ path: 'main' })    
				}else{
							alert('请输入正确的用户名和密码！');
							this.name=''
							this.pwd= ''
						}
      }
  }
}
</script>
<style>

/*--login start here--*/
html,body{
  width:100%;
  height:100%;
  padding:0px;
  margin:0px;
}
body>div{
  height:100%;
}
.bg{
   height:100%;
   background: url(img/banner.jpg) repeat;
   padding:100px 0px 30px 0px;
   font-family: 'Roboto', sans-serif;
   font-size: 100%;
   box-sizing:border-box;
}
.login {
  width: 32%;
  margin: 0 auto;
}
.login h2 {
  font-size: 30px;
  font-weight: 700;
  color: #fff;
  text-align: center;
  margin: 0px 0px 50px 0px;
  font-family: 'Droid Serif', serif;
}
.login-top {
  background: #E1E1E1;
  border-radius: 25px 25px 0px 0px;
  -webkit-border-radius:  25px 25px 0px 0px;
  -moz-border-radius: 25px 25px 0px 0px;
  -o-border-radius: 25px 25px 0px 0px;
  padding: 40px 60px;
}
.login-top h1 {
  text-align: center;
  font-size: 27px;
  font-weight: 500;
  color: #F45B4B;
  margin: 0px 0px 20px 0px;
}
.login-top input[type="text"] {
	outline: none;
  font-size: 15px;
  font-weight: 500;
  color: #818181;
  padding: 15px 20px;
  background: #CACACA;
  border: 1px solid #ccc;
  border-radius:25px;
  -webkit-border-radius: 25px;
  -moz-border-radius: 25px;
  -o-border-radius: 25px;
  margin: 0px 0px 12px 0px;
  width: 88%;
  -webkit-appearance: none;
}
.login-top input[type="password"]{
	outline: none;
  font-size: 15px;
  font-weight: 500;
  color: #818181;
  padding: 15px 20px;
  background: #CACACA;
  border: 1px solid #ccc;
  border-radius:25px;
  -webkit-border-radius: 25px;
  -moz-border-radius: 25px;
  -o-border-radius: 25px;
  margin: 0px 0px 12px 0px;
  width: 88%;
  -webkit-appearance: none;
}
.forgot  a{
  font-size: 13px;
  font-weight: 500;
  color: #F45B4B;
  display: inline-block;
  border-right: 2px solid #F45B4B;
  padding: 0px 7px 0px 0px;
}
.forgot  a:hover{
  color: #818181;
}
.forgot input[type="button"] {
  background: #F45B4B;
  color: #FFF;
  font-size: 17px;
  font-weight: 400;
  padding: 8px 7px;
  width: 20%;
  display: inline-block;
  cursor: pointer;
  border-radius: 6px;
  -webkit-border-radius: 19px;
  -moz-border-radius: 6px;
  -o-border-radius: 6px;
  margin: 0px 7px 0px 3px;
  outline: none;
  border: none;
}
.forgot input[type="submit"]:hover {
	background:#818181;
	transition: 0.5s all;
  -webkit-transition: 0.5s all;
  -moz-transition: 0.5s all;
  -o-transition: 0.5s all;
}
.forgot {
  text-align: right;
}
.login-bottom {
  background: #E15748;
  padding: 30px 65px;
  border-radius: 0px 0px 25px 25px;
  -webkit-border-radius:  0px 0px 25px 25px;
  -moz-border-radius: 0px 0px 25px 25px;
  -o-border-radius: 0px 0px 25px 25px;
  text-align: right;
  border-top: 2px solid #AD4337;
}
.login-bottom h3 {
  font-size: 14px;
  font-weight: 500;
  color: #fff;
}
.login-bottom h3 a {
  font-size: 25px;
  font-weight: 500;
  color: #fff;
}
.login-bottom h3 a:hover {
	color:#696969;
	transition: 0.5s all;
  -webkit-transition: 0.5s all;
  -moz-transition: 0.5s all;
  -o-transition: 0.5s all;
}
.copyright {
  padding: 150px 0px 0px 0px;
  text-align: center;
}
.copyright p {
  font-size: 15px;
  font-weight: 400;
  color: #fff;
}
.copyright p a{
  font-size: 15px;
  font-weight: 400;
  color: #E15748;
}
.copyright p a:hover{
	color: #fff;
	 transition: 0.5s all;
  -webkit-transition: 0.5s all;
  -moz-transition: 0.5s all;
  -o-transition: 0.5s all;
}
/*--login end here--*/
</style>