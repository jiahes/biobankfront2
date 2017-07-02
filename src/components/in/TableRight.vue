<template>
  <div class="tableRight">
    <ul class="nav nav-tabs" id="myTabs">
      <li role="presentation" class="active"><a href="#in/registerNew/addRegister">1.新增登记</a></li>
      <li role="presentation"><a href="#in/registerNew/schedule">2.手术排班表</a></li>
      <li role="presentation"><a href="#in/registerNew/import">3.导入数据</a></li>
      <li role="presentation"><a href="#in/registerNew/edc">4.EDC数据</a></li>
    </ul>
    <div class="step-box">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {
  name: 'tableRight',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  mounted() {
    $("#myTabs li").on('click', function(event) {
      $(this).addClass('active').siblings().removeClass('active');
    });
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .tableRight{
    position: absolute;
    left: 300px;
    right: 0;
    top: 0;
    bottom: 0;
  }
  .step-box{
    position: absolute;
    top: 50px;
    left: 0;
    right: 0;
    bottom: 0;
  }
</style>
