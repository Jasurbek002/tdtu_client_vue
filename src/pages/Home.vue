<script setup lang="ts">
import Carosel from '../components/Ui/carusel/carusel.vue'
import News from '@/components/sections/news.vue';
import Fuculty from '@/components/sections/fuculty.vue';
import Score from '@/components/sections/score.vue';
</script>

<template>
  <div>
   <Carosel />
   <News />
   <Fuculty />
   <Score kafedras="62" fucultys="8" profs="1100" doctarnts="208" students="22000" />
  </div>
</template>
