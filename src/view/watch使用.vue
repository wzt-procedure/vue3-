<template>
    <div @click="sun++">点击+ {{ sun }}</div>
</template>

<script lang="ts" setup>
import { computed, ref, reactive, toRefs, watch } from 'vue'
watch:{ 

}
let sun = 0
</script>
<style lang='less' scoped>

</style>