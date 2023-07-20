<script setup lang="ts">
import Row from "@/components/Ui/wrapper/Row.vue";
import List from "@/components/Ui/List/List.vue";
import { the1 } from "@/assets/static";
</script>
<template>
  <Row label="THE ranking">
    <List
      :image="the1"
      title="Uzbekistonning 30 ta OTM nufuzli halqaro reytingdan o'rin oldi"
      text="Kuvonarlisi, birinchi bor yurtimizning30 ta oliy ta'lim nima uchun ushbu reytingdan o'rin egalladi. Ma'lumot uchun, 2021 yilda ushbu reyting 10 ta oliy talim olishi kirgan edi. Otgan yili ushbu reytingda 94 ta davlatdan 1000 ha yakin oliy ta'lim ishtirok etgan bulsa, 2022 yilda 110 ta davlatdan 1500 dan ortiq oliy ta'lim ishtirok etgan."
      styles="bg-grenn"
    />

  </Row>
</template>