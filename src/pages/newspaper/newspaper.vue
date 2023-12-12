<script setup lang="ts">
import Row from "@/components/Ui/wrapper/Row.vue";
import { journal } from "@/constants/journal";
import { ArrowRightOutlined } from "@ant-design/icons-vue";
</script>
<template>
  <Row styles="bg-white" label="Ilmiy Jurnallar">
    <div v-for="(el, i) of journal" :key="i" class="card">
      <img class="w-full h-full" :src="el.img" alt="img" />
      <div class="modal">
        <p class="text-white text-sm font-medium">{{ el.name }}</p>
        <a class="px-10 py-2 bg-white rounded" target="_blank" :href="el.link">
          <ArrowRightOutlined class="text-2xl" />
        </a>
      </div>
    </div>
  </Row>
</template>
<style scoped>
.card {
  @apply w-[350px] h-[400px] flex items-center flex-col my-5 justify-evenly shadow-2xl relative;
}
.modal {
  @apply w-full h-full absolute bg-black/50 flex justify-evenly items-center flex-col transition opacity-0;
}

.card:hover .modal {
  @apply opacity-100;
}
</style>
