<script setup lang="ts">
import Row from "@/components/Ui/wrapper/Row.vue";
import { project } from "@/constants/projects";
import { EyeOutlined } from "@ant-design/icons-vue";

</script>

<template>
  <Row label="Ilmiy loyihalar">
    <a-card
    data-aos="fade-right"
    style="margin-top: 50px;"
      v-for="(pro,i) of project"
      class="w-[300px]"
      :title="pro.name"
      :bordered="false"
    >

    <RouterLink :to="pro.to">
        <a-button type="primary" size="large">
        <template #icon>
          <EyeOutlined />
        </template>
          more
      </a-button>
    </RouterLink>
    </a-card>
    
     
    </Row>
</template>
