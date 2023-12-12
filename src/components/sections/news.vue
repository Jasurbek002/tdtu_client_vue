<script setup lang="ts">
import DataService from "@/services/DataService";
import { ref } from "vue";
import { useI18n } from "vue-i18n";
import { useDataStore } from "@/stores/news";
const { t, locale } = useI18n();
const store = useDataStore();
interface News {
  image: string;
  link: string;
  new_id: number;
  title_en: string;
  title_uz: string;
}
const news = ref<News[]>([]);
DataService.getData("/news").then((res) => {
  news.value = res.data.data;
});

const localeNews = store.getnews;
</script>

<template>
  <div class="flex h-full justify-center flex-col">
    <div
      v-for="(el, i) of localeNews"
      :data="el"
      :key="i"
      class="w-[500px]  h-[160px] bg-white shadow flex items-center p-2 my-2 rounded-md justify-between"
    >
      <img
        class="w-[180px] mr-5 h-[140px] rounded-md"
        :src="el.image"
        alt="img/news"
      />
      <div>
        <h2>{{ el.title.slice(0, 60) }}...</h2>
        <p>{{ el.text.slice(0, 70) }}...</p>
        <RouterLink
        class="w-[90px] h-[35px] flex items-center text-sm justify-center ml-auto mr-5 rounded-md bg-green-500 text-white"
        :to="`/news/${1}`"
      >
        Batafsil...
      </RouterLink>
      </div>
      
    </div>
  
  </div>
</template>

<style scoped>
.bg {
  width: 500px;
  height: 400px;
  background: rgb(255, 255, 255);
  background: linear-gradient(
    0deg,
    rgba(255, 255, 255, 0.4431022408963585) 9%,
    rgba(255, 255, 255, 1) 22%
  );
}
</style>
