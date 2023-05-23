<script setup lang="ts">
import Row from "../Ui/wrapper/Row.vue";
import Card from "../Ui/card/Card.vue";
import { useDataStore } from "@/stores/news";
const store = useDataStore()
const news = store.getnews
console.log(news);

</script>

<template>
  <Row label="so'ngi yangiliklar" styles="bg" >
        <Card v-for="(el,i) of news" :data="el" :key="i" />
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
