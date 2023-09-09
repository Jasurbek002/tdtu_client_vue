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

DataService.getData("/banner").then((res) => {
  bunner.value = res.data.data;
});

const visible = ref<any>(false);
const dotPosition = ref<CarouselProps["dotPosition"]>("top");
</script>

<template>
  <div class="bg">
    <a-carousel
      :autoplay="true"
      easing="linear"
      dot-position="left"
      :loop="true"
    >
      <a-carousel-slide v-if="false" v-for="(silide, i) of bunner" :key="i">
        <div class="box">
          <div
            class="flex lg:h-[400px] md:h-[500px] sm:h-[500px] ssm:h-[500px] rounded-xl max-w-[500px] h-11/12 p-5 flex-col items-center ssm:absolute sm:absolute md:absolute lg:static static z-20 md:backdrop-sepia-0 sm:backdrop-sepia-0 ssm:backdrop-sepia-0 ssm:bg-black/40 sm:bg-black/40 md:bg-black/40 lg:bg-transparent lg:backdrop-sepia-0"
          >
            <h1
              class="text-xl ssm:text-white sm:text-white md:text-white lg:text-zinc-500 uppercase border-b-2 border-green-900 my-10"
            >
              {{ locale === "uz" ? silide?.title_uz : silide.title_en }}
            </h1>
            <p
              class="text-sm ssm:text-white sm:text-white md:text-white lg:text-zinc-500 text-zinc-500 border-green-700 border-b-2 my-10"
            >
              {{ locale === "uz" ? silide?.text_uz : silide.text_en }}
            </p>
          </div>

          <div
            class="max-w-[700px] rounded-md lg:h-[400px] md:h-[500px] sm:h-[500px] ssm:h-[500px]"
          >
            <a-image
              height="400px"
              class="w-full h-[400px] rounded-md"
              :src="`http://34.204.6.47:5000/${silide?.image}`"
              alt="banner"
            />
          </div>
        </div>
      </a-carousel-slide>
      <a-carousel-slide v-else="localSilide" v-for="(silide, i) of localSilide">
        <div class="box">
          <div
            class="flex lg:h-[400px] md:h-[500px] sm:h-[500px] ssm:h-[500px] rounded-xl max-w-[500px] h-11/12 p-5 flex-col items-center ssm:absolute sm:absolute md:absolute lg:static static z-20 md:backdrop-sepia-0 sm:backdrop-sepia-0 ssm:backdrop-sepia-0 ssm:bg-black/40 sm:bg-black/40 md:bg-black/40 lg:bg-transparent lg:backdrop-sepia-0"
          >
            <h1
              class="text-xl ssm:text-white sm:text-white md:text-white lg:text-zinc-500 uppercase border-b-2 border-green-900 my-10"
            >
              {{ silide.title }}
            </h1>
            <p
              class="text-sm ssm:text-white sm:text-white md:text-white lg:text-zinc-500 text-zinc-500 border-green-700 border-b-2 my-10"
            >
              {{ silide.text }}
            </p>
          </div>

          <div
            class="max-w-[700px] rounded-md lg:h-[400px] md:h-[500px] sm:h-[500px] ssm:h-[500px]"
          >
            <a-image
              height="400px"
              class="w-full h-[400px] rounded-md"
              :src="silide.image"
              alt="banner"
            />
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
  overflow: hidden;
}
.bg {
  background-image: url("@/assets/static/jpg/cbg.png");
  background-repeat: no-repeat;
  background-size: cover;
  height: 500px;
  /* min-width: 2000px; */
}
.box {
  @apply w-full h-[500px] flex items-center justify-around relative;
  background: rgb(255, 255, 255);
  background: linear-gradient(
    90deg,
    rgba(255, 255, 255, 1) 25%,
    rgba(255, 255, 255, 0.24702380952380953) 52%,
    rgba(255, 255, 255, 0.24702380952380953) 84%
  );
}
</style>
