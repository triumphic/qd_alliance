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
					<li class="title">JAVA开发工程师</li>
					<li><p>需求数量：<span>15人</span></p></li>
					<li><img src="../assets/details/形状 5.png"/>工作地点：<span>北京、成都、重庆、上海、杭州、广州、西安</span></li>
				</ul>
			</div>
			<div class="main-center">
				<div>
					<img id="gun" src="../assets/details/矩形 41@3x.png"/>
					<em>岗位详情</em>
					<p>
						<span>1、熟悉或精通Java编程，掌握常用数据结构和算法；</span><br />
						<span>2、掌握SSH框架，具有良好的抽象思维能力，熟悉常用设计模式；</span><br />
						<span>3、掌握常用关系数据库的SQL编写和优化，熟悉事务、索引原理；</span><br />
						<span>4、掌握Elasticsearch或Lucene技术；</span><br />
						<span>5、熟悉流行的开源技术；</span><br />
						<span>6、具有大型企业级应用系统开发经验者优先。</span>
					</p>
				</div>
			</div>
			<div class="main-bottom">
				<div>
					<img id="gun" src="../assets/details/矩形 41@3x.png"/>
					<em>岗位职责</em>
					<p>
						<span>1、JAVA基础扎实，理解io、多线程、集合等基础框架，对JVM原理有一定的了解； </span><br />
						<span>2、4年及以上使用JAVA开发的经验；对Spring,mybatis等开源框架熟悉； </span><br />
						<span>3、熟悉分布式系统的设计和应用，熟悉分布式、缓存、消息等机制. </span><br />
						<span>4、掌握多线程及高性能的设计与编码及性能调优；有高并发应用开发经验；</span><br />
					</p>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: 'details',
	data(){
		return {
			
		}
	},
	mounted(){
		document.title = "岗位详情";
		var that = this;
		that.$axios({
			url: "https://qaalliance.qdingnet.com/mis-qrcode-hr/AjaxHr/getRefereeInfoByUserIdAndPosId",
			method: "POST",
			params: {
				userId: localStorage.getItem("userId"),
				positionId: localStorage.getItem("positionId"),
			}
		}).then(function(res){
			console.log(res)
		})
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
</style>