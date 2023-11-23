<script setup lang="ts">
import { ref } from "vue";
import { climate } from "../../../constants/climate";
import { ArrowLeftOutlined } from "@ant-design/icons-vue";
import { useRoute, type RouteParams } from "vue-router";
import DataService from "@/services/DataService";
const { id }:any = useRoute().params;
const data = ref<any>({});

const item: string[] = id.split("-");
if (item.length > 1) {
  DataService.getOneData("brm/data", item[1]).then((res) => {
    data.value = res.data.data;
  });
} else {
  data.value = climate?.find((el: any) => el?.id == id);
}

const back = () => {
  window.history.back();
};
</script>

<template>
  <div class="w-full flex flex-col min-h-[100vh] items-center bg-green-800">
    <button
      @click="back"
      class="w-[120px] h-[50px] bg-white rounded-md my-5 flex items-center justify-around mr-auto ml-10 text-xl"
    >
      <ArrowLeftOutlined /> back
    </button>
    <h1
      v-if="item.length < 2"
      class="w-10/12 text-center text-2xl font-bold text-white my-10"
    >
      {{ data?.title }}
    </h1>
    <h1 v-else class="w-10/12 text-center text-2xl font-bold text-white my-10">
      {{ data?.title_en }}
    </h1>
    <div v-if="item.length < 2" class="max-w-[1200px] h-[400px]">
      <img
        class="w-full h-full rounded shadow-white"
        :src="data?.image"
        alt=""
      />
    </div>
    <div v-else class="max-w-[1200px] h-[400px]">
      <img
        class="w-full h-full rounded shadow-white"
        :src="`https://api.devnugget.uz/${data?.brm_image}`"
        alt=""
      />
    </div>
    <p
      v-if="item.length > 2"
      class="text-xl font-normal w-10/12 text-white my-5"
    >
      {{ data?.text }}
    </p>
    <p v-else class="text-xl font-normal w-10/12 text-white my-5">
      {{ data?.text_en }}
    </p>
  </div>
</template>
