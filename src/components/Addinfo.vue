<template>
	<div id="container" class="addInfo">
		<!--<div id="header">
			<p>
				<img src="../assets/return.png" style="margin-right: -0.3rem;"/>
				返回
			</p>
			<span style="margin-left: -2rem;">填写简历</span>
			<p></p>
		</div>-->
		<div id="content">
			<form action="" method="post">
				<div style=" height: 1.34rem; background-color: #fff;border-top: none;">
					<p>
						<label for=""><span id="necessary">*</span>姓名</label>
						<input type="text" ref="username" id="username" placeholder="请输入真实姓名" class="txt" v-model="username" @change="changeUser" @blur="blurUser"/>
					</p>
					<p>
						<label for="">性别</label>
						<span id="sexSelect">
							<!--<img src="../assets/addinfo/组 16@2x.png" style="width: 1.1875rem; height: 1.1875rem; display: none;"/>
							<img src="../assets/addinfo/矩形 5 拷贝 4@2x.png" style="width: 1.1875rem; height: 1.1875rem;"/>男
							<img src="../assets/addinfo/组 16@2x.png" style="width: 1.1875rem; height: 1.1875rem;"/>
							<img src="../assets/addinfo/矩形 5 拷贝 4@2x.png" style="width: 1.1875rem; height: 1.1875rem; display: none;"/>女-->
							<input type="radio" name="sex" ref="sexMan" id="sex" value="1" style="width: 0.185rem; height: 0.185rem;margin-right: 0.065rem;vertical-align: middle;" @change="changeSex1"/>男
							<input type="radio" name="sex" ref="sexWoman" id="sex" value="2" style="width: 0.185rem; height: 0.185rem;margin-right: 0.065rem;margin-left: 0.185rem;vertical-align: middle;" @change="changeSex2"/>女
						</span>
					</p>
					<p style="border: 0;">
						<label for="">年龄</label>
						<input type="text" name="" id="" value="" placeholder="请选择" class="txt" style="margin-left: 1.1rem;" v-model="year"/>
						<img src="../assets/矩形 5 拷贝 2@2x.png" style="width: 0.065rem; height: 0.115rem; "/>
					</p>
				</div>
				<span class="error" ref="err1" id="err1">
	 				<img src="../assets/感叹号@2x.png" style="width: 0.12rem; height: 0.12rem;"/>
	 				姓名不能为空
	 			</span>
				<div style="background-color: #fff;  margin-top: 0.115rem;">
					<p>
						<label for="">所在公司（最近一家）</label>
						<input type="text" name="" id="" value="" placeholder="请填写公司名称" class="txt" v-model="companyNow"/>
					</p>
					<p style="border: none;">
						<label for="">职位</label>
						<input type="text" name="" id="" value="" placeholder="请填写您的职位" class="txt" v-model="positionNow"/>
					</p>
				</div>
				<div style="background-color: #fff; margin-top: 0.115rem;">
					<p>
						<label for="">毕业院校（最高学历）</label>
						<input type="text" name="" id="" value="" placeholder="请填写毕业院校" class="txt" v-model="school"/>
					</p>
					<p style="border: none;">
						<label for="">专业</label>
						<input type="text" name="" id="" value="" placeholder="请填写您的专业" class="txt" v-model="major"/>
					</p>
				</div>
				<div style="background-color: #fff; margin-top: 0.115rem;">
					<p style="border: none;">
						<label for=""><span id="necessary">*</span>电话</label>
						<input type="text" name="" id="" value="" placeholder="请输入电话号码" class="txt" v-model="phoneNum" @blur="blurPhone"/>
					</p>
				</div>
				<span class="error" ref="err2" id="err2">
	 				<img src="../assets/感叹号@2x.png" style="width: 0.12rem; height: 0.12rem;"/>
	 				电话不能为空
	 			</span>
	 			<span class="error" ref="err3" id="err3">
	 				<img src="../assets/感叹号@2x.png" style="width: 0.12rem; height: 0.12rem;"/>
	 				电话号码格式错误
	 			</span>
				<div style=" background-color: #fff; margin-top: 0.115rem; padding-top: 0.01rem;">
					<p class="areaTxt"  style="border: none; height: 1.15rem;">
					<!--<label for="">自我评价（500字）</label>-->
					<textarea name="" rows="6" cols="2" placeholder="自我评价(500字)" style="width: 100%; height: 1.04rem; border: 0;" v-model="selfWords"></textarea>
				</p>
				</div>
				<div style="background-color: #fff; margin-top: 0.115rem;">
					<p style="padding-top: 0.01rem;border: none;" >
						<label for="">附件链接</label>
						<input type="text" name="" id="" value="" placeholder="URL" class="txt" v-model="fuLink"/>
					</p>
					
				</div>
				<div id="btn">
					<div id="btns">
						<span style="font-size: 0.15rem;" @click="goComplete">确认提交</span>
					</div>
				</div>
			</form>
		</div>
	</div>
</template>

<script>
export default {
  name: 'Login',
  data () {
    return {
    	username: "",
    	phoneNum: "",
    	refSex: "",
    	year: "",
    	companyNow: "",
    	positionNow: "",
    	school: "",
    	major: "",
    	selfWords: "",
    	fuLink: "",
    }
  },
  methods: {
  	blurUser(){
		if(this.username == ""){
			this.$refs.err1.style.display = "block";
			return false;
		}else{
			this.$refs.err1.style.display = "none";
			return true;
		}
  	},
  	blurPhone(){
  		if(this.phoneNum == ""){
			this.$refs.err2.style.display = "block";
			return false;
		}else{
			this.$refs.err2.style.display = "none";
			return true;
			var phoneReg = /^1[0-9]{10}$/;
			if(!phoneReg.test(this.phoneNum)){
				this.$refs.err3.style.display = "block";
				return false;
			}else{
				this.$refs.err3.style.display = "none";
				return true;
			}
		}
  	},
  	changeUser(){
  		console.log(this.username)
  	},
  	changeSex1(){
  		this.refSex = this.$refs.sexMan.value
  	},
  	changeSex2(){
  		this.refSex = this.$refs.sexWoman.value
  	},
  	goComplete(){
  		if(!this.blurUser()&&!this.blurPhone())return
		var that = this;
		that.$axios({
			url: "https://qaalliance.qdingnet.com/mis-qrcode-hr/AjaxHr/addRefree",
			method: "POST",
			params: {
				userId: localStorage.getItem("userId"),
				positionId: localStorage.getItem("positionId"),
				refName: that.username,
				refSex: that.refSex,
				refAge: that.year,
				refCompany: that.companyNow,
				refPosition: that.positionNow,
				refUniversity: that.school,
				refMajor: that.major,
				refTelephone: that.phoneNum,
				refSelfEvaluattion: that.selfWords,
				refAttachmentsLink: that.fuLink
			}
		}).then(function(res){
			console.log(res)
			if(res.data.code == 200){
				that.$router.push('/complete')
			}
		})
  	}
  },
  mounted(){
  	document.title = "填写简历";
  }
}
</script>

<style scoped="scoped">
.addInfo{
	background-color: #F2F2F2;
}
.error{
	display: block;
	width: 100%;
	height: 0.3rem;
	line-height: 0.3rem;
	background-color: #FFF8E5;
	text-align: left;
}
#err1{
	display: none;
}
#err2{
	display: none;
}
#err3{
	display: none;
}
form{
	font-size: 0.16rem;
	color: #555555;
	padding-bottom: 0.7rem;
}
form div{
	border-bottom: 0.005rem solid #DBDBDB;
	border-top: 0.005rem solid #DBDBDB;
}
form p{
	height: 0.435rem;
	line-height: 0.435rem;
	margin: 0 0.085rem;
	display: flex;
	justify-content: space-between;
	align-items: center;
	border-bottom: 0.005rem solid #DBDBDB;
}
form p input{
	border: 0;
	height: 0.4rem;
	text-align: right;
	/*width: 3rem;*/
}

form p label{
	/*width: 15%;*/
	font-size: 0.12rem;
	white-space: nowrap;
}
form p label span{
	color: #EA8C21;
}
#sexSelect{
	vertical-align: middle;
	font-size: 0.12rem;
}
#sexSelect img{
	width: 0.185rem;
	height: 0.185rem;
	vertical-align: middle;
	margin-right: 0.065rem;
}
/*#subBn{
	background-color: #6A7D8F;
	width: 80%;
	height: 2.5rem;
	line-height: 2.5rem;
	margin: 1rem auto;
	color: #fff;
	border: 0;
}*/
#btn{
	width: 100%;
	background-color: #FFFFFF;
	color: #fff;
	padding: 0.1rem;
	position: fixed;
	bottom: 0;
	left: 0;
}
#btns{
	width: 3.56rem;
	height: 0.415rem;
	line-height: 0.415rem;
	background-color: #EA8C21;
	border-radius: 0.04rem;
}
</style>