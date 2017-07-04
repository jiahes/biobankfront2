<template>
  <div class="">
    <div class="alert alert-danger alert-dismissible" role="alert" :style="alertS">
      <button type="button" class="close" @click="toggle();" aria-label="Close"><span aria-hidden="true">&times;</span></button>
      <strong>Warning!</strong> {{message}}
    </div>
  </div>
</template>

<script>
export default {
  name: 'alert',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      alertS: {
        top: '0px',
        opacity: '0'
      },
      message: '提示信息'
    }
  },
  methods: {
    toggle() {
      this.alertS.top = this.alertS.top == '50px' ? '0px' : '50px';
      this.alertS.opacity = this.alertS.opacity == '1' ? '0' : '1';
    }
  },
  created() {
    var self = this;
    Hub.$on('alert', function(data) {
      console.log(data);
      self.message = data;
      self.toggle();
    });
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.alert{
  position: fixed;
  width: 100%;
  z-index: 888;
  transition: all 0.5s;
}
</style>
