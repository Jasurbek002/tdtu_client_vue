<script setup lang="ts">
const {title,info} = defineProps({
   title:String,
   info:Array
})
</script>

<template>
    <div class="max-w-[600px] shadow-xl">
        <h3 class="text-xl font-normal text-grenn">
            {{ title }}
        </h3>
        <li v-for="(text,i) of info" :key="i">{{ text }}</li>
    </div>
</template>