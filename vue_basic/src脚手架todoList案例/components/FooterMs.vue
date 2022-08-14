<template>
  <div class="todo-footer" v-if="allNumber">
    <label>
        <input type="checkbox" :checked='isAll' @click="checkAll"/>
    </label>
    <span>
        <span>已完成{{competeNumber}}</span> / 全部{{allNumber}}
    </span>
    <button class="btn btn-danger" @click="clearCompetetodo">清除已完成任务</button>
  </div>
</template>

<script>
export default {
    name:'FooterMs',
    props:['todoLength','checkAllTodo','cleartodo'],
    computed:{
        competeNumber(){
            let i =0
            this.todoLength.forEach( todoLength => {
                if (todoLength.done) {
                    i++
                }
            })
            return i
        },
        allNumber(){
            return this.todoLength.length
        },
        isAll(){
            return this.competeNumber === this.allNumber && this.allNumber > 0
        }
    },
    methods: {
        checkAll(e){
            return this.checkAllTodo(e.target.checked)
        },
        clearCompetetodo(){
            this.cleartodo()
        }
    },

}
</script>

<style scoped>
    .todo-footer{
        height: 40px;
        line-height: 40px;
        padding-left: 6px;
        margin-top: 5px;
    }

    .todo-footer label{
        display: inline-block;
        margin-right: 20px;
        cursor: pointer;
    }

    .todo-footer label input{
        position: relative;
        top: -1px;
        vertical-align: middle;
        margin-right: 5px;
    }

    .todo-footer button{
        float: right;
        margin-top: 5px;
    }
</style>