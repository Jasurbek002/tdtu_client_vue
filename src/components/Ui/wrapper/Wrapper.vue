<script setup lang="ts">
const { label } = defineProps({ label: String });
</script>

<template>
  <div class="w-full flex items-center flex-col">
    <h1 data-aos="flip-left" class="text-2xl py-5 w-2/3 text-center text-grenn font-bold uppercase">
      {{ label }}
    </h1>
    <slot />
  </div>
</template>
