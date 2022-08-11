<template>
    <div>
        <h2>BOSS姓名L{{boss}}</h2>
        <h2>BOSS年龄:{{age}}</h2>
    </div>
</template>

<script>
export default {
    name:'Company',
    data() {
        return {
            boss:'Peter',
            age:999
        }
    },
}
</script>