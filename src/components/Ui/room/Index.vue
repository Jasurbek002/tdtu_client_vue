<script setup lang="ts">
import { ArrowDownOutlined } from '@ant-design/icons-vue';
const { data } = defineProps({
  data:Object
});

</script>

<template>
<div class="card">
    <h1 class="text-xl text-gray-600 text-start font-medium">{{ data?.title }}</h1>
    <p class="text-sm text-start text-lime-600 font-normal">{{ data?.text }}</p>
    <a class="w-[100px]" href="http://44.204.46.42:5000/v1/download/reyting">
    <div class="flex w-full bg-slate-600 rounded-3xl justify-around items-center">
          <p>Download</p>
          <ArrowDownOutlined />
    </div>
    </a>
</div>
</template>

<style  lang="scss">
.card{
    @apply max-w-[450px] p-4 bg-white shadow-transparent rounded-md flex flex-col items-start justify-evenly;
}
</style>