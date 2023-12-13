<script setup lang="ts">
import {faculty} from '@/constants/index'
import { useI18n } from "vue-i18n";
const {t} = useI18n();


</script>

<template>
     <div class="w-full bg-white">
        <h1 class="text-2xl font-bold text-[#010039] uppercase w-11/12 mx-auto rounded-md text-start p-1 ">{{ t('fukulty') }}</h1>
    <div class="fuculty w-11/12 justify-evenly my-5 py-10">
      
        <div
        data-aos="flip-left"
        :style="{'background-image':`url(${fucul?.icon})`}"
        :class="`card bg-[url(${fucul?.icon})] flex items-center justify-center my-5 h-[200px] sm:w-[300px] ssm:w-[300px] transform duration-500 rounded-lg shadow-2xl p-5`" v-for="(fucul,i) of faculty" :key="i">
            <a target="_blank" :href="fucul.link"  class="w-full fon h-full absolute rounded-lg"></a>
            <p class="text-xl font-bold  uppercase text-white   text-center">{{ fucul.name }}</p>
        </div>

    </div>
     </div>
</template>

<style scoped>
.fuculty{
    margin: 0 auto;
    grid-template-columns:repeat(4,4fr);
    justify-content: space-evenly;
    gap: 10px;
    @apply grid lg:grid md:grid sm:flex ssm:flex sm:flex-wrap ssm:flex-wrap
}

.card{
    background-size: cover;
    background-repeat: no-repeat;
    cursor: pointer;
    transition: all 3s linear 0s;
}

.card:hover .fon{
    @apply z-50
}
.card a{
    background-color: rgba(0, 0, 0, 0.619);
}
.card:hover{
    background-size: 150% 150%;
    transition: all 3s linear 0s;
}
</style>