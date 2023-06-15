<script setup lang="ts">
import { useThemaStore } from '@/stores/thema';
const store = useThemaStore()
</script>
<template>
  <div class="container">
    <div :class="store.getThema ? 'banner' : 'banner_dark'"></div>
    <slot />
  </div>
</template>

<style scoped>
.container {
  @apply max-w-[2400px] mx-auto relative ;
}
.banner{
  @apply w-full min-h-[100vh] mx-auto;
  background-image: url("../../../assets/static/jpg/bunner.jpg");
  background-repeat: no-repeat;
  background-size:100% 100%;
  position:fixed;
}
.banner_dark{
  @apply w-full min-h-[100vh] mx-auto bg-black/80 fixed
}
</style>
