<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#app {
  font-family: 'FZLTXHK--GBK1-0';
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  width: 100%;
  height: 100%;
}
input,textarea{
	outline: none;
}
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  margin: 0;
}
a {
  color: #42b983;
}
p{
	margin: 0;
}
em{
	font-style: normal;
}
.txt{
	text-indent: 0.2rem;
}
.txt::-webkit-input-placeholder{
	color: #DBDBDB;
}
html,body,#container{
	width: 100%;
	height: 100%;
	margin: 0;
	padding: 0;
	background-color: #F2F2F2;
}
/*#header{
	width: 100%;
	height: 2.5rem;
	background-color: #000;
	display: flex;
	justify-content: space-between;
	color: #fff;
	align-items: center;
}*/
#content{
	width: 100%;
	height: 100%;
	overflow: auto;
}
</style>
