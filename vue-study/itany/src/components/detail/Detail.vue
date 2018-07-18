<template>
	<transition enter-active-class="animated slideInRight" leave-active-class="animated slideOutRight">
		<div class="detail" v-show="detailShow">
			详情页
			<br>
			<br>

			<h2>{{ seller.name }}</h2>
			
			<br>
			<br>

			<h3>{{ seller.bulletin }}</h3>

			<br>

			<ul>
				<li v-for="item of seller.supports">
					{{ item.description }}
				</li>
			</ul>

			<button class="close" @click="hideDetail">关闭</button>
		</div>
	</transition>
</template>

<script>
	import {mapGetters} from 'vuex';
	import 'animate.css/animate.css';

	export default {
		computed: {
			...mapGetters([
				'detailShow',
				'seller'
			])
		},
		methods: {
			hideDetail(){
				this.$store.dispatch('hideDetail');
			}
		}
	}
</script>

<style scoped>
	.detail {
		position: fixed;
		top: 0;
		left: 0;
		z-index: 2;
		width: 100%;
		height: 100%;
		overflow: auto;
		color: #fff;
		background-color: rgba(7, 17, 27, 0.8);
	}
	.close {
		position: absolute;
		left: 50%;
		bottom: 50px;
		transform: translateX(-50%);
	}
</style>