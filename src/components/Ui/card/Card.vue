<script setup lang="ts">
import { LikeOutlined, EyeOutlined } from "@ant-design/icons-vue";
const { data } = defineProps({
  data: Object,
});
console.log(data);
</script>

<template>
  <a-card
    data-aos="zoom-out-left"
    hoverable
    style="width: 300px; height: 350px; margin: 20px 0"
  >
    <template #cover>
      <a-image
        height="200px"
        width="300px"
        class="rounded-md"
        alt="example"
        :src="`http://34.204.6.47:5000/${data?.image}`"
      />
    </template>
    <template #actions>
      <like-outlined key="like" />
      <a target="_blank" :href="data?.link">
        <eye-outlined key="eye" />
      </a>
    </template>
    <a-card-meta title="news" :description="data?.title_uz" />
  </a-card>
</template>
