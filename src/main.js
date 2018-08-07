// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import MintUI from 'mint-ui'
import axios from 'axios'
import 'mint-ui/lib/style.css'
import 'swiper/dist/css/swiper.css';

// 解决IOS点击事件响应慢问题
import FastClick from 'fastclick';
new FastClick(document.body);

Vue.config.productionTip = false
Vue.prototype.$axios = axios;

/* eslint-disable no-new */
Vue.use(MintUI)

new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
