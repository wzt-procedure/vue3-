<template>
    vue3 的生命周期
    beforeCreate ----- 无 ( setup )
    created ----- 无 (setup)
    beforeMount ---- onBeforeMount
    mounted ---- onMounted
    beforeUpdate ---- onBeforeUpdate
    updated ---- onUpdated
    beforeDestroy ---- onBeforeUnmount
    destroyed ---- onUnmounted

    onRenderTracked 每次渲染后重新收集响应式依赖
    
    onRenderTriggered 每次触发页面重新渲染时自动执行

</template>

<script lang="ts" setup>
import { computed, ref, reactive, toRefs, onBeforeMount, onMounted, onBeforeUpdate, onUpdated, onUnmounted, onRenderTriggered, onRenderTracked } from 'vue'
// 在 Dom 加载前触发
onBeforeMount(() => {
    console.log('onBeforeMount')
})
// 在 Dom 加载完触发
onMounted(() => {
    console.log('onMounted')
})
// 在页面更新前触发
onBeforeUpdate(() => {
    console.log('onBeforeUpdate')
})
// 在页面更新完触发
onUpdated(() => {
    console.log('onUpdated')
})
// 在组件销毁之前触发
onUnmounted(() => {
    console.log('onUnmount')
})
// 在组件销毁完成触发
onUnmounted(() => {
    console.log('onUnmounted')
})
// 在每次渲染后重新收集响应式依赖
onRenderTracked(() => {
    console.log('onRenderTracked')
})
// 在每次触发页面重新渲染时自动执行
onRenderTriggered(() => {
    console.log('onRenderTriggered')
})
</script>
<style lang='less' scoped>

</style>


