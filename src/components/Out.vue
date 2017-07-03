<template>
  <div class="in content-wrapper">
    <div class="menu-box" style="background-color: #222d32">
      <ul class="sidebar-menu">
        <li v-for="step in steps">
          <a :href="step.url">
            <i class="fa fa-circle-o text-green"></i> 
            <span>{{step.text}}</span>
          </a>
        </li>
      </ul>
    </div>
    <div class="">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {
  name: 'out',
  data () {
    return {
      steps: [
        {
          text: '出库预约',
          url: '#out/book',
          className: 'active'
        },
        {
          text: '库存查询',
          url: '#out/requiry',
           className: ''
        },
        {
          text: '出库确认',
          url: '#out/definite',
          className: ''
        },
        {
          text: '出库查询',
          url: '#out/inquiry',
          className: ''
        }
      ]
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .out{
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
  }
  .menu-box{
    width: 200px;
    position: absolute;
    top: 0px;
    bottom: 0;
    background-color: #222d32;
  }
</style>
