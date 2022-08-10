<template>
    <div>
        <h1 v-text="msg" ref="title"></h1>
        <button @click="show">点击输出上方DOM元素</button>
        <company></company>
    </div>
</template>

<script>
import Company from './components/Company.vue'
export default {
    name:'App',
    data() {
        return {
            msg:"公司老板信息汇总"
        }
    },
    methods: {
        show(){
            console.log(this.$refs.title);
        }
    },
    components:{
        Company,
    }
}
</script>