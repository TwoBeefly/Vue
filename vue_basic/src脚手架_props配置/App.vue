<template>
    <div>
        <!-- 数据传递 -->
        <Student :age='16' name="pjc" :gender="man"></Student>
    </div>
</template>

<script>
import Student from './components/Student.vue'
export default {
    name:'App',
    components:{
        Student,
    }
}
</script>