<template>
    <div class="demo">
     <!-- 组件的结构 -->
     <h2>学校名称：{{name}}</h2>
     <h2>学校地址：{{address}}</h2>
     <button @click="showName">点击显示学校名称</button>
    </div>
</template>

<script>
    // 组建交互相关的代码（数据、方法等等）
    export default ({
        name:'School',
        data() {
            return {
                name:'西邮',
                address:'西安'
            }
        },
        methods: {
            showName(){
                alert(this.name)
            }
        },
    })
</script>

<style>
    /* 组件的样式 */
    .demo{
        background-color: skyblue;
    }
</style>
