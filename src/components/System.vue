<template>
  <div class="in content-wrapper">
    <div class="menu-box" style="background-color: #222d32">
      <ul class="sidebar-menu">
        <li class="header">系统管理</li>
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
  name: 'system',
  data () {
    return {
      steps: [
        {
          text: '用户',
          url: '#system/user'
        },
        {
          text: '角色',
          url: '#system/role'
        },
        {
          text: '权限',
          url: '#system/authority'
        }
      ]
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .system{
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
