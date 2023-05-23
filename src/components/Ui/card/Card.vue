<script setup lang="ts">
  import { LikeOutlined , EyeOutlined} from '@ant-design/icons-vue';
  const {data} = defineProps({
    data:Object
  })
console.log(data);

  </script>

<template>
    <a-card
    data-aos="zoom-out-left"
    hoverable style="width: 300px ; height: 350px; margin: 20px 0;">
      <template #cover>
        <a-image
        height="200px"
        width="300px"
        class="rounded-md"
        alt="example"
        :src="data?.img"
       
        />
        
      </template>
      <template #actions>
        <like-outlined key="like" />
        <router-link :to="`/news/${data?.id}`">
          <eye-outlined key="eye" />
        </router-link>
    
      </template>
      <a-card-meta title="news" :description="data?.title?.slice(0,50)"/>
    </a-card>
  </template>
  





