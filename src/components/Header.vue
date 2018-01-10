<template>
    <el-row class="hd">
      <el-col :span="24" class="">
        <div class="grid-content">
          <i class="lt">大委员平台</i>
          <div class="rt">
             <i class="img_30"></i><i class="user-name">admin</i>
             <el-dropdown>
                <span class="el-dropdown-link">下拉菜单<i class="el-icon-arrow-down el-icon--right"></i>
                </span>
                <el-dropdown-menu slot="dropdown">
                  <el-dropdown-item>黄金糕</el-dropdown-item>
                  <el-dropdown-item>狮子头</el-dropdown-item>
                  <el-dropdown-item>螺蛳粉</el-dropdown-item>
                </el-dropdown-menu>
             </el-dropdown>
             <ul class="ul-father ul-box">
                <li class="li-father" v-for="item in arr" v-on:mouseover="item.show = ! item.show" v-on:mouseout="item.show = ! item.show" v-bind:class="{bgchange: item.show}">
                <!-- 路由切换组件 -->
                    <router-link v-bind:to="item.url">
                        {{ item.title }}
                    </router-link>
                    <template v-if="item.value">
                        <ul class="ul-child" v-show="item.show">
                            <li class="li-child" v-for="x in item.value">
                                <a href="javascript:;">
                                    <i class="line"></i> {{ x }}
                                </a>
                            </li>
                        </ul>
                    </template>
                </li>
            </ul>
            <el-input v-model="input" placeholder="请输入内容"></el-input>
          </div>
        </div>
      </el-col>
    </el-row>

</template>

<script>
    export default {
        //name: "app-nav",
        data (){
            return {
                arr: [
                    {
                        title: "管理社团", 
                        //value: ["一","二","三","四"],
                        url: "/",
                        show: false
                    },
                    {
                        title: "网站装修" ,
                        //value: ["二","二","三","四"],
                        url: "/content",
                        show: false
                    }
                ],
                input: ''
            }
        }
    }
</script>

<style>
  i{font-style:normal;}
  .hd{
    display:block;
    width:100%;
    height:200px; 
    float:left; 
    color:#fff; 
    background-color:#2a2e4b;
  }
  .grid-content{
    display: block;
    width:980px;
    margin:0 auto;
    height:40px;
    line-height:40px;

  }
  .lt{
    float:left;
  }
  .rt{
    float:right;
    display:block;
    height:40px;
  }
  .line{
    border-left:1px solid #fff;
    height:20px;
    display:inline-block;
    float:left;
  }
  .img_30{
    display:block; 
    float:left;
    margin:5px 10px 5px 0; 
    width:28px;
    height:28px;
    border:1px solid #fff;
    border-radius:50%;
  }
  .user-name{
    float:left;
    margin-right:10px;
  }
  .el-dropdown{
    color:#fff;
    float:left;
    cursor:pointer;
  }

  .ul-box{
    display:inline-block;
    margin:0 0 0 10px;
    padding:0;
    float:left;
  }
  .ul-box li{
    float:left;
    list-style:none;
    padding:0 10px;
  }
  .ul-box li a{
    color:#fff;
    text-decoration:none;
    padding:0 10px 0 20px;
    border-left:1px solid #fff;
  }


</style>
