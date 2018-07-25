<template>
	<div id="common-nav">
        <ul class="nav">
            <li><router-link to="/index">首页</router-link></li>
            <li><router-link to="/detail">详情页</router-link></li>
        </ul> 
    </div>
</template>

<script>
	export default {
		name: 'common-nav',
		data(){
			return {
				loaded: false
			}
		}
	}
</script>

<style scoped>
    .nav {
        display: flex;
        height: 0.8rem;
        line-height: 0.8rem;
    }
    .nav li {
        flex: 1;
        text-align: center;
    }
    .nav li a {
        height: 100%;
        color: #444;
        background-color: #fff;
    }
    .nav li .router-active {
        color: #d09a56;
        border-bottom: 2px solid #d09a56;
    }
</style>