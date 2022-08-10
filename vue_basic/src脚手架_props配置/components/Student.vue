<template>
    <div>
        <h1>msg</h1>
        <h2>学生姓名L{{name}}</h2>
        <h2>学生年龄:{{age}}</h2>
        <h2>学生性别:{{gender}}</h2>
    </div>
</template>

<script>
export default {
    name:'Student',
    data() {
        return {
            msg:大学,
        }
    },
    //props:['name','gender','age']  //简单接受
    //限制接受
    props:{
        name:String,
        age:Number,
        gender:String
    }
}
</script>