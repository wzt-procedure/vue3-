<template>
    <div>
        <p>x:{{ poine.x }}</p>
        <p>y:{{ poine.y }}</p>
    </div>
</template>

<script setup lang="ts">
import { computed, ref, reactive, toRefs } from 'vue'
import usePoine from "../Hook/usePoint"
let poine = usePoine()
</script>
<style lang='less' scoped>

</style>
