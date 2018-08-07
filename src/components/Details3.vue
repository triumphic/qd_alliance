
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
					<li class="title">产品经理（小丁管家/商户端/旅游等）</li>
					<li><p>需求数量：<span>4人</span></p></li>
					<li><img src="../assets/details/形状 5.png"/>工作地点：<span>北京</span></li>
				</ul>
			</div>
			<div class="main-center">
				<div>
					<img id="gun" src="../assets/details/矩形 41@3x.png"/>
					<em>岗位职责</em>
					<p>
						<span>1. 负责产品的全过程管理，包括与前后台部门、合作客户沟通，收集并确认用户/客户需求、进行市场和竞争分析、制定产品规划；</span><br />
						<span>2. 负责具体功能的设计，优化产品体验，协调、推动研发团队按时完成产品开发、高质量上线；</span><br />
						<span>3. 负责在项目推进过程中的跨部门协调沟通工作，能够协调各资源以确保产品顺利发展；</span><br />
						<span>4. 负责跟进产品运维，及时处理合作客户问题。</span><br />
					</p>
				</div>
			</div>
			<div class="main-bottom">
				<div>
					<img id="gun" src="../assets/details/矩形 41@3x.png"/>
					<em>人员要求</em>
					<p>
						<span>1. 统招本科及以上学历。 </span><br />
						<span>2. 精通Axure、visio、office等办公软件设计产品交互原型、产品流程、产品说明等文档；</span><br />
						<span>3. 熟悉互联网产品设计开发流程，能独立推进产品工作；</span><br />
						<span>4. 三年以上产品经理工作经验，互联网、物业行业软件公司经验优先；</span><br />
						<span>5. 工作积极、细致认真、有责任心、勤于思考，能够快速融入团队氛围；</span><br />
						<span>6. 有APP、微信公众号、小程序、toB产品设计、运营经验优先"</span><br />
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
	name: 'details3',
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