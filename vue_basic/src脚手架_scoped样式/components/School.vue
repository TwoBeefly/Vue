<template>
    <div class="demo">
        <h2>学校名称{{name}}</h2>
        <h2>学校校龄:{{age}}</h2>
        <h2>学校地址:{{address}}</h2>
    </div>
</template>

<script>
//引入一个混合
export default {
    name:'School',
    data() {
        return {
            name:"金陵小学",
            age:40,
            address:'文化路'
        }
    }
}
</script>

<style scoped>
.demo{
    background-color: aquamarine;
}
</style>