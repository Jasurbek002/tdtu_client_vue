<script setup lang="ts">
import Row from "../Ui/wrapper/Row.vue";
import Card from "../Ui/card/Card.vue";
</script>

<template>
  <Row label="so'ngi yangiliklar" styles="bg">
    <Card />
    <Card />
    <Card />
    <Card />
  </Row>
</template>

<style scoped>
.bg {
  background: rgb(255, 255, 255);
  background: linear-gradient(
    0deg,
    rgba(255, 255, 255, 0.4431022408963585) 9%,
    rgba(255, 255, 255, 1) 22%
  );
}
</style>
