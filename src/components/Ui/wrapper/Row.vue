<script setup lang="ts">
const props = defineProps({
  label: String,
  styles: String,
});
</script>

<template>
  <div :class="`w-full flex flex-wrap justify-evenly py-10 ${props.styles}`">
    <h1
      data-aos="zoom-in"
      class="uppercase px-5 py-2 rounded-lg w-11/12 bg-white text-center text-2xl text-grenn font-bold"
    >
      {{ props.label }}
    </h1>
    <slot />
  </div>
</template>
