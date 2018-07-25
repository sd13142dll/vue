<template>
	<!--loading start-->
	<div id="loading" :style="{'display': loaded ? 'none' : 'block'}">
		<div id="loading-center">
			<div id="loading-center-absolute">
				<div class="object" id="object_one"></div>
				<div class="object" id="object_two" style="left:20px;"></div>
				<div class="object" id="object_three" style="left:40px;"></div>
				<div class="object" id="object_four" style="left:60px;"></div>
				<div class="object" id="object_five" style="left:80px;"></div>
			</div>
		</div> 
	</div>    
	<!--loading end-->
</template>

<script>
	export default {
		name: 'loading',
		data(){
			return {
				loaded: false
			}
		}
	}
</script>

<style scoped>
	/* loading */
    #loading{background-color:#fff;height:100%;width:100%;max-width:640px;position:fixed;z-index:999;margin-top:0;top:0}
    #loading-center{width:100%;height:100%;position:relative}
    #loading-center-absolute{position:absolute;left:50%;top:40%;height:10px;width:50px;margin-top:-10px;margin-left:-35px}
    .object{width:10px;height:10px;background-color:#333;-moz-border-radius:50% 50% 50% 50%;-webkit-border-radius:50% 50% 50% 50%;border-radius:50% 50% 50% 50%;margin-right:10px;margin-bottom:10px;position:absolute;opacity:.2;-webkit-opacity:.2}
    #object_one{-webkit-animation:object 2s linear infinite;animation:object 2s linear infinite}
    #object_two{-webkit-animation:object 2s linear infinite -.4s;animation:object 2s linear infinite -.4s}
    #object_three{-webkit-animation:object 2s linear infinite -.8s;animation:object 2s linear infinite -.8s}
    #object_four{-webkit-animation:object 2s linear infinite -1.2s;animation:object 2s linear infinite -1.2s}
    #object_five{-webkit-animation:object 2s linear infinite -1.6s;animation:object 2s linear infinite -1.6s}
    @-webkit-keyframes object{
        0%{left:50px;top:0}
        80%{left:0;top:0}
        85%{left:0;top:-10px;width:10px;height:10px}
        90%{width:20px;height:7.5px}
        95%{left:25px;top:-10px;width:10px;height:10px}
        100%{left:50px;top:0}
    }
    @keyframes object{
        0%{left:50px;top:0}
        80%{left:0;top:0}
        85%{left:0;top:-10px;width:10px;height:10px}
        90%{width:20px;height:7.5px}
        95%{left:25px;top:-10px;width:10px;height:10px}
        100%{left:50px;top:0}
    }
</style>