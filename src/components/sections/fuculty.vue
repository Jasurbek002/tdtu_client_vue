<script setup lang="ts">
import {faculty} from '../../constants/index'

</script>

<template>
      <h1 class="text-2xl font-bold text-white uppercase w-11/12 mx-auto rounded-md text-start p-1 bg-grenn">Fakultetlar</h1>
    <div class="fuculty w-11/12 justify-evenly my-5 py-10">
      
        <div 
        data-aos="flip-left"
        :style="{'background-image':`url(${fucul?.icon})`}"
        :class="`card bg-[url(${fucul?.icon})] flex items-center justify-center my-5 h-[200px] sm:w-[300px] ssm:w-[300px] rounded-lg shadow-2xl p-5`" v-for="(fucul,i) of faculty" :key="i">
            <div class="w-full h-full absolute rounded-lg"></div>
            <p class="text-xl font-bold  uppercase text-white   text-center">{{ fucul.name }}</p>
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
.card div{
    background-color: rgba(0, 0, 0, 0.619);
}
.card:hover{
    background-size: 150% 150%;
    transition: all 3s linear 0s;
}
</style>