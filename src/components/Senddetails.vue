<template>
	<div id="container" class="sendDetails">
		<!--<div id="header">
			<p><</p>
			<span>投递人简历</span>
			<p></p>
		</div>-->
		<div id="content">
			<div class="userInfo">
				<div class="title"><img src="../assets/details/矩形 41@3x.png"/><span>基础信息</span></div>
				<ul>
					<li>
						<p style="color: #333333; font-size: 0.16rem; font-weight: bold;display: inline-block;padding-right: 0.145rem;">{{data.refName}}</p>
						<span>{{data.refSex}}</span>
					</li>
					<li><p>年龄：{{data.refAge}}</p></li>
					<li><p>电话：{{data.refTelephone}}</p>	</li>
					<li><p>所在公司：{{data.refCompany}}</p></li>
					<li><p>毕业院校：{{data.refUniversity}} / {{data.refMajor}}</p></li>
				</ul>
			</div>
			<div class="userDis">
				<div class="title"><img src="../assets/details/矩形 41@3x.png"/><span>自我评价</span></div>
				<p>
					{{data.refSelfEvaluattion}}
				</p>
			</div>
			<div class="fujian">
				<div class="title"><img src="../assets/details/矩形 41@3x.png"/><span>附件</span></div>
				<p>{{data.refAttachmentsLink}}</p>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	data(){
		return {
			data: "",
		}
	},
	mounted(){
		document.title = "投递人详情";
		this.data = JSON.parse(localStorage.getItem("sendDetail"))
	}
}
</script>

<style scoped="scoped" lang="scss">
.userInfo,.userDis,.fujian{
	background: #FFFFFF;
	padding:0 0.09rem;
	text-align: left;
	margin-bottom: 0.12rem;
	border-top: 0.005rem solid #DBDBDB;
	border-bottom: 0.005rem solid #DBDBDB;
}
.userInfo{
	border-top: none;
}
.userDis,.fujian{
	font-size: 0.1rem;
	line-height: 0.195rem;
	color: #888888;
	p{
		padding: 0.1rem 0 0.15rem;
	}
}
.fujian p{
	padding-bottom: 0.29rem;
}
.title{
	font-size: 0.12rem;
	color: #888888;
	padding: 0.11rem 0;
	border-bottom: 0.005rem solid #DBDBDB;
	span{
		vertical-align: middle;
		padding-left: 0.065rem;
	}
	img{
		width: 0.015rem;
		height: 0.11rem;
		vertical-align: middle;
	}
}
.userInfo{
	font-size: 0.12rem;
	color: #888888;
	padding-bottom: 0.15rem;
	ul{
		padding-top: 0.1rem;
		li{
			line-height: 0.26rem;
		}
	}
}
</style>