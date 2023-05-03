<script setup lang="ts">
import { mex } from '@/assets/static';
const { image, fullname, postsia, exprence, phone, email } = defineProps({
  image: String,
  fullname: String,
  postsia: String,
  exprence: String,
  phone: String,
  email: String,
});
</script>

<template>
    <div class="card w-[400px] h-[150px] flex justify-between bg-gray-800 p-1 rounded-sm">
      <img class="h-full w-[120px]" :src="mex" alt="img">
      <ul class="text-start">
         <li>Mahkamov Adhamjon</li>
         <li><p>Lavozimi: </p>Bolim boshlig'i</li>
          <li></li>
      </ul>
    </div>
</template>

<style scoped>
.card{

}

ul li{
  @apply text-white text-sm flex justify-between
}
</style>
