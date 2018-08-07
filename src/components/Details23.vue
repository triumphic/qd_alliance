
<template>
	<div id="container" class="detailPage">
		<!--<div id="header">
			<p>
				<img src="../assets/return.png" style="margin-right: -0.3rem;"/>
				返回
			</p>
			<span style="margin-left: -2rem;">岗位详情</span>
			<p></p>
		</div>-->
		<div id="content">
			<div class="main-top">
				<ul>
					<li class="title">广告销售总监</li>
					<li><p>需求数量：<span>14人</span></p></li>
					<li><img src="../assets/details/形状 5.png"/>工作地点：<span>成都、重庆、上海；杭州、广州、西安</span></li>
				</ul>
			</div>
			<div class="main-center">
				<div>
					<img id="gun" src="../assets/details/矩形 41@3x.png"/>
					<em>岗位职责</em>
					<p>
						<span>1、负责搭建三人销售团队；</span><br />
						<span>2、带队完成团队销售指标；</span><br />
						<span>3、负责广告业务拓展，并指导、协助团队其它人开展业务；</span><br />
						<span>4、团队重要客户关系维护；</span><br />
						<span>5、促使销售合同顺利履行、促使销售回款。</span><br />
					</p>
				</div>
			</div>
			<div class="main-bottom">
				<div>
					<img id="gun" src="../assets/details/矩形 41@3x.png"/>
					<em>人员要求</em>
					<p>
						<span>1、4年以上广告行业销售经验； </span><br />
						<span>2、2年以上销售管理岗位经验； </span><br />
						<span>3、在对应城市有强的资源。 </span><br />
					</p>
				</div>
			</div>
			<div id="btn">
				<div id="btns">
					<img src="../assets/details/形状 6@2x.png"/>
					<span @click="goAddinfo">我感兴趣</span>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: 'details23',
	data(){
		return {
			
		}
	},
	methods:{
		goAddinfo(){
			this.$router.push('/addinfo')
		}
	},
	mounted(){
		document.title = "岗位详情";
	}
}
</script>

<style scoped="scoped" lang="scss">
#content{
	text-align: left;
	padding-bottom: 0.7rem;
}
	.main-top{
		width: 100%;
		background: #FFFFFF;
		border-bottom: 0.005rem solid #DBDBDB;
		ul{
			padding: 0.26rem 0.09rem 0 0.09rem;
			.title{
				font-size: 0.155rem;
				color: #333333;
				font-weight: bold;
				margin-bottom: 0.10rem;
			}
			li:nth-of-type(2){
				font-size: 0.11rem;
				color: #888888;
				span{
					color: #EA8C21;
				}
				padding-bottom:0.12rem;
				border-bottom:0.005rem solid #DBDBDB;
			}
			li:nth-of-type(3){
				font-size: 0.12rem;
				margin-top: 0.15rem;
				padding-bottom: 0.15rem;
				color: #888888;
				img{
					width: 0.09rem;
					height: 0.105rem;
					margin-right: 0.045rem;
					vertical-align: middle;
					display: inline-block;
				}
			}
		}
	}
	.main-center,.main-bottom{
		background: #FFFFFF;
		margin-top: 0.1rem;
		border-top: 0.005rem solid #DBDBDB;
		border-bottom: 0.005rem solid #DBDBDB;
		div{
			padding: 0 0.09rem;
			em{
				font-size: 0.14rem;
				color: #888888;
				padding: 0.135rem 0;
				display: inline-block;
			}
			#gun{
				width: 0.015rem;
				height: 0.125rem;
				vertical-align: middle;
			}
			p{
				border-top: 0.005rem solid #DBDBDB;
				padding: 0.15rem 0;
				span{
					color: #888888;
					font-size: 0.11rem;
					line-height: 0.21rem;
				}
			}
		}
	}
	#btn{
		background: #FFFFFF;
		position: fixed;
		bottom: 0;
		#btns{
			width: 3.56rem;
			height: 0.415rem;
			background: #EA8C21;
			border-radius: 0.04rem;
			margin: 0.1rem;
			color:#FFFFFF;
			font-size:0.15rem;
			text-align:center;
			line-height:0.415rem;
			span{
				font-size: 0.15rem;
				vertical-align: middle;
			}
			img{
				width: 0.185rem;
				height: 0.175rem;
				vertical-align: middle;
			}
		}
	}
</style>