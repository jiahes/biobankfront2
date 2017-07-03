// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.


import Vue from 'vue'
import App from './App'
import router from './router'

//全局引入bootstrap以及adminlte的样式文件
require("./assets/libs/bootstrap/css/bootstrap.min.css")
require("./assets/libs/adminlte/css/AdminLTE.min.css")
require("./assets/libs/adminlte/css/skins/skin-blue.css")

//全局引入bootstrap的js文件
require("./assets/libs/bootstrap/js/bootstrap.min.js")
require("./assets/libs/adminlte/js/app.js")

//全局引入自定义的comomon的样式以及js文件
require("./css/common.css")
require("./js/common.js")

// 全局引入bootstrap-table的样式以及.js文件
require("./assets/libs/bootstrap-table/bootstrap-table.min.css")
require("./assets/libs/bootstrap-table/bootstrap-table.min.js")
require("./assets/libs/bootstrap-table/bootstrap-table-zh-CN.min.js")

//全局引入table-export以及bootstrap-table的文件
require("./assets/libs/table-export/tableExport.min.js")
require("./assets/libs/table-export/bootstrap-table-export.js")

window.Hub = new Vue();

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
