<script setup lang="ts">
import DataService from "@/services/DataService";
import { ref } from "vue";
const media = ref<any>([]);
DataService.getData("/media/get/all").then(({ data }) => {
  media.value = data.data;
  console.log(data.data);
});
</script>

<template>
  <div class="w-full flex py-10 justify-evenly flex-wrap h-[100vh] bg-white">
    <h1 class="w-full text-center text-xl">Media va Marketing bo'limi</h1>
    <div
      class="rounded-md shadow-lg border-[1px] border-slate-300 bg-[var(--site-color)] w-[500px] h-[360px] flex flex-col justify-start items-center"
      v-for="(el, i) of media"
    >
      <video
        controls
        :src="`https://science.tdtu.uz/v1/${el.media}`"
        style="width: 100%; background: white; height: 300px; border-radius: 5px 5px 0px 0px"
      ></video>
      <p class="text-xl text-white">{{ el?.title_uz }}</p>
    </div>
  </div>
</template>
