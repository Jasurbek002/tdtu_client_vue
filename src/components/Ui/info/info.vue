<script setup lang="ts">
const {title,info} = defineProps({
   title:String,
   info:Array
})
</script>

<template>
    <div class="max-w-[700px] text-center p-2 rounded-md shadow-2xl hover:bg-white transform ease-linear duration-700">
        <h3 class="text-xl text-center font-bold text-grenn">
            {{ title }}
        </h3>
        <li class="text-start font-bold text-sm w-11/12" v-for="(text,i) of info" :key="i">{{ text }}</li>
    </div>
</template>