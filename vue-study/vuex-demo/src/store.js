/**
 * vuex配置
 */

import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

// 定义属性（数据）
const state = {
	count: 6
};

// 定义getters
const getters = {
	count( state ){
		return state.count;
	},

	isEvenOrOdd( state ){
		return state.count % 2 === 0 ? '偶数' : '奇数';
	}
};

// 定义mutations，处理状态（数据）的改变
const mutations = {
	increment(state) {
		state.count++;
	},

	decrement(state){
		state.count--;
	}
};

// 定义actions，要执行的操作，如流程判断、异步请求
const actions = {
	increment( context ){
		// console.log(context);
		context.commit('increment'); // 提交一个名为increment的变化，名称可自定义，可以认为是类型名
	},

	decrement( {commit, state} ){ // 利用对象解构重写context参数，包含：commit、dispatch、state
		if( state.count > 10 ){
			commit('decrement');
		}
	},

	incrementAsync( {commit, state} ){
		// 异步操作
		var p = new Promise((resolve, reject) => {
			setTimeout(() => {
				resolve();
			}, 1000);
		});

		p.then(() => {
			commit('increment');
		}).catch(() =>{
			console.log('异步操作失败！');
		});
	}
};

// 创建store对象
const store = new Vuex.Store({
	state,
	getters,
	mutations,
	actions
});

// 导出store对象
export default store;