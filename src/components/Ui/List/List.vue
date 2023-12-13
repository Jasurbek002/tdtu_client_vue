<script setup lang="ts">
const {image,text,title,styles} = defineProps({
    image:String,
    title:String,
    text:String,
    styles:String
})
</script>

<template>
<div :class="` flex-col my-3 w-11/12 flex items-center justify-around p-2 flex-wrap rounded-lg shadow-gray-800 shadow-lg ${styles}`">
      <div :class="`w-10/12 ${styles} rounded-md`">
        <img class="w-full h-full rounded-md  object-fill transition duration-500 ease-in-out" :src="image" alt="img/png/jpg/svg">
      </div>
      <div class="w-10/12 text-center">
        <h3 class="text-xl text-center font-bold text-gray-50">{{ title }}</h3>
        <p class="text-xl text-center text-gray-50">{{ text }}</p>
      </div>
</div>
</template>