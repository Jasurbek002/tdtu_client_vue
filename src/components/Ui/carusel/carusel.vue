<template>
  <div class="bg">
    <a-carousel :autoplay="true" easing="linear" dot-position="left">
      <template>
        <div class="box">
          <div
            class="flex h-[400px] rounded-xl max-w-[500px] h-11/12 p-5 flex-col items-center"
          >
            <h1 class="text-xl uppercase border-b-2 border-blue-500 my-10">
              TOSHKENT DAVLAT TEXNIKA UNIVERSITETIDA
            </h1>
            <p class="text-grenn font-bold border-blue-500 border-b-2 my-10">
              TOSHKENT DAVLAT TEXNIKA UNIVERSITETIDA “OLIMA AYOLLARNING
              YUTUQLARI VA INNOVATSION GʻOYALARI” MAVZUSIDA II – ILM FAN
              FESTIVALI BO‘LIB O‘TDI
            </p>
          </div>

          <div class="max-w-[600px] h-[400px] rounded-md h-11/12 bg-black">
            <img
              class="w-full h-full rounded-md"
              src="../../../assets/static/jpg/banner1.jpg"
              alt="banner"
            />
          </div>
        </div>
      </template>
      <template>
        <div class="box">
          <div
            class="flex h-[400px] rounded-xl max-w-[500px] h-11/12 p-5 flex-col items-center"
          >
            <h1 class="text-xl uppercase border-b-2 border-blue-500 my-10">
              TOSHKENT DAVLAT TEXNIKA UNIVERSITETIDA
            </h1>
            <p class="text-grenn font-bold border-b-2 border-blue-500 my-10">
              TOSHKENT DAVLAT TEXNIKA UNIVERSITETIDA “OLIMA AYOLLARNING
              YUTUQLARI VA INNOVATSION GʻOYALARI” MAVZUSIDA II – ILM FAN
              FESTIVALI BO‘LIB O‘TDI
            </p>
          </div>

          <div class="max-w-[600px] h-[400px] rounded-md h-11/12 bg-black">
            <img
              class="w-full h-full rounded-md"
              src="../../../assets/static/jpg/banner1.jpg"
              alt="banner"
            />
          </div>
        </div>
      </template>
    </a-carousel>
  </div>
</template>
<script lang="ts">
import { defineComponent, ref } from "vue";
import type { CarouselProps } from "ant-design-vue";

export default defineComponent({
  setup() {
    return {
      dotPosition: ref<CarouselProps["dotPosition"]>("top"),
    };
  },
});
</script>
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
