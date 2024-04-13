<script setup lang="ts">
import Wrapper from '../wrapper/Wrapper.vue';
import Col from '../wrapper/Col.vue';
import { useDataStore } from '@/stores/news';
import { useRoute } from 'vue-router';
import DataService from '@/services/DataService';
import { ref } from 'vue';
const { id } = useRoute().params;

const bunner = ref<any>({});

DataService.getOneData(`/banner`, String(id)).then(res => {
	console.log(res);
	bunner.value = res.data.data;
});
</script>

<template>
	<Wrapper :label="bunner?.title_uz" styles="bg-white justify-center">
		<div class="w-full h-[100vh] flex flex-col items-center rounded-md my-4 te">
			<img class="w-[70%] h-[600px] rounded-md" :src="`https://science.tdtu.uz/${bunner.image}`" alt="img" />
			<p class="w-[70%] text-xl text-start text-black">
				{{ bunner?.text_uz }}
			</p>
		</div>
	</Wrapper>
</template>
