<template>
  <div class="register">
    <div id="toolbar" style="">
           <button class="btn btn-success addDisease btn-sm ">(1)附加排序</button>
           <button class="btn btn-success addDisease btn-sm ">(2)修改出库量</button>
           <button class="btn btn-success addDisease btn-sm ">清空出库预约</button>
           <button class="btn btn-success addDisease btn-sm ">生成出库预约单</button>
      <!-- </div> -->
    </div>
    

    <table id="tb_departments"></table>
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
            height:$('.register').height() - 50,
            uniqueId: "ID",                     //每一行的唯一标识，一般为主键列
            showToggle:true,                    //是否显示详细视图和列表视图的切换按钮
            cardView: false,                    //是否显示详细视图
            detailView: false,                   //是否显示父子表
            columns: [{
                field: 'omin',
                title: '序号'
            }, {
                field: 'disease_english_name',
                title: '课题'
            }, {
                field: 'disease_english_name2',
                title: '编码'
            }, {
                field: 'disease_chinese_name',
                title: '名称'
            }, {
                field: 'disease_chinese_name2',
                title: '库存量'
            }, {
                field: 'genetic_model',
                title: '出库量'
            }, {
                field: 'disease_type',
                title: '存储位置'
            }, {
                field: 'disease_other_name',
                title: '冻融'
            }, {
                field: '',
                title: '索引'
            }, {
                field: '',
                title: '姓名'
            },{
                field: '',
                title: '性别'
            },{
                field: '',
                title: '年龄'
            },{
                field: '',
                title: '诊断'
            },{
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
    }
  },
  mounted () {
    var oTable = new TableInit();
    oTable.Init();
    $(".addDisease").on('click', function(event) {

    });
    $("#searchInput").on('keyup', function(event) {
        if(event.keyCode==13) {
            refreshData();
        }
    });

  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .register{
    position: absolute;
    left: 0px;
    right: 0;
    top: 0;
    bottom: 0;
    padding: 0 5px 0 5px;
    overflow: auto;
  }
</style>
