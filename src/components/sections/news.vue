<script setup lang="ts">
import DataService from '@/services/DataService';
import { ref } from 'vue';
import { useI18n } from 'vue-i18n';
import { useDataStore } from '@/stores/news';
const { t, locale } = useI18n();
const store = useDataStore();
interface Bunner {
	banner_id: number;
	title_uz: string;
	title_en: string;
	text_uz: string;
	text_en: string;
	image: string;
}
const news = ref<Bunner[]>([]);
DataService.getData('/banners').then(res => {
	news.value = res.data.data.splice(0,3);
});

const localeNews = store.getnews;
</script>

<template>
	<div class="flex h-full justify-center flex-col">
		<div v-for="(el, i) of news" :data="el" :key="i" class="w-[500px] h-[160px] bg-white shadow flex items-center p-2 my-2 rounded-md justify-between">
			<img class="w-[180px] mr-5 h-[140px] rounded-md" :src="`https://science.tdtu.uz/${el.image}`" alt="img/news" />
			<div>
				<h2>{{ el.title_uz.slice(0, 60) }}...</h2>
				<p>{{ el.text_uz.slice(0, 70) }}...</p>
				<RouterLink class="w-[90px] h-[35px] flex items-center text-sm justify-center ml-auto mr-5 rounded-md bg-green-500 text-white" :to="`/news/${el.banner_id}`"> Batafsil... </RouterLink>
			</div>
		</div>
	</div>
</template>

<style scoped>
.bg {
	width: 500px;
	height: 400px;
	background: rgb(255, 255, 255);
	background: linear-gradient(0deg, rgba(255, 255, 255, 0.4431022408963585) 9%, rgba(255, 255, 255, 1) 22%);
}
</style>
