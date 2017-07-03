<template>
  <div class="register">
    <div id="toolbar" style="">
          <div style="width: 250px;margin: 0 5px 0 5px;" class="pull-left">
            <label for="data" class="">日期：</label>
            <input type="text" class="" style="height: 30px;width:75px;" @click="openByDrop3($event)" v-model="calendar3.display" readonly>-
            <input type="text" class="" style="height: 30px;width:75px;" @click="openByDrop4($event)" v-model="calendar4.display" readonly>
          </div>
           <button class="btn btn-success addDisease btn-sm pull-left">查询</button>
           <button class="btn btn-success addDisease btn-sm pull-left">(1)附加排序</button>
           <button class="btn btn-success addDisease btn-sm pull-left">(2)修改出库量</button>
           <button class="btn btn-success addDisease btn-sm pull-left">清空出库预约</button>
           <button class="btn btn-success addDisease btn-sm pull-left">生成出库预约单</button>
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

import calendar from "../plugins/calendar.vue"
</script>
</style>
