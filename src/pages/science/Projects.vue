<script setup lang="ts">
import Row from "@/components/Ui/wrapper/Row.vue";
import { project } from "@/constants/projects";
import { EyeOutlined } from "@ant-design/icons-vue";
import Item from "@/components/Ui/Item/Item.vue";
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
      <RouterLink :to="pro.to">
        <a-button type="primary" size="large">
          <template #icon>
            <EyeOutlined />
          </template>
          more
        </a-button>
      </RouterLink>
    </a-card>

    <Item
      thema="Ф-ОТ-2021-497 Фотоэлектрик иссиқлик батареялари асосидаги қуёш когенератсион қурилмаларини яратишнинг илмий асосларини ишлаб чиқиш "
      author="Аюпов Қутуп Саутович"
      date="2021-2025"
    />
  </Row>
</template>
