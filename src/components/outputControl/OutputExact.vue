<template>
  <div class="register">
    <div id="toolbar" style="">
          <div style="width: 250px;margin: 0 5px 0 5px;" class="pull-left">
            <label for="data" class="">日期：</label>
            <input type="text" class="" style="height: 30px;width:75px;" @click="openByDrop3($event)" v-model="calendar3.display" readonly>-
            <input type="text" class="" style="height: 30px;width:75px;" @click="openByDrop4($event)" v-model="calendar4.display" readonly>
          </div>
           <button class="btn btn-success addDisease btn-sm">查询</button>
           <button class="btn btn-success addDisease btn-sm">导出excel</button>
      <!-- </div> -->
    </div>
    
    <transition name="fade">
    <div class="calendar-dropdown" :style="{'left':calendar3.left+'px','top':calendar3.top+'px'}" v-if="calendar3.show">
        <calendar :zero="calendar3.zero" :lunar="calendar3.lunar" :value="calendar3.value" :begin="calendar3.begin" :end="calendar3.end" @select="calendar3.select"></calendar>
    </div>
    </transition>

    <transition name="fade">
    <div class="calendar-dropdown" :style="{'left':calendar4.left+'px','top':calendar4.top+'px'}" v-if="calendar4.show">
        <calendar :zero="calendar4.zero" :lunar="calendar4.lunar" :value="calendar4.value" :begin="calendar4.begin" :end="calendar4.end" @select="calendar4.select"></calendar>
    </div>
    </transition>

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
                title: '出库单号'
            }, {
                field: 'disease_english_name2',
                title: '课题项目'
            }, {
                field: 'disease_chinese_name',
                title: '出库说明'
            }, {
                field: 'disease_chinese_name2',
                title: '申请人'
            }, {
                field: 'genetic_model',
                title: '批准人'
            }, {
                field: 'disease_type',
                title: '出库日期'
            }, {
                field: 'disease_other_name',
                title: '出库人'
            }, {
                field: '',
                title: '样本数'
            }, {
                field: '',
                title: '状态'
            },{
                field: '',
                title: '查看'
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
import calendar from "../plugins/calendar.vue"
export default {
  name: 'hello',
  components: {
    calendar
  },
  data () {
    return {
        msg: 'Welcome to Your Vue.js App',
        calendar3:{
            display:"2018/02/16",
            show:false,
            zero:true,
            value:[2018,2,16], //默认日期
            lunar:true, //显示农历
            select:(value)=>{
                this.calendar3.show=false;
                this.calendar3.value=value;
                this.calendar3.display=value.join("/");
            }
        },
        calendar4:{
            display:"2018/02/17",
            show:false,
            zero:true,
            value:[2018,2,17], //默认日期
            lunar:true, //显示农历
            select:(value)=>{
                this.calendar4.show=false;
                this.calendar4.value=value;
                this.calendar4.display=value.join("/");
            }
        }
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
  methods: {
    openByDrop3(e){
            this.calendar3.show=true;
            this.calendar3.left=e.target.offsetLeft+19;
            this.calendar3.top=e.target.offsetTop+70;
           
            e.stopPropagation();
            window.setTimeout(()=>{
                document.addEventListener("click",(e)=>{
                    this.calendar3.show=false;
                    document.removeEventListener("click",()=>{},false);
                },false);
            },1000)
        },
    openByDrop4(e){
            this.calendar4.show=true;
            this.calendar4.left=e.target.offsetLeft+19;
            this.calendar4.top=e.target.offsetTop+70;
           
            e.stopPropagation();
            window.setTimeout(()=>{
                document.addEventListener("click",(e)=>{
                    this.calendar4.show=false;
                    document.removeEventListener("click",()=>{},false);
                },false);
            },1000)
        },
  }
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
  /*下拉框*/
.calendar-dropdown{
    background: #fff;
    position: absolute;
    left:0;
    top:0;
    padding:20px;
    border: 1px solid #eee;
    border-radius: 2px;
    z-index: 999;
}
.calendar-dropdown:before {
    position: absolute;
    left:30px;
    top: -10px;
    content: "";
    border:5px solid rgba(0, 0, 0, 0);
    border-bottom-color: #DEDEDE;
}
.calendar-dropdown:after {
    position: absolute;
    left:30px;
    top: -9px;
    content: "";
    border:5px solid rgba(0, 0, 0, 0);
    border-bottom-color: #fff;
}
</style>
