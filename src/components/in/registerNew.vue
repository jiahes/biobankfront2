<template>
  <div class="registerNew">
    <table-left></table-left>
    <table-right></table-right>
  </div>
</template>

<script>
import tableLeft from "./TableLeft.vue";
import tableRight from "./TableRight.vue";
export default {
  name: 'registerNew',
  components: {
    tableLeft,
    tableRight
  },
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .registerNew{
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
  }
</style>
