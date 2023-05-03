<script setup lang="ts">
import {faculty} from '../../constants/index'

</script>

<template>
      <h1 class="text-2xl font-bold text-orange-400 uppercase w-11/12 mx-auto rounded-md text-start p-1 bg-grenn">Fakultetlar</h1>
    <div class="fuculty w-11/12 justify-evenly my-5 py-10">
      
        <div 
        :style="{'background-image':`url(${fucul?.icon})`}"
        :class="`card bg-[url(${fucul?.icon})] flex items-center justify-center my-5 h-[200px] rounded-lg shadow-2xl p-5`" v-for="(fucul,i) of faculty" :key="i">
        
            <p class="text-xl font-bold  uppercase text-white   text-center">{{ fucul.name }}</p>
        </div>

    </div>
</template>

<style scoped>
.fuculty{
    margin: 0 auto;
    display: grid;
    grid-template-columns:repeat(4,4fr);
    justify-content: space-evenly;
    gap: 10px;
}

.card{
    background-size: cover;
    background-repeat: no-repeat;
}
</style>