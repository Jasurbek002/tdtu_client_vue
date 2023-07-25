<script setup lang="ts">
import { ref } from 'vue';
import { climate } from "../../../constants/climate";
import { ArrowLeftOutlined } from '@ant-design/icons-vue';
import { useRoute } from 'vue-router';
const {id} =  useRoute().params
const data = ref<any>({})


console.log(id);
data.value = climate?.find((el:any) => el?.id == id)

const back = () => {
window.history.back()
}

</script>


<template>
   <div class="w-full flex flex-col min-h-[100vh] items-center  bg-green-800">
      <button @click="back" class="w-[120px]  h-[50px] bg-white rounded-md my-5 flex items-center justify-around mr-auto ml-10 text-xl"><ArrowLeftOutlined /> back</button>
        <h1 class="w-10/12 text-center text-2xl font-bold text-white my-10">{{ data?.title }}</h1>
        <div  class="max-w-[1200px] h-[400px]">
          <img class="w-full h-full rounded shadow-white" :src="data?.image" alt="">
        </div>
        <p class="text-xl font-normal w-10/12 text-white my-5">{{ data?.text }}</p>
   </div> 
</template>