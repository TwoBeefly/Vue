<template>
    <ul class="todo-main">
	    <ItemMs v-for="item in todos" :key='item.id' 
		:messageThing="item" 
		:checkTodo='checkTodo'
		:deleteTodo='deleteTodo'/>
	</ul>
</template>

<script>
import ItemMs from './ItemMs.vue'
export default {
    name:'ListMs',
    components:{
        ItemMs
    },
	props:['todos','checkTodo','deleteTodo']
}
</script>

<style scoped>
    .todo-main {
	  margin-left: 0px;
	  border: 1px solid #ddd;
	  border-radius: 2px;
	  padding: 0px;
	}

	.todo-empty {
	  height: 40px;
	  line-height: 40px;
	  border: 1px solid #ddd;
	  border-radius: 2px;
	  padding-left: 5px;
	  margin-top: 10px;
	}    
</style>