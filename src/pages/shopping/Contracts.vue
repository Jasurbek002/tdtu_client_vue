<script setup lang="ts">
import Row from '@/components/Ui/wrapper/Row.vue';
import ContractCard from '@/components/Ui/contract/ContractCard.vue';
import DataService from '@/services/DataService';
import { ref } from 'vue';
const contracts = ref<any>([]);
DataService.getData('/economy').then(res => {
	contracts.value = res.data.data;
  console.log(contracts.value)
});
</script>

<template>
	<Row label="Xo'jalik shartnomalar">
		<ContractCard
			v-for="(el, i) of contracts"
			:title="el.department"
			:name="el.name_uz"
      :author="el.name_en"
		/>
	</Row>
</template>
