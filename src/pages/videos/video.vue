<script setup lang="ts">
import DataService from '@/services/DataService';
import { ref } from 'vue';
const media = ref<any>([]);
DataService.getData('/media/get/all').then(({ data }) => {
	media.value = data.data;
	console.log(data.data);
});
</script>

<template>
	<div class="w-full flex py-10 justify-evenly flex-wrap h-[100vh] bg-white">
		<h1 class="w-full text-center font-bold text-green-700 text-2xl">Toshkent davlat texnika universiteti, ilmiy bo'limi hayotiga oid video lavhalar</h1>
		<div class="rounded-md shadow-lg border-[1px] border-slate-300 bg-green-700 w-[600px] h-[400px] flex flex-col justify-start items-center" v-for="(el, i) of media">
			<video controls src="../../assets/videos/inno.mp4" style="width: 600px; background: white; height: 300px; border-radius: 5px 5px 0px 0px"></video>
			<p class="text-xl flex justify-center my-2 text-center text-white">Oldin aytib o'tganimizdek, 2023 yil 16-20 oktyabr sanasida "InnoWeek-2023" innovatsion g'oyalar haftaligi bo'lib o'tdi</p>
		</div>
		<div class="rounded-md shadow-lg border-[1px] border-slate-300 bg-green-700 w-[600px] h-[400px] flex flex-col justify-start items-center" v-for="(el, i) of media">
			<video controls src="../../assets/videos/tdtu.mp4" style="width: 600px; background: white; height: 300px; border-radius: 5px 5px 0px 0px"></video>
			<p class="text-xl flex justify-center my-2 text-center text-white">
				Malayziyaning Kuala-Lumpur shahrida bo‘lib o‘tayotgan “QS Higher Education Summit Asia Pacific 2023” sammitida 
			</p>
		</div>
	</div>
</template>
