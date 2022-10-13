<template>
    watchEffect 不用指定监听哪个属性 与计算属性相似  但是watchEffect注重过程  所以没有返回值
</template>
 
<script lang="ts" setup>
import { computed, ref, reactive, toRefs, watchEffect } from 'vue'
let name = ref('张三')
let age = ref(18)
watchEffect(() => {
    const x = name
    const x1 = age
    console.log("发生变化");

})
</script>
<style lang='less' scoped>

</style>