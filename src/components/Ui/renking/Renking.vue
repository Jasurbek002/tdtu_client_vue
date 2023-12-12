<script lang="ts" setup>
import { renking } from "../../../assets/static/reyting";
</script>

<template>
  <div class="w-full h-[300px] flex  items-center justify-evenly bg-white">
    <RouterLink class="w-[300px] h-[200px] rounded-sm bg-green-100 border-[1px]" v-for="(el, i) of renking" to="/">
      <img class="w-full h-full rounded-sm" :src="el" alt="link" />
    </RouterLink>
  </div>
</template>
