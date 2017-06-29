<template>
  <div class="in content-wrapper">
    <div class="menu-box" style="background-color: #222d32">
      <ul class="sidebar-menu">
        <li class="header">入库步骤</li>
        <li v-for="step in steps">
          <a :href="step.url">
            <i class="fa fa-circle-o text-red"></i> 
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
  name: 'in',
  data () {
    return {
      steps: [
        {
          text: '登记',
          url: '#in/register'
        },
        {
          text: '采样',
          url: '#in/sampling'
        },
        {
          text: '送存',
          url: '#in/send'
        },
        {
          text: '接受',
          url: '#in/accept'
        },
        {
          text: '处理',
          url: '#in/handle'
        },
        {
          text: '入库',
          url: '#in/save'
        }
      ]
    }
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
    width: 200px;
    position: absolute;
    top: 0px;
    bottom: 0;
    background-color: #222d32;
  }
</style>
