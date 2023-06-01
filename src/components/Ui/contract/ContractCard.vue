<script setup lang="ts">
const {title,name,key} = defineProps({
    title:String,
    name:String,
    key:String
})
</script>


<template>
    <div
  :key="key"
    class="bg-white shadow-lg shadow-gray-700 w-11/12 md:flex-wrap sm:flex-wrap flex justify-around my-3 items-center p-2 rounded-lg lg:flex-nowrap"
  >
    <div class="text-grenn font-bold max-w-10/12">{{ title }}</div>
    <div
      class="sm:flex md:flex justify-between items-center sm:w-full md:w-full mt-2 lg:flex-nowrap lg:block lg:w-[200px]"
    >
      <p class="text-grenn">
        <b class="font-bold text-black">Kafedra: </b>{{ name }}
      </p>
    </div>
  </div>
</template>