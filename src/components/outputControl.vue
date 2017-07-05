<template>
  <div class="in content-wrapper">
    <div class="menu-box" style="background-color: #222d32">
      <ul class="sidebar-menu">
        <li class="header">入库步骤</li>
        <li v-for="(step,index) in steps" :class="step.className">
          <a :href="step.url" @click="stepF(index);">
            <i class="fa fa-circle-o text-red"></i> 
            <span>{{step.text}}</span>
          </a>
        </li>
      </ul>
    </div>
    <div class="content-tables">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import _ from "lodash"
export default {
  name: 'in',
  data () {
    return {
      steps: [
        {
          text: '创建质控',
          url: '#outputControl/createControl',
          className: 'active'
        },
        {
          text: '出库确认',
           url: '#outputControl/outputDefinite',
          className: ''
        },
        {
          text: '出库提取',
          url: '#outputControl/outputExact',
          className: ''
        },
        {
          text: '数据导入',
           url: '#outputControl/dataImport',
          className: ''
        },
        {
          text: '质控记录',
           url: '#outputControl/controlRecord',
          className: ''
        }
      ]
    }
  },
  methods: {
    stepF: function(index) {
      console.log(index);
      for(let i = 0; i < this.steps.length; i++) {
        this.steps[i].className = "";
      }
      this.steps[index].className = "active";
    }
  },
  created() {
    console.log(window.location.href);
    var href = window.location.href;
    var hash = href.match(/#.*/)[0];
    var index = _.findIndex(this.steps, function(step) {
      return step.url == hash;
    });
    for(let i = 0; i < this.steps.length; i++) {
      this.steps[i].className = "";
    }
    this.steps[index].className = "active";

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .in{
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
  }
  .menu-box{
    width: 100px;
    position: absolute;
    top: 0px;
    bottom: 0;
    background-color: #222d32;
  }
  .content-tables{
    position: absolute;
    left: 100px;
    top: 0;
    bottom: 0;
    right: 0;
  }
</style>
