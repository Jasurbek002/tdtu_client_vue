<script setup lang="ts">
import DataService from "@/services/DataService";
import Row from "../wrapper/Row.vue";

import { useRoute } from "vue-router";
import { ref } from "vue";
import Room from "../room/Index.vue"
const { id } = useRoute().params;
const title = ref<any>({});
DataService.getData("/loboratory/rooms").then((res) => {
  title.value = res?.data?.rooms?.find((el: any) => el.room_id == id);
});
const data1 = {title:"amalaiy frontend",text:"Ilgor texnologiyalar va xizmatlar"}
</script>

<template>
  <Row :label="title.name_uz">
  <Room :data="data1" />
  </Row>
</template>
