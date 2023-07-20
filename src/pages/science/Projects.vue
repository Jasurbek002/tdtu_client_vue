<script setup lang="ts">
import Row from "@/components/Ui/wrapper/Row.vue";
import { project } from "@/constants/projects";
import { EyeOutlined } from "@ant-design/icons-vue";
import Item from "@/components/Ui/Item/Item.vue";
import { ref } from "vue";
import DataService from "@/services/DataService";
import { resDataStore } from "@/stores/data";
interface Project {
  author_uz:string,
  dedline: string,
  loyha_id: number,
  thema_en: string,
  thema_uz: string
  tip: string
}
let projects = ref<Project[]>([]);
const type = ref("international");


DataService.getData("/loyha").then((res) => {
  const data = res.data.data
  projects.value = data
});

console.log(projects.value);


// const data = projects.value.filter((el) =>{
//    el.tip === 'elementar'
//    console.log(el);
   
//   })

// console.log(data);


</script>

<template>
  <Row label="Ilmiy loyihalar">
    <a-card
      data-aos="fade-right"
      style="margin-top: 50px"
      v-for="(pro, i) of project"
      class="w-[300px]"
      :title="pro.name"
      :bordered="false"
    >
      <!-- <RouterLink :to="pro.to"> -->
        <a-button @click="type = 'elementar'" type="primary" size="large">
          <template #icon>
            <EyeOutlined />
          </template>
          more
        </a-button>
      <!-- </RouterLink> -->
    </a-card>

    <Item
    v-for="(el,i) of projects"
      :thema="el.thema_uz"
      :author="el.author_uz"
      :date="el.dedline"
    />
  </Row>
</template>
