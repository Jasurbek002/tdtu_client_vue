<script setup lang="ts">
const {image,text,title,styles} = defineProps({
    image:String,
    title:String,
    text:String,
    styles:String
})
</script>

<template>
<div :class="` my-3 w-11/12 flex items-center justify-around p-2 flex-wrap rounded-lg shadow-gray-800 shadow-lg ${styles}`">
      <div class="max-w-[500px] h-[400px] rounded-md">
        <img class="w-full h-full rounded-md hover:object-cover object-fill transition duration-500 ease-in-out" :src="image" alt="img/png/jpg/svg">
      </div>
      <div class="max-w-[600px] text-center">
        <h3 class="text-xl text-start font-bold text-gray-50">{{ title }}</h3>
        <p class="text-sm text-start text-gray-50">{{ text }}</p>
      </div>
</div>
</template>