<template>
    <li>
		<label>
			<input type="checkbox" :checked="messageThing.done" @click="handleCheck(messageThing.id)"/>
			<span>{{messageThing.title}}</span>
		</label>
		<button class="btn btn-danger" @click="deleteItem(messageThing.id)">删除</button>
	</li>
</template>

<script>
export default {
    name:'ItemMs',
	//声明接受messageThing对象
	props:['messageThing','checkTodo','deleteTodo'],
	methods: {
		//勾选或取消勾选
		handleCheck(id){
			//通知App组件将对应的todo对象的done值取反
			this.checkTodo(id);
		},
		//删除
		deleteItem(id){
			if(confirm('确定删除吗？')){
				//通知App组件将对应的todo对象删除
				this.deleteTodo(id)
			}
		}
	},
	
}
</script>

<style scoped>
	li {
	  list-style: none;
	  height: 36px;
	  line-height: 36px;
	  padding: 0 5px;
	  border-bottom: 1px solid #ddd;
	}

	li label {
	  float: left;
	  cursor: pointer;
	}

	li label li input {
	  vertical-align: middle;
	  margin-right: 6px;
	  position: relative;
	  top: -1px;
	}

	li button {
	  float: right;
	  display: none;
	  margin-top: 3px;
	}

	li:before {
	  content: initial;
	}

	li:last-child {
	  border-bottom: none;
	}

	li:hover{
		background-color: #ddd;
	}

	li:hover button{
		display: block;
	}
</style>