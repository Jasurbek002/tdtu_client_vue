<script setup lang="ts">
import { ArrowRightOutlined  }  from "@ant-design/icons-vue";
import { useI18n } from "vue-i18n";
const { t } = useI18n();

interface Nav {
  name: string;
  to: string;
}
const { data } = defineProps({
  data: Array<Nav>,
});
</script>
<template>
  <div class="blok">
    <RouterLink
      data-aos="fade-right"
      data-aos-offset="300"
      data-aos-easing="ease-in-sine"
      class="item"
      v-for="(nav, i) of data"
      :key="i"
      :to="nav?.to"
    >
      <p class="mr-3 my-auto">{{ t(`${nav.name}` )}}</p>
      <ArrowRightOutlined />
    </RouterLink>
  </div>
</template>
<style scoped>
.blok {
  @apply w-full flex lg:flex-row flex-row md:flex-row sm:flex-col ssm:flex-col items-center justify-evenly flex-wrap mt-[100px];
}
.item {
  @apply py-1 px-2 shadow-2xl rounded-md hover:bg-slate-600 hover:text-white bg-white text-xl flex items-center justify-between text-green-800 transition duration-700 ease-in-out my-5;
}
</style>
