
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
					<li class="title">品牌经理</li>
					<li><p>需求数量：<span>2人</span></p></li>
					<li><img src="../assets/details/形状 5.png"/>工作地点：<span>北京</span></li>
				</ul>
			</div>
			<div class="main-center">
				<div>
					<img id="gun" src="../assets/details/矩形 41@3x.png"/>
					<em>岗位职责</em>
					<p>
						<span>1、制定公司品牌短期和中长期品牌公关策略</span><br />
						<span>2、负责公司内部及对外公关传播，相关新闻稿、软文、公关材料撰写及把控；</span><br />
						<span>3、负责组织品牌建设及形象优化、媒介公关、展会营销、品牌活动等工作开展；</span><br />
						<span>4、负责媒体关系维护，危机公关应对及处理；</span><br />
						<span>5、负责公司最高领导人的包装、营销，并与公司品牌结合；</span><br />
						<span>6、月度竞品公关传播案例收集、分析、分享；</span>
						<span>7、策划和执行与其他品牌的合作事宜；</span>
					</p>
				</div>
			</div>
			<div class="main-bottom">
				<div>
					<img id="gun" src="../assets/details/矩形 41@3x.png"/>
					<em>人员要求</em>
					<p>
						<span>1、本科及以上学历，市场营销、传播学、汉语言文学等相关专业优先考虑； </span><br />
						<span>2、3年以上品牌公关传播工作经验，有独立运作品牌工作的成功经验（或者从事过相关工作，有行业媒介资源）； </span><br />
						<span>3、熟悉品牌公关及媒介推广运作，具备品牌公关、营销、社交媒体等方面知识和经验，具备出色的品牌策略能力及整合传播技巧； </span><br />
						<span>4、团队意识及推动力强，勇于挑战；</span><br />
						<span>5、思维活跃，善于学习和提升自我，具有创新精神。</span><br />
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
	name: 'details20',
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