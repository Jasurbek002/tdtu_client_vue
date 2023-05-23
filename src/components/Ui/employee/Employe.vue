<script setup lang="ts">
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
    <div 
    data-aos="fade-down"
     data-aos-easing="linear"
     data-aos-duration="500"
    class="grid grid-rows-1 border-4 border-transparent hover:border-green-900  duration-500 ease-out  mt-2 rounded-md shadow-2xl items-center  grid-flow-col gap-1 w-[500px] px-2 sh bg-white ">
      <img class="col-span-1 h-[135px] rounded-md" :src="image" alt="img">
      <ul class="text-start col-span-2 flex flex-col justify-center">
         <li class="font-bold text-grenn">{{ fullname }}</li>
         <li><p>Lavozimi: </p>{{ postsia }}</li>
         <li><p>Qabul vaqti: </p> {{ exprence }} </li>
         <li><p>Telefon: </p>{{ phone }}</li>
         <li><p>E-Mail: </p>{{ email }}</li>
      </ul>
    </div>
</template>

<style scoped>

ul li{
  @apply text-xl flex  justify-start  p-0  
}

ul li p{
  @apply m-0 mr-1 p-0 text-xl text-grenn font-bold 
}
</style>
