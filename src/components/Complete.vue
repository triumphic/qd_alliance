<template>
	<div id="container" class="complete">
		<!--<div id="header">
			<p><</p>
			<span>完成</span>
			<p></p>
		</div>-->
		<div id="content">
			<!--<mt-progress :value="60" id="progress">
			  <div slot="start">0%</div>
			  <div slot="end">100%</div>
			</mt-progress>-->
			<img src="../assets/complete/组 14@2x.png" style="width: 0.49rem; height: 0.49rem; margin-top: 0.755rem;"/>
			<input type="submit" value="完成" id="subBn"/>
		</div>
	</div>
</template>

<script>
import Vue from 'vue'
import { Progress } from 'mint-ui';
Vue.component(Progress.name, Progress);
export default {
  name: 'Login',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
	},
	mounted(){
		document.title = "完成";
	}
}
</script>

<style scoped="scoped">
#progress{
	margin-top: 60%;
}
#subBn{
	background-color: #EA8C21;
	width: 3.56rem;
	height: 0.415rem;
	margin:auto;
	color: #fff;
	border: 0;
	margin-top: 0.695rem;
	border-radius: 0.04rem;
	font-size: 0.16rem;
}
</style>