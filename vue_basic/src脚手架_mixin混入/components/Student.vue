<template>
    <div>
        <h2 @click="show">学生姓名{{name}}</h2>
        <h2>学生年龄:{{age}}</h2>
        <h2>学生性别:{{gender}}</h2>
    </div>
</template>

<script>
import { mixin } from "../mixin";
export default {
    name:'Student',
    data() {
        return {
            name:"pjc",
            age:22,
            gender:'man'
        }
    },
    mixins:[mixin]
}
</script>