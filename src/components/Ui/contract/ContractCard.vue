<script setup lang="ts">
const { title, name, key } = defineProps({
	title: String,
	name: String,
	author: String,
	key: String,
});
</script>

<template>
	<div :key="key" class="bg-white h-[200px] shadow w-11/12 md:flex-wrap sm:flex-wrap flex justify-around my-3 items-center p-2 rounded-md lg:flex-nowrap">
		<div class="text-grenn w-10/12 text-center font-bold max-w-10/12">{{ title }}</div>
		<div class="sm:flex border-l-2 h-full lg:flex flex-col md:flex flex justify-center items-center sm:w-full md:w-full mt-2 lg:flex-nowrap  lg:w-[200px]">
			<p class="text-grenn"><b class="font-bold border-b-2 w-11/12 text-black">Muddat: </b>{{ name }}</p>
			<p class="text-grenn"><b class="font-bold text-black">Masul: </b>{{ author }}</p>
		</div>
	</div>
</template>
