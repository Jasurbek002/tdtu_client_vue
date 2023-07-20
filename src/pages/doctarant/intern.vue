<script setup lang="ts">
import Table from "@/components/Ui/table/Table.vue";
import Row from "@/components/Ui/wrapper/Row.vue";
import { ref } from "vue";
import DataService from "@/services/DataService";
import {resDataStore} from "@/stores/data"
const store = resDataStore()
interface Doc {
    type:string
}
let data = ref([
  {
    doc_id: 1,
    full_name: "Kamolov Ahmadjon Abduraximovich",
    job: "Samarqand davalar arxitektura va qurulish inistituti dekan orinbosari",
    special: "01.04.04 - fizik Elektronika",
    type: "ds",
  },
]);

DataService.getData('/doctorate').then(res => {
 data.value = res?.data?.data?.filter((el:Doc) => el.type === 'intern')
})

const columns = [
  {
    title: "F.I.O",
    dataIndex: "full_name",
  },
  {
    title: "Ixtisosligi",
    className: "column-money",
    dataIndex: "job",
  },
  {
    title: "Ish Joyi",
    dataIndex: "special",
  },
];



console.log(store.getnews);
</script>

<template>
  <Row label="Stajor tadqiqotchi">
    <Table class="w-11/12" :data="data" :columns="columns" />
  </Row>
</template>
