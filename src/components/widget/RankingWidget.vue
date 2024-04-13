<script setup lang="ts">
import { renking } from "@/assets/static/reyting";
</script>
<template>
  <h1
    class="text-2xl pl-16 font-bold  bg-[#F0F4FA] text-[#010039] uppercase w-full text-start"
  >
    Reytinglar
  </h1>
  <div class="logos" ref="logos">
    <div class="logos-slide" ref="logos-slide">
      <a
        :href="el.link"
        v-for="(el, i) of renking"
        key="i"
        ><img :src="el.image" alt="img"
      /></a>
    </div>
    <div class="logos-slide" ref="logos-slide">
      <a
        :href="el.link"
        v-for="(el, i) of renking"
        key="i"
        ><img :src="el.image" alt="img"
      /></a>
    </div>
  </div>
</template>

<style scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

@keyframes slide {
  from {
    transform: translateX(0);
  }
  to {
    transform: translateX(-100%);
  }
}

.logos {
  overflow: hidden;
  padding: 60px 0;
  background: #f0f4fa;

  display: flex;
  position: relative;
}

.logos:before,
.logos:after {
  position: absolute;
  top: 0;
  width: 250px;
  height: 100%;
  content: "";
  z-index: 2;
}

.logos:before {
  left: 0;
  background: linear-gradient(to left, rgba(255, 255, 255, 0), white);
}

.logos:after {
  right: 0;
  background: linear-gradient(to right, rgba(255, 255, 255, 0), white);
}

.logos:hover .logos-slide {
  animation-play-state: paused;
}

.logos-slide {
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  animation: 35s slide infinite linear;
}

.logos-slide a {
  height: 150px;
  width: 300px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 100px;
  border-radius: 10px;
  background-color: rgb(255, 255, 255);
  box-shadow: rgba(0, 0, 0, 0.05) 0px 0px 0px 1px;
}

.logos-slide img {
  height: 100%;
  width: 100%;
  border-radius: 5px;
  /* background-color: aqua; */
}
</style>
