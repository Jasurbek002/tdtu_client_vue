<script setup lang="ts">
import type { IPost } from '@/modules/iterfeces';
import DataService from '@/services/DataService';
import { ArrowLeftOutlined, CloudDownloadOutlined } from '@ant-design/icons-vue';
import { ref } from 'vue';
import { useRoute } from 'vue-router';
const { id }: any = useRoute().params;
const data = ref<IPost>({} as IPost);

DataService.getOnePost(Number(id)).then(res => {
	data.value = res.data;
});

const back = () => {
	window.history.back();
};

console.log(data);
</script>

<template>
	<div class="w-full flex flex-col min-h-[100vh] items-center bg-white">
		<button @click="back" class="w-[120px] h-[50px] bg-white rounded-md my-5 flex items-center justify-around mr-auto ml-10 text-xl"><ArrowLeftOutlined /> back</button>

		<h1 class="w-10/12 text-center text-2xl font-bold text-black my-10">
			{{ data?.name?.en }}
		</h1>
		<div class="w-[1000px] h-[500px]">
			<img class="w-full h-full rounded shadow-white" :src="`https://science.tdtu.uz/apiv2/api/uploads/${data?.image.images[0]}`" alt="" />
		</div>

		<p class="text-xl font-normal w-10/12 text-black my-5">
			{{ data?.description?.en }}
		</p>

		<div v-if="data.file" class="w-full items-center justify-start">
			<a class="w-[400px] ml-[120px] bg-green-600 shadow-md rounded-md p-1 flex items-center justify-evenly" target="_blank" :href="`https://science.tdtu.uz/apiv2/api/${data?.file.url}`">
				<p class="text-xl font-normal text-white my-5">view file</p>
				<CloudDownloadOutlined :style="{ fontSize: '45px',color:'#ffffff' }" />
			</a>
		</div>

		<div v-for="el of data?.sub_titles" class="w-10/12">
			<h1 class="w-10/12 text-start text-xl font-bold text-black my-10">
				{{ el?.title_en }}
			</h1>
			<li class="text-xl font-normal w-10/12 text-black my-5 ml-14">
				{{ el?.text_en }}
			</li>
		</div>
	</div>
</template>
