<template>
  <div class="sampling">
    <div id="toolbar">
        <div class="pull-left">
          <label for="projects" class="">选择项目：</label>
          <select name="" id="projects">
            <option value="全部研究项目">全部研究项目1</option>
            <option value="全部研究项目">全部研究项目2</option>
            <option value="全部研究项目">全部研究项目3</option>
          </select>
          <button class="btn btn-primary btn-sm" @click="sampl();">标本采集</button>
        </div>
        <div style="width: 120px;margin: 0 5px 0 5px;" class="pull-left">
          <label for="all" class="">全部</label>
          <input type="radio" id="all" name="loginTime">
          <label for="today" class="">今日登记</label>
          <input type="radio" id="today" name="loginTime">
        </div>
        <div style="width: 150px;margin: 0 5px 0 5px;" class="pull-left">
          <label for="investigate" class="">排查</label>
          <input type="checkbox" id="investigate" name="loginTime">
          &nbsp;
          <label for="hasSmplied" class="">显示已采样</label>
          <input type="checkbox" id="hasSmplied" name="loginTime">
        </div>
        <div class="pull-right" style="width: 170px;">
          <div class="input-group input-group-sm" style="">
            <input type="text" class="form-control" id="searchInput" placeholder="请输入检索关键字">
            <span class="input-group-btn" style="top: -2px;">
              <button class="btn btn-default" type="button">搜索</button>
            </span>
          </div>
        </div>
    </div>
    <table id="tb_departments"></table>
    <div class="modal fade bs-example-modal-lg" id="myModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">
      <div class="modal-dialog modal-lg" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
            <h4 class="modal-title" id="myModalLabel"><b>内分泌科研究项目</b>标本采集方案</h4>
          </div>
          <div class="modal-body">
            <table class="table table-bordered text-center">
                <tr>
                    <th><input type="checkbox"></th>
                    <th>编号</th>
                    <th>名称</th>
                    <th>采集量</th>
                    <th>采集数</th>
                    <th>采集部位</th>
                    <th>采集描述</th>
                </tr>
                <tr>
                    <td><input type="checkbox"></td>
                    <td>C03</td>
                    <td>静脉血（EDA）</td>
                    <td><input type="text"> ml</td>
                    <td><input type="text"></td>
                    <td>
                        <select name="" id="">
                            <option value=""></option>
                        </select>
                        <select name="" id="">
                            <option value=""></option>
                        </select>
                    </td>
                    <td>
                        <input type="text">
                    </td>
                </tr>
            </table>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
            <button type="button" class="btn btn-primary">Save changes</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
var TableInit = function () {
    var oTableInit = new Object();
    //初始化Table
    oTableInit.Init = function () {
        $('#tb_departments').bootstrapTable({
            url: commonUrl + 'disease/search',         //请求后台的URL（*）
            method: 'get',                      //请求方式（*）
            toolbar: '#toolbar',                //工具按钮用哪个容器
            striped: true,                      //是否显示行间隔色
            cache: false,                       //是否使用缓存，默认为true，所以一般情况下需要设置一下这个属性（*）
            pagination: true,                   //是否显示分页（*）
            sortable: false,                     //是否启用排序
            sortOrder: "asc",                   //排序方式
            queryParams: oTableInit.queryParams,//传递参数（*）
            sidePagination: "server",           //分页方式：client客户端分页，server服务端分页（*）
            pageNumber:1,                       //初始化加载第一页，默认第一页
            pageSize: 10,                       //每页的记录行数（*）
            pageList: [10, 25, 50, 100],        //可供选择的每页的行数（*）
            search: false,                       //是否显示表格搜索，此搜索是客户端搜索，不会进服务端，所以，个人感觉意义不大
            strictSearch: true,
            showColumns: true,                  //是否显示所有的列
            showRefresh: true,                  //是否显示刷新按钮
            minimumCountColumns: 2,             //最少允许的列数
            clickToSelect: false,                //是否启用点击选中行
                                    //行高，如果没有设置height属性，表格自动根据记录条数觉得表格高度
            height:$('html').height() - 101,
            uniqueId: "ID",                     //每一行的唯一标识，一般为主键列
            showToggle:true,                    //是否显示详细视图和列表视图的切换按钮
            cardView: false,                    //是否显示详细视图
            detailView: false,                   //是否显示父子表
            showExport: true,                     //是否显示导出
            exportDataType: "basic",              //basic', 'all', 'selected'.
            exportTypes: ['excel'],
            columns: [{
                field: 'state',
                checkbox: true
            }, {
                field: 'omin',
                title: '序号'
            }, {
                field: 'disease_english_name',
                title: '索引号'
            }, {
                field: 'disease_english_name2',
                title: '姓名'
            }, {
                field: 'disease_chinese_name',
                title: '性别'
            }, {
                field: 'disease_chinese_name2',
                title: '年龄'
            }, {
                field: 'genetic_model',
                title: '登记日期'
            }, {
                field: 'disease_type',
                title: '研究编号'
            }, {
                field: 'disease_other_name',
                title: '诊断'
            }, {
                field: '',
                title: '登记次'
            }, {
                field: '',
                title: '最近就诊日期'
            }, {
                field: '',
                title: '归属项目'
            }, {
                field: 'operate',
                title: '操作',
                events: operateEvents,
                formatter: oTableInit.operateFormatter
            }
            ]
        });
    };

    //得到查询的参数
    oTableInit.queryParams = function (params) {
        var temp = {   //这里的键的名字和控制器的变量名必须一直，这边改动，控制器也需要改成一样的
            limit: params.limit,   //页面大小
            offset: params.offset,  //页码
            search: $("#searchInput").val()
        };
        return temp;
    };

    oTableInit.operateFormatter = function(value, row, index) {
        return [
            '<button class="btn btn-primary btn-xs edit ">查看详情</button>'
        ].join('&nbsp;');
    };

    window.operateEvents = {
        'click .edit': function (e, value, row, index) {
            console.log(value, row, index);
        }
    };
    window.refreshData = function () {
        $('#tb_departments').bootstrapTable('refresh', {
            silent : true
        });
    };
    window.removedata = function (id) {
        $('table').bootstrapTable('remove', {
            field: 'id',
            values: id
        });
    }
    return oTableInit;
};
export default {
  name: 'hello',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      hasSelected: true,
      body: {
        "循环系统": ["静脉"],
        "运动系统": ["骨髓"],
        "消化系统": ["胃","食管","肝脏","胰腺"],
        "呼吸系统": ["肺","气管","支气管"],
        "泌尿系统": ["肾","膀胱","输尿管"],
        "淋巴系统": ["淋巴导管","淋巴结"]
      }
    }
  },
  mounted () {
    var oTable = new TableInit();
    oTable.Init();
    $("#searchInput").on('keyup', function(event) {
        if(event.keyCode==13) {
            refreshData();
        }
    });

  },
  methods: {
    sampl() {
        if(this.hasSelected) {
            $('#myModal').modal();
        } else {
            Hub.$emit("alert", "请选择要采集的对象");
        }
        
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .sampling{
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    padding: 5px;
    overflow: auto;
  }
  #toolbar > div{
    margin: 0 5px;
  }
</style>
