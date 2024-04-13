<script setup lang="ts">
const {styles} = defineProps({
    styles:String,
    size:String
})
</script>
<template>
    <div :class="`w-full ${size} flex items-center flex-col ${styles}`">
          <slot />
    </div>
</template>