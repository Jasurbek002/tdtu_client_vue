<script setup lang="ts">
import { brm } from '@/constants/brm';
import { ArrowRightOutlined} from '@ant-design/icons-vue';
import { useI18n } from "vue-i18n";
import { useThemaStore } from '@/stores/thema';

const {t,locale} = useI18n();


const store = useThemaStore();
</script>
<template>
  <div class="row">
    <h1 class="w-full text-center uppercase text-white text-2xl my-5">
      Barqaror Rivojlanish Maqsadlari
    </h1>
    <div class="card" v-for="(el,i) of brm" :key="i">
       <img :src="locale === 'uz'? el.image : el.image_en" alt="card img png">
       <div class="title">
        <h2>{{t(el.name) }}</h2>
        <p>{{ t(el.text)}}</p>
        <button class="flex items-center w-[150px] border-2 p-1 justify-evenly hover:border-cyan-400">Ko'proq ko'rish <ArrowRightOutlined /></button>
       </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.row {
  @apply w-full flex justify-evenly flex-wrap bg-black/60 h-full;
}
.card{
  @apply w-11/12 flex bg-white rounded items-center justify-evenly my-5 p-2;
  img{
    @apply w-[400px] h-[280px] rounded
  }
}

.title{
  @apply w-[400px] h-[300px] flex flex-col justify-center;
  h2{
    @apply text-xl text-cyan-700 uppercase border-b-2
  }
  p{
    @apply text-sm text-slate-600 border-b-2
  }
}
</style>
