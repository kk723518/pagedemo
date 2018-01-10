<template>
		<nav class="app-nav">
			<ul class="ul-father">
					<li class="li-father" v-for="item in arr" v-on:mousein="item.show = ! item.show"  v-on:mouseout="item.show = ! item.show">
             <router-link v-bind:to="item.url">
						 		 {{ item.title }}
             </router-link>
						 <template v-if="item.value">
						 		 <ul class="ul-child" v-show="item.show">
									  <li class="li-child" v-for="x in item.value">
										   <a href="javascript:;">
											    {{ x }}
										   </a>	
										</li>	 	
								 </ul>
						 </template>			
					</li>
			</ul>
	</nav>

	<!--<nav class="app-nav">
        <ul class="ul-father">
            <!--<li class="li-father" v-for="item in arr" v-on:mousein="item.show = ! item.show" v-on:mouseout="item.show = ! item.show" v-bind:class="{bgchange: item.show}">-->
            <!--<li class="li-father" v-for="item in arr" v-on:mousein="item.show = ! item.show" v-on:mouseout="item.show = ! item.show">-->
            <!-- 路由切换组件 -->
                <!--<router-link v-bind:to="item.url">
                    {{ item.title }}
                </router-link>
                <template v-if="item.value">
                    <ul class="ul-child" v-show="item.show">
                        <li class="li-child" v-for="x in item.value">
                            <a href="javascript:;">
                                {{ x }}
                            </a>
                        </li>
                    </ul>
                </template>
            </li>
        </ul>
    </nav>
-->
</template>
<script>
    export default {
        name: "app-nav",
        data (){
            return {
                arr: [
                    {
                        title: "首页", 
                        //value: ["一","二","三","四"],
                        url: "/",
                        //show: false
                    },
                    {
                        title: "新闻" ,
                        //value: ["二","二","三","四"],
                        url: "/content",
                        show: false
                    },
                    {
                        title:  "关于",
                        url: "/hello",
                        show: false
                    },
                    {
                        title: "投稿",
                        url: "/submit",
                        show: false
                    }
                ]
            }
        }
    }
</script>
<style scoped>
    .app-nav{
        display:block;
        width:100%;
        float:left;
        margin-bottom: 20px;
        background: Lightgreen;
    }
    ul.ul-father {
     
      margin: 0 auto;;
      width: 980px;

    }
    .li-father {
        position: relative;
        display: inline-block;
        width: 100px;
        margin: 0;
        float: left;
    }
    .li-father .router-link-exact-active{
      background-color: #333;
      color:#fff;
    }
    li a {
        display: block;
      padding: 15px 0;
      color: #333;
      text-decoration: none;
      text-align: center;
    }
    li a:hover,.bgchange>a{
        color: #fff;
        background: #222;
    }
    .ul-child{
        position: absolute;
        top: 51px;
        left: 0;
        width: 100%;
        background: Lightgreen;
    }
</style>
