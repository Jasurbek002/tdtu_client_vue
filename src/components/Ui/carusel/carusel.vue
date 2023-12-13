<script setup lang="ts">
import { ref } from "vue";
import type { CarouselProps } from "ant-design-vue";
import DataService from "@/services/DataService";
import { useI18n } from "vue-i18n";
import { useDataStore } from "@/stores/news";
const { t, locale } = useI18n();
const store = useDataStore();
interface Bunner {
  title_uz: string;
  title_en: string;
  text_uz: string;
  text_en: string;
  image: string;
}
const bunner = ref<Bunner[]>([]);

const localSilide = store.getnews;

DataService.getData("/banners").then((res) => {
  bunner.value = res.data.data;
});

const visible = ref<any>(false);
const dotPosition = ref<CarouselProps["dotPosition"]>("top");
</script>

<template>
  <div class="w-[800px] h-[500px] flex justify-center items-center">
    <a-carousel
      class="w-full"
      :autoplay="true"
      easing="linear"
      dot-position="left"
      :loop="true"
    >
      <a-carousel-slide v-if="false" v-for="(silide, i) of bunner" :key="i">
        <div
          class="w-[900px] rounded-md lg:h-[400px] md:h-[500px] sm:h-[500px] ssm:h-[500px]"
        >
          <a-image
            class="w-[900px] h-[400px] rounded-md"
            :src="`http://34.204.6.47:5000/${silide?.image}`"
            alt="banner"
          />
        </div>
      </a-carousel-slide>
      <a-carousel-slide v-else="localSilide" v-for="(silide, i) of localSilide">
        <div
          class="w-[800px] bg-[var(--site-color)] relative rounded-md md:h-[500px] sm:h-[500px] ssm:h-[500px]"
        >
          <img
            height="500px"
            class="w-full h-[500px] rounded-md"
            :src="silide.image"
            alt="banner"
          />
          <div
            class="flex flex-col items-center justify-center absolute bottom-0 left-0 right-0 w-full h-[150px] bg-black/40 rounded-b-md"
          >
            <p class="text-xl text-white w-10/12">{{ silide.title }}</p>
            <RouterLink
              class="w-[130px] h-[50px] flex items-center text-xl justify-center ml-auto mr-5 rounded-md bg-green-500 text-white"
              :to="`/news/${silide.id}`"
            >
              Batafsil..
            </RouterLink>
          </div>
        </div>
      </a-carousel-slide>
    </a-carousel>
  </div>
</template>

<style scoped lang="scss">
/* For demo */
.ant-carousel :deep(.slick-slide) {
  height: 500px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
}
/* .bg {
  background-image: url("@/assets/static/jpg/cbg.png");
  background-repeat: no-repeat;
  background-size: cover;
  height: 500px;
  /* min-width: 2000px; */
//} 
.box {
  @apply w-full h-[500px] flex items-center justify-around relative;
  background: rgb(169, 166, 166);
  background: linear-gradient(
    90deg,
    rgba(255, 255, 255, 1) 25%,
    rgba(255, 255, 255, 0.24702380952380953) 52%,
    rgba(255, 255, 255, 0.24702380952380953) 84%
  );
}
</style>
