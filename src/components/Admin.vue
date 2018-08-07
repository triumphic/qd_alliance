<template>
	<div id="container" class="adminList">
		<!--<div id="header">
			<p>
				<img src="../assets/return.png" style="margin-right: -0.3rem;"/>
				返回
			</p>
			<span style="margin-left: -2rem;">后台列表</span>
			<p></p>
		</div>-->
		<div id="main">
			<ul>
				<li @click="goPositionlist(item)" v-for="item in data">
					<span class="liLeft">{{item.positionName}}</span>
					<span class="liRight">{{item.applicantsNumber}}人投递
						<img src="../assets/矩形 5 拷贝 2@2x.png" style="width: 0.075rem; height: 0.12rem; vertical-align: middle;margin-left: 0.125rem;"/>
					</span>
				</li>
			</ul>
		</div>
	</div>
</template>

<script>
export default {
	data(){
		return {
			userId: "",
			positionName: "",
			data: ""
		}
	},
	methods:{
		goPositionlist(item){
			console.log(item.id)
			console.log(item.positionName)
			localStorage.setItem("positionId",item.id)
			localStorage.setItem("positionName",item.positionName)
			this.$router.push('/positionlist')
		}
	},
	mounted(){
		document.title = "后台列表";
		this.userId = localStorage.getItem("userId")
		var that = this;
		that.$axios({
			url: "https://qaalliance.qdingnet.com/mis-qrcode-hr/AjaxHr/getAppNumByUserId",
			method: "POST",
			params: {
				userId: localStorage.getItem("userId")
//				userId: 999999
			}
		}).then(function(res){
			console.log(res)
			if(res.data.code == 200){
//				console.log(res.data.data)
				that.data = res.data.data;
			}
		})
	}
}
</script>

<style scoped="scoped">
.adminList{
	background-color: #F2F2F2;
}
#main{
	width: 100%;
}
#main ul li{
	background-color: #fff;
	height: 0.49rem;
	display: flex;
	justify-content: space-between;
	align-items: center;
	margin-bottom: 0.115rem;
	border-top: 0.005rem solid #DBDBDB;
	border-bottom: 0.005rem solid #DBDBDB;
}
#main ul li:nth-of-type(1){
	border-top: none;
}
.liLeft{
	font-size: 0.15rem;
	color: #333333;
	margin-left: 0.09rem;
}
.liRight{
	margin-right: 0.09rem;
	font-size: 0.12rem;
	color: #888888;
}
</style>