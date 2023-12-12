<script setup lang="ts">
import Row from "@/components/Ui/wrapper/Row.vue";
import { project } from "@/constants/projects";
import { EyeOutlined } from "@ant-design/icons-vue";
import Item from "@/components/Ui/Item/Item.vue";
import { ref } from "vue";
import DataService from "@/services/DataService";
interface Project {
  author_uz: string;
  dedline: string;
  loyha_id: number;
  thema_en: string;
  thema_uz: string;
  tip: string;
}
let projects = ref<Project[]>([]);
const check = ref("");

async function getProjects(type: string) {
  DataService.getData("/loyha").then((res) => {
     check.value = type
    const data =
      type === "all"
        ? res.data.data
        : res.data.data.filter((el: Project) => el.tip === type);
    projects.value = data;
  });
}

getProjects("all");
</script>

<template>
  <Row label="Ilmiy loyihalar">
    <a-card
      data-aos="fade-right"
      :style="`margin-top: 50px;background-color:${check === pro.type ? '#F1F4FA':'white'};`"
      v-for="(pro, i) of project"
      class="w-[300px]"
      :title="pro.name"
      :bordered="false"
    >
      <a-button @click="getProjects(pro.type)" type="primary" size="large">
        <template #icon>
          <EyeOutlined />
        </template>
        more
      </a-button>
    </a-card>

    <Item
    v-if="projects.length !== 0"
      v-for="(el, i) of projects"
      :thema="el.thema_uz"
      :author="el.author_uz"
      :date="el.dedline"
    />
    <div class="text-xl w-full text-center mt-28 text-green-600" v-else="projects.length === 0">Bunday turdagi loihalar hozircha mavjud emas</div>
  </Row>
</template>
