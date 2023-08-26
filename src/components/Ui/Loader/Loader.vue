<script setup lang="ts">
const {styles} = defineProps({
    styles:String
})


</script>

<template>
    <div :class="`w-full h-full my-0 mx-0 fixed flex justify-center items-center bg-white/50 ${styles}`">
        <a-spin :class="`${styles}`" size="large" />
    </div>
</template>