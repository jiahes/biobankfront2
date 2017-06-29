<template>
  <div class="handle">
    处理
  </div>
</template>

<script>
export default {
  name: 'hello',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .handle{
    position: absolute;
    left: 200px;
    right: 0;
    top: 0;
    bottom: 0;
  }
</style>
