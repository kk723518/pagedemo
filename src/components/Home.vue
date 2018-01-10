<template>
  <div id="app">
    <div style="margin-bottom:20px;">
      <el-radio v-model="radio" label="1">备选项</el-radio>
      <el-radio v-model="radio" label="2">备选项</el-radio>
    </div>
    <div style="margin-bottom:20px;">
      <el-radio disabled v-model="radio1" label="禁用">备选项</el-radio>
      <el-radio disabled v-model="radio1" label="选中且禁用">备选项</el-radio>
    </div>
    <div style="margin-bottom:20px;">
      <el-radio-group v-model="radio3">
        <el-radio-button label="上海"></el-radio-button>
        <el-radio-button label="北京"></el-radio-button>
        <el-radio-button label="广州"></el-radio-button>
        <el-radio-button label="深圳"></el-radio-button>
      </el-radio-group>
    </div>
  </div>

</template>


<script>
export default {
   name: 'app',
   data(){
    return {
      radio:'1', //情况一
      radio1:'选中且禁用',//情况二
      radio3:'上海',//情况三
    }
  }

}
</script>

<style>

</style>
