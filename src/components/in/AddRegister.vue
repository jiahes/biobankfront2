<template>
  <div class="addRegister">
    <div class="top">
      <div class="input-group">
        <input type="text" class="form-control" placeholder="提示：请输入索引号">
        <span class="input-group-btn">
          <button class="btn btn-default" type="button">检索 <i class="fa fa-search"></i></button>
        </span>
      </div>
      <div class="checkbox">
        <label>
          <input type="checkbox"> 连续添加多个对象
        </label>
      </div>
    </div>
    <div class="info-box clearfix">
      <div class="panel panel-primary my-panel pull-left">
        <div class="panel-heading">
          <h3 class="panel-title text-center">基本信息</h3>
        </div>
        <div class="panel-body">
          <form class="form-horizontal">
            <div class="form-group form-group-sm">
              <label for="inputEmail3" class="col-sm-3 control-label">姓名</label>
              <div class="col-sm-9">
                <input type="text" class="form-control" id="inputEmail3" placeholder="Email">
              </div>
            </div>
            <div class="form-group form-group-sm">
              <label for="inputPassword3" class="col-sm-3 control-label">拼音码</label>
              <div class="col-sm-4">
                <input type="text" class="form-control" id="inputPassword3" placeholder="">
              </div>
              <div class="col-sm-4">
                <input type="text" class="form-control" id="inputPassword3" placeholder="">
              </div>
            </div>
            <div class="form-group form-group-sm">
              <label class="col-sm-3 control-label">性别</label>
              <div class="col-sm-9">
                <label class="radio-inline">
                  <input type="radio" name="sex" id="inlineRadio2" value="option2"> 男
                </label>
                <label class="radio-inline">
                  <input type="radio" name="sex" id="inlineRadio3" value="option3"> 女
                </label>
              </div>
            </div>
            <div class="form-group form-group-sm">
              <label class="col-sm-3 control-label">年龄/生日</label>
              <div class="col-sm-4">
                <input type="text" class="form-control" id="age" placeholder="年龄">
              </div>
              <div class="col-sm-4">
                <input type="text" class="form-control" id="birthday" placeholder="生日">
              </div>
            </div>
            <div class="form-group form-group-sm">
              <label class="col-sm-3 control-label">归属机构</label>
              <div class="col-sm-9">
                <select class="form-control input-sm">
                  <option value="嘉和美康测试医院">嘉和美康测试医院</option>
                </select>
              </div>
            </div>
            <div class="form-group form-group-sm">
              <label class="col-sm-3 control-label">共享标记</label>
              <div class="col-sm-9">
                <label class="radio-inline">
                  <input type="radio" name="mark" id="inlineRadio2" value="option2"> 正常
                </label>
                <label class="radio-inline">
                  <input type="radio" name="mark" id="inlineRadio3" value="option3"> 共享
                </label>
              </div>
            </div>
          </form>
        </div>
      </div>
      <div class="panel panel-primary my-panel pull-right">
        <div class="panel-heading">
          <h3 class="panel-title text-center">登记信息</h3>
        </div>
        <div class="panel-body">
          <form class="form-horizontal">
            <div class="form-group form-group-sm" v-for="item in items">
              <label class="col-sm-3 control-label">{{item.title}}</label>
              <div class="col-sm-9" v-if="item.type === 'select'">
                <template v-if="item.bindEvent === 'yes'">
                  <select @change="valChange();" class="form-control input-sm" v-model="item.defaultV">
                    <option :value="value" v-for="value in item.values">{{value}}</option>
                  </select>
                </template>
                <template v-if="item.bindEvent === ''">
                  <select class="form-control input-sm" v-model="item.defaultV">
                    <option :value="value" v-for="value in item.values">{{value}}</option>
                  </select>
                </template>
                  
              </div>
              <div class="col-sm-9" v-if="item.type==='input'">
                <input type="text" class="form-control" v-model="item.value" id="index" placeholder="">
              </div>
              <div class="col-sm-9" v-if="item.type==='radio'">
                <label class="radio-inline" v-for="value in item.values">
                  <input type="radio" name="sex" id="inlineRadio2" v-model="item.defaultV" :value="value"> {{value}}
                </label>
              </div>
            </div>
          </form>
        </div>
      </div>
      <div class="clearfix"></div>
      <div class="boxs-box text-center">
        <button class="btn btn-lg btn-success" @click="save">保存</button>
        &nbsp;&nbsp;
        <button class="btn btn-lg btn-warning">取消</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'addRegister',
  methods:{
    valChange: function () {
      this.items[1].value = '5';
      this.items[4].defaultV = '嘉和美康测试医院3';
    },
    save: function () {
      Hub.$emit('addData', {
        id: '3',
        key: '3',
        name: '王五',
        project: 'TTT'
      });
    }
  },
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      items: [
        {
          title: '研究项目',
          type: 'select',
          values: ['项目1','项目2','项目3'],
          defaultV: '项目3',
          bindEvent: 'yes'
        },{
          title: '索引',
          type: 'input',
          value: '2'
        },{
          title: '本次诊断',
          type: 'input',
          value: ''
        },{
          title: '其它诊断',
          type: 'input',
          value: ''
        },{
          title: '来源医院',
          type: 'select',
          values: ['嘉和美康测试医院1', '嘉和美康测试医院2', '嘉和美康测试医院3'],
          defaultV: '嘉和美康测试医院2',
          bindEvent: ''
        },{
          title: '登记科室',
          type: 'select',
          values: ['登记科室1', '登记科室2', '登记科室2'],
          defaultV: '登记科室2',
          bindEvent: ''
        },{
          title: '标本负责人',
          type: 'select',
          values: ['标本负责人1', '标本负责人2', '标本负责人3'],
          defaultV: '标本负责人2',
          bindEvent: ''
        },{
          title: '登记日期',
          type: 'input',
          value: ''
        },{
          title: '登记类型',
          type: 'radio',
          values: ['住院', '门诊', '随访', '体检'],
          defaultV: '随访',
          bindEvent: ''
        },{
          title: '研究编号',
          type: 'input',
          value: ''
        },{
          title: '来源科室',
          type: 'input',
          value: ''
        },{
          title: '稀缺标记',
          type: 'radio',
          values: ['正常', '稀缺'],
          defaultV: '稀缺',
          bindEvent: ''
        },{
          title: '化疗标记',
          type: 'radio',
          values: ['无', '化疗前', '化疗后'],
          defaultV: '化疗前',
          bindEvent: ''
        },{
          title: '就诊备注',
          type: 'input',
          value: '',
        }
      ]
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .addRegister{
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
  }
  .top{
    height: 80px;
  }
  .info-box{
    background-color: transparent;
    padding: 0 5px;
    position: absolute;
    top: 80px;
    bottom: 0;
    left: 0;
    right: 0;
    overflow: auto;
  }
  .my-panel{
    width: 49%;
    height: auto;
    overflow: auto;
  }
  .boxs-box{
  }
</style>
