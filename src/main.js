// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

require('./assets/js/rem.js');
/*引入第三方文件rem.js，在全局都起作用*/
require('./assets/fonts/glyphicons/css/glyphicons.css');
/* 有公共样式reset.css,并在App.vue中引入，作用域设为全局 */
require ("./assets/css/reset.css");
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
