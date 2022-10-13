<template>
    <!-- 只是vue2响应式原理 测试请在vue2环境测试 -->
    <div>
        <h1>vue2响应式原理</h1>
    </div>
</template>

<script lang="ts">
export default {
    data() {
        return {
            person: {
                name: "李四",
                sex: "男"
            }
        };
    },

    created() {
        Object.defineProperty(this.person, 'age', {
            value: 18,
            enumerable: true,  // 控制属性是否可以枚举 默认false
            writable: true,  //控制属性是否可以被修改 默认false
            configurable: true, // 控制属性是否可以删除 默认false
            //读取数据
            get(){
                //有人读取 person的 age 数据触发
                return this.person
            },
            //修改数据
            set(value){
                return value
            }
        });

        console.log("&&&&&", this.person);

    },
    components: {},

    computed: {},

    methods: {}
}
</script>
<style lang='less' scoped>

</style>