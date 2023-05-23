<script setup lang="ts">
import { part1, part2, part3, part4 } from "@/assets/static";
</script>
<template>
  <div class="logos" ref="logos">
    <div class="logos-slide" ref="logos-slide">
     <img :src="part1" alt="img">
     <img :src="part2" alt="img">
     <img :src="part3" alt="img">
     <img :src="part4" alt="img">
    </div>
    <div class="logos-slide" ref="logos-slide">
     <img :src="part1" alt="img">
     <img :src="part2" alt="img">
     <img :src="part3" alt="img">
     <img :src="part4" alt="img">
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
  background: rgba(255, 255, 255, 0.451);

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
  @apply mx-[200px];
}

.logos-slide img {
  height: 100px;
  margin: 0 100px;
  border-radius: 50%;
}
</style>
