<template>
    <input type="text" v-model="parson.name">
    <input type="text" v-model="parson.age">
    <div>{{ parsonP }}</div>
</template>
 
<script setup lang="ts">
import { computed, reactive } from 'vue'
let parson = reactive({
    name: "张三",
    age: 23,
})
//简单写法()
let parsonP = computed(() => {
    return parson.name + '---' + parson.age
})
//复杂写法
// let parsonP = computed({
//     get() {
//         return parson.name + parson.age
//     },
//     set(value) {
//         console.log(value);
//     }
// })


</script>
<style lang='less' scoped>

</style>