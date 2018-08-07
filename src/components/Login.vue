<template>
  <div class="login" id="container">
 		<!--<div id="head">
 			<p>
 				<img src="../assets/return.png" style="margin-right: -0.3rem;"/>
 				返回
 			</p>
 			<span id="login_word">
	 			首页
	 		</span>
	 		<p></p>
 		</div>-->
 		<div class="logoPic">
 			<img src="../assets/login/矢量智能对象@2x.png" id="logoPic"/>
 		</div>
 		<div class="login_main">
 			<p>
 				<img src="../assets/login/形状 1@2x.png" class="userPic loginPicture"/>
 				<span id="gun"></span>
 				<input type="text" name="username" id="username" value="" placeholder="请输入用户名" v-model="username" @focus="blurInputUser"/>
 			</p>
 			<p>
 				<img src="../assets/login/形状 2@2x.png" class="passPic loginPicture"/>
 				<span id="gun"></span>
 				<input type="password" name="password" id="password" value="" placeholder="请输入密码"  v-model="passWord" @focus="blurInputPass"/>
 			</p>
 			<span class="error" ref="errModal">
 				<img src="../assets/感叹号@2x.png" style="width: 0.12rem; height: 0.12rem;"/>
 				<em id="errWord" ref="errWord">用户名或密码错误</em>
 			</span>
 			<input type="submit" name="login_btn" id="login_btn" value="登录" @click="loginSucc"/>
 		</div>
  </div>
</template>

<script>
export default {
  name: 'Login',
  data () {
    return {
      username: "",
      passWord: "",
      userId: "",
    }
  },
  methods: {
  	loginSucc(){
			var that = this;
			that.$axios({
				url: "https://qaalliance.qdingnet.com/mis-qrcode-hr/AjaxHr/login",
				method: "POST",
				params: {
					loginId: that.username,
					passWord: that.passWord,
				}
			}).then(function(res){
				console.log(res)
				if(res.data.code == 201){
						that.$refs.errWord.innerText = res.data.msg;
						that.$refs.errModal.style.display = "block";
				}else if(res.data.code == 202){
						that.$refs.errWord.innerText = res.data.msg;
						that.$refs.errModal.style.display = "block";
				}else if(res.data.code == 200){
						that.userId = res.data;
						localStorage.setItem("userId",res.data.data)
						that.$router.push('/user');
				}
			})
  	},
  	blurInputUser(){
  		this.$refs.errModal.style.display = "none";
  	},
  	blurInputPass(){
  		this.$refs.errModal.style.display = "none";
  	}
  },
  mounted(){
	  document.title = "首页";
  }
}
</script>

<style scoped>
/*#head{
	width: 100%;
	height: 2.5rem;
	background-color: #000;
	display: flex;
	justify-content: space-between;
	color: #fff;
	align-items: center;
}*/
.error{
	display: block;
	text-align: left;
	width: 100%;
	height: 0.3rem;
	line-height: 0.3rem;
	background-color: #FFF8E5;
	color: #999;
	display: none;
}
#login_word{
	color: white;
	margin-left: -2rem;
}
.login{
	width: 100%;
	background: url(../assets/login/微信图片_20180612154344.png) no-repeat left top;
	background-size: 100%;
}
.logoPic{
	padding-top: 1.04rem;
}
#logoPic{
	width: 1.105rem;
	height: 0.66rem;
}
.login_main{
	margin-top: 0.63rem;
}
.login_main p{
	width: 3.38rem;
	height: 0.415rem;
	background-color: #fff;
	display: flex;
	align-items: center;
	margin: auto;
	margin-bottom: 0.14rem;
}
.userPic{
	width:0.19rem;
	height: 0.18rem;
	margin-left: 0.115rem;
}
.passPic{
	width: 0.18rem;
	height: 0.205rem;
	margin-left: 0.115rem;
}
.login_main p input{
	width: 100%;
	height: 100%;
	border: 0;
	margin-left: 0.12rem;
}
#gun{
	width: 0.005rem;
	height: 0.185rem;
	background-color: #888888;
	margin-left: 0.12rem;
}
#login_btn{
	width: 3.38rem;
	height: 0.415rem;
	background-color: #EA8C21;
	border: 0;
	color: #fff;
	fone-size:0.15rem;
	margin-top: 0.235rem;
	border-radius: 0.04rem;
}
</style>
