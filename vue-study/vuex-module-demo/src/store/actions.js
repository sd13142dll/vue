import types from './mutations-types.js'

const actions = {
	incrementAsync( {commit, state} ){
		// 异步操作
		const p = new Promise((resolve, reject) => {
			setTimeout(() => {
				resolve();
			}, 1000);
		});

		p.then(() => {
			commit( types.INCREMENT );
		}).catch(() =>{
			console.log('异步操作失败！');
		});
	}
};

export default actions;