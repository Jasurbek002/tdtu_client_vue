<script setup lang="ts">
const { thema, author, date,key } = defineProps({
  thema: String,
  author: String,
  date: String,
  key:Number
});
</script>

<template>
  <div
  :key="key"
    class="bg-[#F0F4FA] shadow h-[220px] shadow-gray-700 w-11/12 md:flex-wrap sm:flex-wrap flex justify-around my-3 items-center p-2 rounded-lg lg:flex-nowrap"
  >
    <div class="text-grenn text-[18px] font-bold max-w-10/12">{{ thema }}</div>
    <div
      class="sm:flex md:flex justify-between items-center sm:w-full md:w-full mt-2 lg:flex-nowrap lg:block lg:w-[200px]"
    >
      <p class="text-grenn">
        <b class="font-bold text-[18px] text-black">Mu'alif: </b>{{ author }}
      </p>
      <p class="text-grenn text-[18px]">
        <b class="font-bold text-black">Muddat: </b>{{ date }}
      </p>
    </div>
  </div>
</template>
