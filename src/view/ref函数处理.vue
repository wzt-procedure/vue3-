<template>
    <div>{{ name }}</div>
</template>

<script lang="ts" setup>
import { ref, reactive, toRefs } from 'vue'
let name = ref('张三')
let obj = ref({
    name: "张三",
    age: 18

})
let objre = reactive({
    name: "张三",
    age: 18

})
//获取name值
const getname = () => {
    //使用ref
    console.log(name.value);
    console.log(obj.value.name);

    //使用reactive
    console.log(objre.name);
}
 /**
* 总结 获取ref定义的值  属性名.value
* 获取ref对象  例如 对象名.value.属性名
* 使用ref 定义值的类型是基本数据类型
* reactive定义的值 不需要点value
* 使用 reactive 定义值的类型是引用数据类型
* 基本数据类型 响应式依然依靠 object.defineProperty()的get 和 set
* reactive定义的值 处理数据是深沉式的处理 响应式是proxy
*/
</script>
<style lang='less' scoped>

</style>