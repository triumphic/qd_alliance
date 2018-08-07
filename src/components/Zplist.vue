<template>
	<div id="container" class="zpList">
		<!--<div id="header">
			<p>
				<img src="../assets/return.png" style="margin-right: -0.3rem;"/>
				返回
			</p>
			<span style="margin-left: -2rem;">招聘列表</span>
			<p></p>
		</div>-->
		<div id="main">
			<span>共26个职位</span>
		</div>
		<div id="con">
			<ul>
				<li @click="goDetails1">
					<div class="zp-left">
						<div class="zp-head"><span>JAVA开发工程师</span><span>15人</span></div>
						<div class="zp-main">
							<img src="../assets/zplist/形状 51@2x.png" style="width: 0.09rem; height: 0.105rem;"/>
							北京
						</div>
					</div>
					<div class="zp-right">
						<img src="../assets/矩形 5 拷贝 2@2x.png" style="width: 0.065rem; height: 0.115rem;"/>
					</div>
				</li>
				<li @click="goDetails2">
					<div class="zp-left">
						<div class="zp-head"><span>企业IT产品经理</span><span>4人</span></div>
						<div class="zp-main">
							<img src="../assets/zplist/形状 51@2x.png" style="width: 0.09rem; height: 0.105rem;"/>
							北京
						</div>
					</div>
					<div class="zp-right">
						<img src="../assets/矩形 5 拷贝 2@2x.png" style="width: 0.065rem; height: 0.115rem;"/>
					</div>
				</li>
				<li @click="goDetails3">
					<div class="zp-left">
						<div class="zp-head"><span>产品经理（小丁管家/商户端/旅游等）</span><span>4人</span></div>
						<div class="zp-main">
							<img src="../assets/zplist/形状 51@2x.png" style="width: 0.09rem; height: 0.105rem;"/>
							北京
						</div>
					</div>
					<div class="zp-right">
						<img src="../assets/矩形 5 拷贝 2@2x.png" style="width: 0.065rem; height: 0.115rem;"/>
					</div>
				</li>
				<li @click="goDetails4">
					<div class="zp-left">
						<div class="zp-head"><span>产品经理（小丁管家）</span><span>3人</span></div>
						<div class="zp-main">
							<img src="../assets/zplist/形状 51@2x.png" style="width: 0.09rem; height: 0.105rem;"/>
							北京
						</div>
					</div>
					<div class="zp-right">
						<img src="../assets/矩形 5 拷贝 2@2x.png" style="width: 0.065rem; height: 0.115rem;"/>
					</div>
				</li>
				<li @click="goDetails5">
					<div class="zp-left">
						<div class="zp-head"><span>产品经理（商户端）</span><span>3人</span></div>
						<div class="zp-main">
							<img src="../assets/zplist/形状 51@2x.png" style="width: 0.09rem; height: 0.105rem;"/>
							北京
						</div>
					</div>
					<div class="zp-right">
						<img src="../assets/矩形 5 拷贝 2@2x.png" style="width: 0.065rem; height: 0.115rem;"/>
					</div>
				</li>
				<li @click="goDetails6">
					<div class="zp-left">
						<div class="zp-head"><span>产品经理（旅游1人、商家2人）</span><span>3人</span></div>
						<div class="zp-main">
							<img src="../assets/zplist/形状 51@2x.png" style="width: 0.09rem; height: 0.105rem;"/>
							北京
						</div>
					</div>
					<div class="zp-right">
						<img src="../assets/矩形 5 拷贝 2@2x.png" style="width: 0.065rem; height: 0.115rem;"/>
					</div>
				</li>
				<li @click="goDetails7">
					<div class="zp-left">
						<div class="zp-head"><span>后台权限产品经理</span><span>3人</span></div>
						<div class="zp-main">
							<img src="../assets/zplist/形状 51@2x.png" style="width: 0.09rem; height: 0.105rem;"/>
							北京
						</div>
					</div>
					<div class="zp-right">
						<img src="../assets/矩形 5 拷贝 2@2x.png" style="width: 0.065rem; height: 0.115rem;"/>
					</div>
				</li>
				<li @click="goDetails8">
					<div class="zp-left">
						<div class="zp-head"><span>支付产品经理</span><span>2人</span></div>
						<div class="zp-main">
							<img src="../assets/zplist/形状 51@2x.png" style="width: 0.09rem; height: 0.105rem;"/>
							北京
						</div>
					</div>
					<div class="zp-right">
						<img src="../assets/矩形 5 拷贝 2@2x.png" style="width: 0.065rem; height: 0.115rem;"/>
					</div>
				</li>
				<li @click="goDetails9">
					<div class="zp-left">
						<div class="zp-head"><span>产品经理（微信小程序、公众号）</span><span>2人</span></div>
						<div class="zp-main">
							<img src="../assets/zplist/形状 51@2x.png" style="width: 0.09rem; height: 0.105rem;"/>
							北京
						</div>
					</div>
					<div class="zp-right">
						<img src="../assets/矩形 5 拷贝 2@2x.png" style="width: 0.065rem; height: 0.115rem;"/>
					</div>
				</li>
				<li @click="goDetails10">
					<div class="zp-left">
						<div class="zp-head"><span>高级产品经理（SASS平台）</span><span>2人</span></div>
						<div class="zp-main">
							<img src="../assets/zplist/形状 51@2x.png" style="width: 0.09rem; height: 0.105rem;"/>
							北京
						</div>
					</div>
					<div class="zp-right">
						<img src="../assets/矩形 5 拷贝 2@2x.png" style="width: 0.065rem; height: 0.115rem;"/>
					</div>
				</li>
				<li @click="goDetails11">
					<div class="zp-left">
						<div class="zp-head"><span>C端产品经理（SASS平台）</span><span>2人</span></div>
						<div class="zp-main">
							<img src="../assets/zplist/形状 51@2x.png" style="width: 0.09rem; height: 0.105rem;"/>
							北京
						</div>
					</div>
					<div class="zp-right">
						<img src="../assets/矩形 5 拷贝 2@2x.png" style="width: 0.065rem; height: 0.115rem;"/>
					</div>
				</li>
				<li @click="goDetails12">
					<div class="zp-left">
						<div class="zp-head"><span>Android开发工程师</span><span>2人</span></div>
						<div class="zp-main">
							<img src="../assets/zplist/形状 51@2x.png" style="width: 0.09rem; height: 0.105rem;"/>
							北京
						</div>
					</div>
					<div class="zp-right">
						<img src="../assets/矩形 5 拷贝 2@2x.png" style="width: 0.065rem; height: 0.115rem;"/>
					</div>
				</li>
				<li @click="goDetails13">
					<div class="zp-left">
						<div class="zp-head"><span>财务分析经理</span><span>2人</span></div>
						<div class="zp-main">
							<img src="../assets/zplist/形状 51@2x.png" style="width: 0.09rem; height: 0.105rem;"/>
							北京
						</div>
					</div>
					<div class="zp-right">
						<img src="../assets/矩形 5 拷贝 2@2x.png" style="width: 0.065rem; height: 0.115rem;"/>
					</div>
				</li>
				<li @click="goDetails14">
					<div class="zp-left">
						<div class="zp-head"><span>财务会计</span><span>2人</span></div>
						<div class="zp-main">
							<img src="../assets/zplist/形状 51@2x.png" style="width: 0.09rem; height: 0.105rem;"/>
							北京
						</div>
					</div>
					<div class="zp-right">
						<img src="../assets/矩形 5 拷贝 2@2x.png" style="width: 0.065rem; height: 0.115rem;"/>
					</div>
				</li>
				<li @click="goDetails15">
					<div class="zp-left">
						<div class="zp-head"><span>广告产品leader</span><span>2人</span></div>
						<div class="zp-main">
							<img src="../assets/zplist/形状 51@2x.png" style="width: 0.09rem; height: 0.105rem;"/>
							北京
						</div>
					</div>
					<div class="zp-right">
						<img src="../assets/矩形 5 拷贝 2@2x.png" style="width: 0.065rem; height: 0.115rem;"/>
					</div>
				</li>
				<li @click="goDetails16">
					<div class="zp-left">
						<div class="zp-head"><span>架构师</span><span>2人</span></div>
						<div class="zp-main">
							<img src="../assets/zplist/形状 51@2x.png" style="width: 0.09rem; height: 0.105rem;"/>
							北京
						</div>
					</div>
					<div class="zp-right">
						<img src="../assets/矩形 5 拷贝 2@2x.png" style="width: 0.065rem; height: 0.115rem;"/>
					</div>
				</li>
				<li @click="goDetails17">
					<div class="zp-left">
						<div class="zp-head"><span>数据平台架构师</span><span>2人</span></div>
						<div class="zp-main">
							<img src="../assets/zplist/形状 51@2x.png" style="width: 0.09rem; height: 0.105rem;"/>
							北京
						</div>
					</div>
					<div class="zp-right">
						<img src="../assets/矩形 5 拷贝 2@2x.png" style="width: 0.065rem; height: 0.115rem;"/>
					</div>
				</li>
				<li @click="goDetails18">
					<div class="zp-left">
						<div class="zp-head"><span>前端开发工程师</span><span>2人</span></div>
						<div class="zp-main">
							<img src="../assets/zplist/形状 51@2x.png" style="width: 0.09rem; height: 0.105rem;"/>
							北京
						</div>
					</div>
					<div class="zp-right">
						<img src="../assets/矩形 5 拷贝 2@2x.png" style="width: 0.065rem; height: 0.115rem;"/>
					</div>
				</li>
				<li @click="goDetails19">
					<div class="zp-left">
						<div class="zp-head"><span>内审及流程总监</span><span>2人</span></div>
						<div class="zp-main">
							<img src="../assets/zplist/形状 51@2x.png" style="width: 0.09rem; height: 0.105rem;"/>
							北京
						</div>
					</div>
					<div class="zp-right">
						<img src="../assets/矩形 5 拷贝 2@2x.png" style="width: 0.065rem; height: 0.115rem;"/>
					</div>
				</li>
				<li @click="goDetails20">
					<div class="zp-left">
						<div class="zp-head"><span>品牌经理</span><span>2人</span></div>
						<div class="zp-main">
							<img src="../assets/zplist/形状 51@2x.png" style="width: 0.09rem; height: 0.105rem;"/>
							北京
						</div>
					</div>
					<div class="zp-right">
						<img src="../assets/矩形 5 拷贝 2@2x.png" style="width: 0.065rem; height: 0.115rem;"/>
					</div>
				</li>
				<li @click="goDetails21">
					<div class="zp-left">
						<div class="zp-head"><span>媒体运营主管</span><span>3人</span></div>
						<div class="zp-main">
							<img src="../assets/zplist/形状 51@2x.png" style="width: 0.09rem; height: 0.105rem;"/>
							广州、上海、西安
						</div>
					</div>
					<div class="zp-right">
						<img src="../assets/矩形 5 拷贝 2@2x.png" style="width: 0.065rem; height: 0.115rem;"/>
					</div>
				</li>
				<li @click="goDetails22">
					<div class="zp-left">
						<div class="zp-head"><span>广告销售总经理</span><span>7人</span></div>
						<div class="zp-main">
							<img src="../assets/zplist/形状 51@2x.png" style="width: 0.09rem; height: 0.105rem;"/>
							北京、成都、重庆、上海；杭州、广州、西安
						</div>
					</div>
					<div class="zp-right">
						<img src="../assets/矩形 5 拷贝 2@2x.png" style="width: 0.065rem; height: 0.115rem;"/>
					</div>
				</li>
				<li @click="goDetails23">
					<div class="zp-left">
						<div class="zp-head"><span>广告销售总监</span><span>14人</span></div>
						<div class="zp-main">
							<img src="../assets/zplist/形状 51@2x.png" style="width: 0.09rem; height: 0.105rem;"/>
							成都、重庆、上海；杭州、广州、西安
						</div>
					</div>
					<div class="zp-right">
						<img src="../assets/矩形 5 拷贝 2@2x.png" style="width: 0.065rem; height: 0.115rem;"/>
					</div>
				</li>
				<li @click="goDetails24">
					<div class="zp-left">
						<div class="zp-head"><span>广告销售经理</span><span>21人</span></div>
						<div class="zp-main">
							<img src="../assets/zplist/形状 51@2x.png" style="width: 0.09rem; height: 0.105rem;"/>
							北京、成都、重庆、上海；杭州、广州、西安
						</div>
					</div>
					<div class="zp-right">
						<img src="../assets/矩形 5 拷贝 2@2x.png" style="width: 0.065rem; height: 0.115rem;"/>
					</div>
				</li>
				<li @click="goDetails25">
					<div class="zp-left">
						<div class="zp-head"><span>客户成功经理</span><span>2人</span></div>
						<div class="zp-main">
							<img src="../assets/zplist/形状 51@2x.png" style="width: 0.09rem; height: 0.105rem;"/>
							重庆/西安
						</div>
					</div>
					<div class="zp-right">
						<img src="../assets/矩形 5 拷贝 2@2x.png" style="width: 0.065rem; height: 0.115rem;"/>
					</div>
				</li>
				<li @click="goDetails26">
					<div class="zp-left">
						<div class="zp-head"><span>客户发展经理</span><span>16人</span></div>
						<div class="zp-main">
							<img src="../assets/zplist/形状 51@2x.png" style="width: 0.09rem; height: 0.105rem;"/>
							杭州/广州/重庆/上海/西安
						</div>
					</div>
					<div class="zp-right">
						<img src="../assets/矩形 5 拷贝 2@2x.png" style="width: 0.065rem; height: 0.115rem;"/>
					</div>
				</li>
				
			</ul>
		</div>
	</div>
</template>

<script>
export default{
	data(){
		return {
			
		}
	},
	methods:{
		goDetails1(){
			this.$router.push('/details1')
		},
		goDetails2(){
			this.$router.push('/details2')
		},
		goDetails3(){
			this.$router.push('/details3')
		},
		goDetails4(){
			this.$router.push('/details4')
		},
		goDetails5(){
			this.$router.push('/details5')
		},
		goDetails6(){
			this.$router.push('/details6')
		},
		goDetails7(){
			this.$router.push('/details7')
		},
		goDetails8(){
			this.$router.push('/details8')
		},
		goDetails9(){
			this.$router.push('/details9')
		},
		goDetails10(){
			this.$router.push('/details10')
		},
		goDetails11(){
			this.$router.push('/details11')
		},
		goDetails12(){
			this.$router.push('/details12')
		},
		goDetails13(){
			this.$router.push('/details13')
		},
		goDetails14(){
			this.$router.push('/details14')
		},
		goDetails15(){
			this.$router.push('/details15')
		},
		goDetails16(){
			this.$router.push('/details16')
		},
		goDetails17(){
			this.$router.push('/details17')
		},
		goDetails18(){
			this.$router.push('/details18')
		},
		goDetails19(){
			this.$router.push('/details19')
		},
		goDetails20(){
			this.$router.push('/details20')
		},
		goDetails21(){
			this.$router.push('/details21')
		},
		goDetails22(){
			this.$router.push('/details22')
		},
		goDetails23(){
			this.$router.push('/details23')
		},
		goDetails24(){
			this.$router.push('/details24')
		},
		goDetails25(){
			this.$router.push('/details25')
		},
		goDetails26(){
			this.$router.push('/details26')
		},
	},
	mounted(){
		document.title = "招聘列表";
	}
}
</script>

<style scoped="scoped">
#main{
	width: 100%;
	line-height: 0.28rem;
	background-color: #F2F2F2;
}
#main span{
	display: block;
	margin-left: 0.09rem;
	text-align: left;
	color: #888888;
	font-size: 0.12rem;
}
#con{
	background: #FFFFFF;
}
ul{
	margin: 0 0.09rem;
}
li{
	width: 100%;
	display: flex;
	justify-content: space-between;
	align-items: center;
	text-align: left;
	border-bottom: 0.005rem solid #DBDBDB;
	padding: 0.21rem 0;
}
.zp-left .zp-head{
	font-size: 0.155rem;
	color: #333333;
}
.zp-left .zp-head span{
	margin-right: 0.1rem;
}
.zp-left .zp-main{
	font-size: 0.12rem;
	color: #888888;
	/*margin-left: 0.5625rem;*/
	margin-top: 0.085rem;
}
</style>