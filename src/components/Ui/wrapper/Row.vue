<script setup lang="ts">
const props = defineProps({
    label:String,
    styles:String
})
</script>

<template>
<div :class="`w-full flex items-center justify-evenly flex-wrap py-10 ${props.styles}`">
    <h1 class="uppercase px-5 py-2 rounded-lg w-11/12 bg-white text-start text-2xl text-grenn font-bold">{{ props.label }}</h1>
    <slot />
</div>
</template>