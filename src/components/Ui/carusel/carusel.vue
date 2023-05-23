<script setup lang="ts">
import { ref } from "vue";
import type { CarouselProps } from "ant-design-vue";
import { useDataStore } from "@/stores/news";

const { data } = useDataStore();
const visible = ref<any>(false)
//  const dotPosition = ref<CarouselProps["dotPosition"]>("top")
</script>

<template>
  <div class="bg">
    <a-carousel
      :autoplay="true"
      easing="linear"
      dot-position="left"
      :loop="true"
    >
      <a-carousel-slide v-for="(silide, i) of data" :key="i">
        <div class="box">
          <div
            class="flex h-[400px] rounded-xl max-w-[500px] h-11/12 p-5 flex-col items-center"
          >
            <h1
              class="text-xl text-zinc-500 uppercase border-b-2 border-green-900 my-10"
            >
              {{ silide?.title }}
            </h1>
            <p class="text-zinc-500 text-xl border-green-700 border-b-2 my-10">
              {{ silide?.text?.slice(0, 100) }}
            </p>
          </div>

          <div class="max-w-[700px] rounded-md h-[400px] bg-black">
            <a-image
               height="400px"
              class="w-full h-[400px] rounded-md"
              :src="silide?.img"
              alt="banner"
            />
          </div>
        </div>
      </a-carousel-slide>
    </a-carousel>
  </div>
</template>

<style scoped>
/* For demo */
.ant-carousel :deep(.slick-slide) {
  height: 500px;
  overflow: hidden;
}
.bg {
  background-image: url("@/assets/static/jpg/bg.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  height: 500px;
  /* min-width: 2000px; */
}
.box {
  @apply w-full h-[500px] flex items-center justify-around;
  background: rgb(255, 255, 255);
  background: linear-gradient(
    90deg,
    rgba(255, 255, 255, 1) 25%,
    rgba(255, 255, 255, 0.24702380952380953) 52%,
    rgba(255, 255, 255, 0.24702380952380953) 84%
  );
}
</style>
