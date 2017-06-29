// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.


import Vue from 'vue'
import App from './App'
import router from './router'

require("./assets/libs/bootstrap/css/bootstrap.min.css")
require("./assets/libs/adminlte/css/AdminLTE.min.css")
require("./assets/libs/adminlte/css/skins/skin-blue.css")

require("./assets/libs/bootstrap/js/bootstrap.min.js")
require("./assets/libs/adminlte/js/app.js")


require("./css/common.css")
require("./js/common.js")


Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
