<template>
	<div class="goods">
		<div class="menu-wrapper">
			<ul>
				<li v-for="item of goods">
					{{ item.name }}
				</li>
			</ul>
		</div>

		<div class="foods-wrapper">
			<ul>
				<li v-for="item of goods">
					<h3>{{ item.name }}</h3>
					<ul>
						<li v-for="foods of item.foods">
							<img :src="foods.icon" >
							{{ foods.name }}
						</li>
					</ul>
				</li>
			</ul>
		</div>
	</div>
</template>

<script>
	import {mapGetters} from 'vuex';

	export default {
		created(){
			this.$store.dispatch('getGoods');	
		},
		computed: {
			...mapGetters([
				'goods'
			])
		}
	}
</script>

<style scoped>
	.goods {
		display: flex;
		position: absolute;
		top: 174px;
		bottom: 46px;
		width: 100%;
	}
	.menu-wrapper {
		flex: 0 0 80px;
		width: 80px;
		background-color: #f0f0f0;
	}
	.foods-wrapper {
		flex: 1;
		margin-left: 20px;
	}
</style>