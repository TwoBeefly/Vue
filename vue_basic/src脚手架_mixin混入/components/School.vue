<template>
    <div>
        <h2 @click="show">学校名称{{name}}</h2>
        <h2>学校校龄:{{age}}</h2>
        <h2>学校地址:{{address}}</h2>
    </div>
</template>

<script>
//引入一个混合
import { mixin } from "../mixin";
export default {
    name:'School',
    data() {
        return {
            name:"金陵小学",
            age:40,
            address:'文化路'
        }
    },
    mixins:[mixin]
}
</script>