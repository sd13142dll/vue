import types from '../mutations-types.js'

const state = {
	count: 6
};

const getters = {
	count( state ){
		return state.count;
	}
};

const mutations = {
	[types.INCREMENT](state) {
		state.count++;
	},

	[types.DECREMENT](state){
		state.count--;
	}
};

const actions = {
	increment( context ){
		context.commit( types.INCREMENT );
	},

	decrement( {commit, state} ){ // 利用对象解构重写context参数，包含：commit、dispatch、state
		if( state.count > 10 ){
			commit( types.DECREMENT );
		}
	}
};

export default {
	state,
	getters,
	mutations,
	actions
}