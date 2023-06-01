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
    class="grid grid-rows-1 border-4 border-transparent hover:border-green-900  transition duration-700 ease-in-out  mt-2 rounded-md shadow-2xl items-center  grid-flow-col gap-1 w-[500px] px-2 py-1 sh bg-white ">
      <img class="col-span-1 h-[135px] w-[150px] rounded-md" :src="image" alt="img">
      <ul class="text-start col-span-2 h-full flex flex-col my-auto pl-1 justify-evenly border-l-2 border-gray-500">
         <li class="font-normal text-xl text-grenn w-[340px]">{{ fullname }}</li>
         <li><p>Lavozimi: </p>{{ postsia }}</li>
         <li><p>Qabul vaqti: </p> {{ exprence }} </li>
         <li><p>Telefon: </p>{{ phone }}</li>
         <li><p>E-Mail: </p>{{ email }}</li>
      </ul>
    </div>
</template>

<style scoped>

ul li{
  @apply flex  justify-start  p-0 text-sm font-medium 
}

ul li p{
  @apply m-0 mr-1 p-0 text-sm text-grenn font-medium 
}
</style>
