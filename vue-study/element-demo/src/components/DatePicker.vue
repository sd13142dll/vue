<template>
	<el-date-picker
      v-model="value"
      align="right"
      type="date"
      placeholder="选择日期"
      :picker-options="options">
    </el-date-picker>
</template>

<script>
	export default {
		data(){
			return {
				value: '',
				options: {
					disabledDate(time){
						return time.getTime() < Date.now();
					},

					firstDayOfWeek: 1
				}
			}
		},



		watch: {
			value: function(newVal, oldVal){
				// console.log("新日期："+ newVal.getFullYear() + '/' + (newVal.getMonth()+1) + '/' + newVal.getDate() );
			}
		}
	}
</script>