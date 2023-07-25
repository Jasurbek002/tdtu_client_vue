<script setup lang="ts">
import Row from "../wrapper/Row.vue";
import axios from "axios";
import { useRoute } from "vue-router";
import { ref } from "vue";
const { id } = useRoute().params;
const brm = ref<any>({});
axios.get(`https://tdtu-server.onrender.com/v1/brm/${id}`).then((res:any) => {
  brm.value = res.data.data;
});

console.log(brm);
</script>

<template>
  <Row :label="brm.title_en">
    <div class="w-11/12 bg-slate-600 rounded-md p-2">
      <p class="text-xl text-center text-white">{{ brm.text_en }}</p>
    </div>
    <div
    data-aos="fade-down-right"
      v-for="(el, i) of brm.items"
      :key="i"
      class="w-11/12 bg-slate-600 rounded-md p-2 my-3"
    >
      <p class="text-xl text-center text-white">{{ el.subtext_en }}</p>
    </div>
  </Row>
</template>
