<template>
    <p>
        watch 监听的值区别

        监听的值是对象 reactive定义的值 使用第一个方法

        监听的值是基本数据类型 多个ref或者的单个ref 定义的值 使用第二个方法
        
        数据嵌套的太深  使用 最后方法监听


    </p>
</template>

<script lang="ts" setup>
import { computed, ref, reactive, toRefs, watch } from 'vue'

/**************************************** */
//对象值
const state = reactive({ count: 0 })
watch(() => state.count, (newValue, oldValue) => {
    // 因为watch被观察的对象只能是getter/effect函数、ref、active对象或者这些类型是数组
    // 所以需要将state.count变成getter函数
})


/********************************* */
//单个值
const count = ref(0)
watch(count, (newValue, oldValue) => {
})

/***************************** */
//监听多个
const count1 = ref(0)
const count2 = ref(1)
//第一种写法
watch([count1, count2], ([newCount, newCount2], [oldCount, oldCount2]) => {
})
//还有第二种写法
watch([count1, count2], (newValue, oldVlaue) => {
    console.log(newValue)//[newCount, newCount2]
    console.log(oldVlaue)//[oldCount, oldCount2]
})
/****************************** */
//深度监听
const obj = reactive({
    name: '小象',
    age: 18,
    cp: {
        name: '小花',
        age: 16,
    },
})

// 监听 reactive 定义的响应式数据
//   特点1：newVal === oldVal，根本就是同一个内容地址，就是对象本身
//   特点2：reactive() 对象默认是深度监听，能监听到所有的子属性的变化

// 注意点：
//   💥 如果监听的属性值是基本类型数据，需要写成函数返回该属性的方式才能监听到

//immediate  立即监听
//deep  深度监听

watch(
    () => obj.cp,
    val => {
        console.log('小象找到CP了要发红包', val)
    },
    { deep: true, immediate: true }
)


</script>
<style lang='less' scoped>

</style>