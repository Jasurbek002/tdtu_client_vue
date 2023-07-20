<script setup lang="ts">
import Row from "@/components/Ui/wrapper/Row.vue";
import List from "@/components/Ui/List/List.vue";
import { green } from "@/assets/static";
</script>
<template>
  <Row label="Greenmetric">
    <List
      :image="green"
      title=" Toshkent davlat texnika universiteti “Yashil reytingi “da"
      text="Joriy yilning 12 – dekabrida “Greenmetric ning
                    jahon universitetlarining ekologiya va atrof-muhit barqarorligi boʻyicha
                    reytingini eʼlon qildi. Toshkent davlat texnika universiteti
                    ilk bor xalqaro yashil universitetlar reytingida
                    ishtirok etib “Greenmetric” reyting mezonlarida
                    quyidagi natijalarga erishildi:"
      styles="bg-grenn"
    />
  </Row>
</template>
