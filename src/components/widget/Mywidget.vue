<script setup lang="ts">
import { part1, part2, part3, part4 } from "@/assets/static";
</script>
<template>
  <div class="logos" ref="logos">
    <div class="logos-slide" ref="logos-slide">
     <a target="_blank" href="https://my.gov.uz/"><img :src="part1" alt="img"></a>
     <a target="_blank" href="https://uzbmb.uz/"><img :src="part2" alt="img"></a>
     <a target="_blank" href="https://mininnovation.uz/"><img :src="part3" alt="img"></a>
     <a target="_blank" href="https://ziyonet.uz/"><img :src="part4" alt="img"/></a>
    </div>
    <div class="logos-slide" ref="logos-slide">
      <a target="_blank" href="https://my.gov.uz/"><img :src="part1" alt="img"></a>
     <a target="_blank" href="https://uzbmb.uz/"><img :src="part2" alt="img"></a>
     <a target="_blank" href="https://mininnovation.uz/"><img :src="part3" alt="img"></a>
     <a target="_blank" href="https://ziyonet.uz/"><img :src="part4" alt="img"/></a>
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

}

.logos-slide a{
  height: 100px;
  width: 100px;
  margin: 0 100px;
  border-radius: 50%;
  background-color: black;
}

.logos-slide img {
  height: 100px;
  width: 100px;
  border-radius: 50%;
  background-color: aqua;
}
</style>
