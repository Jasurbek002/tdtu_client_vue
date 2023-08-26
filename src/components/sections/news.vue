<script setup lang="ts">
import Row from "../Ui/wrapper/Row.vue";
import Card from "../Ui/card/Card.vue";
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

const localeNews = store.getnews
</script>

<template>
  <Row :label="t('news_title')" styles="bg">
    <Card v-for="(el, i) of localeNews" :data="el" :key="i" />
  </Row>
</template>

<style scoped>
.bg {
  background: rgb(255, 255, 255);
  background: linear-gradient(
    0deg,
    rgba(255, 255, 255, 0.4431022408963585) 9%,
    rgba(255, 255, 255, 1) 22%
  );
}
</style>
