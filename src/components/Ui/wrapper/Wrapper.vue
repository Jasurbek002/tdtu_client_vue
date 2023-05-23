<script setup lang="ts">
const { label,styles } = defineProps({ label: String ,styles:String});
</script>

<template>
  <div :class="`w-full flex items-center flex-col ${styles}`">
    <h1 data-aos="flip-left" class="text-2xl py-5 w-2/3 text-center text-grenn font-bold uppercase">
      {{ label }}
    </h1>
    <slot />
  </div>
</template>
