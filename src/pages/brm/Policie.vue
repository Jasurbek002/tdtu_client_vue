<script setup lang="ts">
import Row from "@/components/Ui/wrapper/Row.vue";
import { climate } from "@/constants/climate";
import { ref } from "vue";
import type { Brm } from "@/modules/iterfeces";
import DataService from "@/services/DataService";
const data = ref<any>([]);
const action = ref<Brm[]>([]);
data.value = climate.slice(16, 29);

DataService.getData("/brm/data/all").then((res) => {
  action.value = res.data.data?.filter((el: Brm) => el.category === "policies");
});
</script>

<template>
  <Row label="sustainable policies" styles="bg-black/40">
    <div
    data-aos="zoom-in"
      v-for="(el, i) of data"
      :key="i"
      class="w-[450px] bg-white shadow-amber-200 p-3 rounded-md my-5 flex justify-evenly items-center flex-col"
    >
      <img
        class="w-full h-[300px]"
        :src="el.image === `` ? '../../assets/static/brm/item1.jpg' : el.image"
        alt="image"
      />
      <RouterLink class="text-xl hover:text-red-700" :to="`/brm/action/view/${el.id}`">{{ el.title }}</RouterLink>
    </div>
    <div
      data-aos="zoom-in"
      v-for="(el, i) of action"
      :key="i"
      class="w-[450px] bg-white shadow-amber-200 p-3 rounded-md my-5 flex justify-evenly items-center flex-col"
    >
      <img
        class="w-full h-[300px]"
        :src="`https://science.tdtu.uz/${el.brm_image}`"
        alt=""
      />
      <RouterLink
        class="text-xl hover:text-red-700"
        :to="`/brm/action/view/2-${el.brm_id}`"
        >{{ el.title_uz }}</RouterLink
      >
    </div>
  </Row>
</template>