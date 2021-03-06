// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import 'babel-polyfill'
import '@/styles/rem'
import '@/styles/reset.css'
import '@/styles/iconfont.css'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.css'
import axios from 'axios'
Vue.prototype.axios=axios;

Vue.use(VueAwesomeSwiper, /* { default global options } */)

import FastClick from 'fastclick'


Vue.config.productionTip = false

if ('addEventListener' in document) {
	document.addEventListener('DOMContentLoaded', function() {
		FastClick.attach(document.body);
	}, false);
}

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
