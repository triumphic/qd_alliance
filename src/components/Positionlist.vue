<template>
	<div id="container" class="positionList">
		<!--<div id="header">
			<p>
				<img src="../assets/return.png" style="margin-right: -0.3rem;"/>
				返回
			</p>
			<span style="margin-left: -2rem;">职位投递列表</span>
			<p></p>
		</div>-->
		<div id="content">
			<ul>
				<li class="zhiweiTitle">
					<p id="flexP">
						<span class="bigWords">{{positionName}}</span>
						<span class="bigDe">岗位详情</span>
					</p>
				</li>
				<div style="color: #888888; font-size: 0.12rem; line-height: 0.32rem;margin: 0 0.09rem;margin-top: 0.02rem;text-align: left;">
					共28人
				</div>
				<li class="zhiweiDe" v-for="item in data" @click="goSenddetails(item)">
					<p id="flexLeft"><span class="bigWords">{{item.refName}}</span><span>{{item.refAge}}岁</span></p>
					<img src="../assets/矩形 5 拷贝 2@3x.png" class="jiantou" />
					<p id="flexLeft"><span>{{item.refUniversity}}</span><span>{{item.refMajor}}</span></p>
					<p id="flexP"><span>{{item.refCompany}}</span><span>{{item.refPosition}}</span></p>
				</li>
			</ul>
		</div>
	</div>
</template>

<script>
export default {
	name: 'positionlist',
	data(){
		return {
			data: "",
			positionName: "",
		}
	},
	methods:{
		goSenddetails(value){
			console.log(value)
			localStorage.setItem("sendDetail",JSON.stringify(value))
			this.$router.push('/senddetails')
		}
	},
	mounted(){
		document.title = "职位投递列表";
		var that = this;
		that.$axios({
			url: "https://qaalliance.qdingnet.com/mis-qrcode-hr/AjaxHr/getRefereeInfoByUserIdAndPosId",
			method: "POST",
			params: {
				userId: localStorage.getItem("userId"),
				positionId: localStorage.getItem("positionId"),
//				userId: 999999,
//				positionId: 22,
			}
		}).then(function(res){
			console.log(res)
			if(res.data.code == 200){
				console.log(res.data.data)
				that.data = res.data.data;
			}
		})
		that.positionName = localStorage.getItem("positionName")
	}
}
</script>

<style scoped="scoped">
.positionList{
	background-color: #F2F2F2;
}
#content ul li p{
	margin: 0 0.09rem;
}
#content ul li{
	color: #888888;
	width: 100%;
	background-color: #fff;
	position: relative;
	border-top: 0.005rem solid #DBDBDB;
	border-bottom: 0.005rem solid #DBDBDB;
}
.jiantou{
	position: absolute;
	width: 0.075rem;
	height: 0.12rem;
	top: 0.33rem;
	right: 0.09rem;
}
.zhiweiDe{
	font-size: 0.12rem;
	margin-bottom: 0.11rem;
}
#content .bigWords{
	color: #333333;
	font-size: 0.16rem;
	font-weight: bold;
}
#content .bigDe{
	width: 0.615rem;
	height: 0.25rem;
	line-height: 0.25rem;
	background-color: #EA8C21;
	font-size: 0.12rem;
	color: #fff;
	border-radius: 0.05rem;
}
#flexP{
	height: 0.49rem;
	display: flex;
	justify-content: space-between;
	align-items: center;
	border-top: 0.005rem solid #DBDBDB;
}
#flexLeft{
	text-align: left;
}
#flexLeft:nth-of-type(1){
	padding-top: 0.14rem;
	padding-bottom: 0.085rem;
}
#flexLeft:nth-of-type(2){
	padding-bottom: 0.1rem;
}
#flexLeft span:nth-of-type(2){
	margin-left: 0.095rem;
}
ul li p:nth-of-type(1),ul li:nth-of-type(1){
	border-top: none !important;
}
</style>