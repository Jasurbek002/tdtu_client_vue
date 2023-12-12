<script setup lang="ts">
import { useThemaStore } from "@/stores/thema";
const store = useThemaStore();
</script>
<template>
  <RouterLink to="/inno/info"
    :class="`logos ${store.getThema ? 'bg-[#F0F4FA]' : 'bg-slate-700'}`"
    ref="logos"
  >
    <div class="logos-slide" ref="logos-slide">
      <p :class="`${store.getThema ? 'text-green-600' : 'text-white'}`">
        Ushbu sayt №MRB-2021-552 “Raqamli transformatsiya sharoitida texnika
        universitetning innovatsion muhitini rivojlantirish modelini ishlab
        chiqish (Belarus milliy texnika universiteti va Islom Karimov nomidagi
        Toshkent davlat texnika universiteti misolida)” (Ilmiy raxbar:
        f.-m.f.d., prof. Sh.Nematov) loyixasi doirasida yaratildi
      </p>
    </div>
    <div class="logos-slide" ref="logos-slide">
      <p :class="`${store.getThema ? 'text-green-600' : 'text-white'}`">
        Ushbu sayt №MRB-2021-552 “Raqamli transformatsiya sharoitida texnika
        universitetning innovatsion muhitini rivojlantirish modelini ishlab
        chiqish (Belarus milliy texnika universiteti va Islom Karimov nomidagi
        Toshkent davlat texnika universiteti misolida)” (Ilmiy raxbar:
        f.-m.f.d., prof. Sh.Nematov) loyixasi doirasida yaratildi
      </p>
    </div>
  </RouterLink>
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
  padding: 10px 0;
  /* background: rgb(255, 255, 255); */

  display: flex;
  position: relative;
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
  white-space: nowrap;
  justify-content: space-evenly;
  align-items: center;
  animation: 35s slide infinite linear;
}

.logos-slide p {
  margin: 0 100px;
  white-space: nowrap;
  border-radius: 50%;
  @apply font-bold uppercase;
}
</style>
