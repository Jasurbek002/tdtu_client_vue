<script setup lang="ts">
import Row from '@/components/Ui/wrapper/Row.vue';
import { patents22, patents23 } from '@/constants/object';
</script>

<template>
	<Row styles="bg-white min-h-[100vh] w-11/12 px-[150px]" label="INTELEKTUAL MULK OBYEKTLARI">
		<p class="w-11/12 border-b-2 border-green-500 text-2xl my-4 p-0 text-green-700">2023</p>
		<a-card style="margin-bottom: 30px"
    v-for="(el, i) of patents23"
     :key="i" class="w-[350px] my-5 h-[220px] mt-10 shadow-md shadow-slate-500"
      :bordered="false"
      
      >
			<div class="flex flex-col w-full h-[150px] justify-between">
				<p class="text-sm text-green-700 text-center">{{ el.name }}</p>
				<a-button type="primary" size="large" target="_blanck" :href="`https://science.tdtu.uz/${el.file}`">
					<template #icon>
						<DownloadOutlined />
					</template>
					Download
				</a-button>
			</div>
		</a-card>
		<p class="w-11/12 border-b-2 border-green-500 text-2xl my-4 p-0 text-green-700">2022</p>
		<a-card style="margin-bottom: 30px" v-for="(el, i) of patents22" :key="i" class="w-[350px] h-[220px] mt-10 shadow-md shadow-slate-500" :bordered="false">
			<div class="flex flex-col w-full h-[150px] justify-between">
				<p class="text-sm text-green-700 text-center">{{ el.name }}</p>
				<a-button type="primary" size="large" target="_blanck" :href="`https://science.tdtu.uz/${el.file}`">
					<template #icon>
						<DownloadOutlined />
					</template>
					Download
				</a-button>
			</div>
		</a-card>
	</Row>
</template>
