<template>
	<div id="container" class="userPage">
		<!--<div id="header">
			<p>
				<img src="../assets/return.png" style="margin-right: -0.3rem;"/>
				返回
			</p>
			<span style="margin-left: -2rem;">个人</span>
			<p></p>
		</div>-->
		<div id="content">
			<div id="linkPic">
				<img src="../assets/user/组 15@2x.jpg" style="width: 100%; height: 2.21rem; display: block;"/>
				<div id="linkList">
					<div>
						<img src="../assets/user/形状 3@2x.png" style="width: 0.24rem; height: 0.21rem;  margin-right: 0.13rem;"/>
						<span @click="goActive">活动页生成</span>
					</div>
					<div>
						<img src="../assets/user/形状 4@2x.png" style="width: 0.24rem; height: 0.21rem; margin-right: 0.13rem;"/>
						<span @click="goAdmin">后台列表</span>
					</div>
				</div>
			</div>
			<div id="wenzi">
				文字说明:
			</div>
			<div id="wordExplain">
				
				一位作家这样总结写作者的三个阶段，第一阶段是自我表达期，第二阶段是刻意训练期，第三阶段是风格成熟期。简单来说，第一阶段专注于个人世界的表达，写得随意，写作的内容对其他人没有太多分享的价值。第二阶段是提升期，这个时候写作者的文笔审美有所提高，会有意识向成熟的作家作品模仿学习，并尝试培养个人写作风格。在第三阶段，作者的作品已经成熟，他有一套具备个人特色的行文风格，作品能体现出思想深度。

			</div>
		</div>
	</div>
</template>

<script>
export default {
  name: 'User',
  data () {
    return {
      msg: ''
    }
  },
  methods:{
  	goActive(){
  		this.$router.push('/active')
  	},
  	goAdmin(){
  		this.$router.push('/admin')
  	}
  },
  mounted(){
	  document.title = "个人";
  }
}
</script>

<style scoped="scoped">
#content .content-words{
	width: 100%;
	text-align: left;
}
#content .content-words span{
	color: #ccc;
}
#linkPic{
	width: 100%;
	position: relative;
}
#linkList{
	width: 100%;
	height:0.51rem;
	display: flex;
	align-items: center;
	justify-content: space-between;
	background-color: #38373B;
	font-size: 0.15rem;
	color: #fff;
	position: absolute;
	left: 0;
	bottom: 0;
	opacity: 0.8;
}
#linkList div{
	width: 1.87rem;
	text-align: center;
}
#linkList div:nth-of-type(1){
	border-right: 0.005rem solid #FFFFFF;
}
#linkList div span{
	vertical-align: middle;
}
#linkList div img{
	vertical-align: middle;
}
#wenzi{
	font-size: 0.12rem;
	text-align: left;
	margin-left: 0.205rem;
	margin-top: 0.725rem;
	color: #EA8C21;
}
#wordExplain{
	color: #6A7D8F;
	text-align: left;
	margin: auto;
	margin-top: 0.15rem;
	width: 3.28rem;
	font-size: 0.1rem;
	line-height: 0.18rem;
}
</style>