<template>
  <div class="tableLeft">
    <div class="panel panel-default">
      <div class="panel-heading">今日登记<b style="color:red;"> 1 </b>例子</div>
      <table class="table table-bordered table-hover text-center">
        <tr>
          <th>序号</th>
          <th>索引</th>
          <th>姓名</th>
          <th>项目</th>
        </tr>
        <tr v-for="item in items">
          <td>{{item.id}}</td>
          <td>{{item.key}}</td>
          <td>{{item.name}}</td>
          <td>{{item.project}}</td>
        </tr>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  name: 'tableLeft',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      items: [
        {
          id: 1,
          key: 1,
          name: '张三',
          project: "NFM"
        },
        {
          id: 2,
          key: 2,
          name: '李四',
          project: "TTT"
        }
      ]
    }
  },
  created () {
    console.log(this);
    let self = this;
    Hub.$on("addData", function(data) {
      console.log(self);
      self.items.push(data);
    })
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
  .tableLeft{
    position: absolute;
    left: 0;
    top: 0;
    bottom: 0;
    width: 300px;
    padding: 0 5px;
  }
  .table.table-bordered tr th, .table.table-bordered tr td{
    border: 1px solid #ddd;
  }
</style>
