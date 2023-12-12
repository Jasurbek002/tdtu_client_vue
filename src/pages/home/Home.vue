<script setup lang="ts">
import Carosel from "@/components/Ui/carusel/carusel.vue";
import News from "@/components/sections/news.vue";
import Fuculty from "@/components/sections/fuculty.vue";
import Score from "@/components/sections/score.vue";
import MywidgetVue from "@/components/widget/Mywidget.vue";
import RankingWidget from "@/components/widget/RankingWidget.vue"
</script>

<template>
  <div>
    <div class="w-full h-[600px] flex items-center justify-around bg-[#F0F4FA]">
      <Carosel />
      <News />
    </div>
    <RankingWidget />
    <Fuculty />
    <MywidgetVue />
    <Score
      kafedras="62"
      fucultys="8"
      profs="1100"
      doctarnts="208"
      students="22000"
    />
  </div>
</template>
