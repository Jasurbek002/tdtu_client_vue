<script setup lang="ts">
import Row from '@/components/Ui/wrapper/Row.vue';
import type { IPost } from '@/modules/iterfeces';
import DataService from '@/services/DataService';
import { ref } from 'vue';
const data = ref<any>([]);
const action = ref<IPost[]>([]);

DataService.getPostsByCategory(1).then(data => {
	action.value = data?.data as IPost[];
});


</script>

<template>
	<Row label="Green Actions" styles="bg-white">
		<div
			data-aos="zoom-in"
			v-for="(el, i) of action"
			:key="i"
			class="w-[420px] min-h-[500px] bg-[var(--site-color)] shadow-amber-200 pb-3 rounded-lg border border-[#4793AF] shadow my-5 flex justify-between items-center flex-col hover:border-[#007F73]"
		>
			<RouterLink class="w-full h-full pointer" :to="`/brm/global/view/${el.id}`">
				<img class="w-full h-[300px] rounded-t-lg" :src="`https://science.tdtu.uz/apiv2/api/uploads/${el.image.images[0]}`" alt="" />
				<div class="w-full flex justify-center items-center px-4">
					<p class="text-xl text-start mt-10 text-white hover:text-red-700">{{ el.name.en }}</p>
				</div>
			</RouterLink>
		</div>
	</Row>
</template>
