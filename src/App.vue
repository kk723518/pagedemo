<template>
	<div id="app">
		  <app-header></app-header>
			<app-nav></app-nav>
			
      
      <!-- 展示router -->
      <router-view></router-view>
			<app-footer></app-footer>
      
	</div>
</template>

<script>

import Navbar from './components/Navbar'
import Header from './components/Header'
import Footer from './components/Footer'

	export default {
    name: 'app',
		components: {//局部注册组件这里，可能会定义多个组件，所以component这个单词加上“s”
       'app-header':Header,
			 'app-nav': Navbar,
			 'app-footer':Footer
     }

  }
</script>

<style>
  body{
		margin:0;
		padding:0;
	}
	#app {
		font-family: 'Avenir', Helvetica, Arial, sans-serif;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
		text-align: center;
		color: #2c3e50;
	}
</style>