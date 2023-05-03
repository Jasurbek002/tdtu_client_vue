<template>
    <a-card hoverable style="width: 300px; margin: 20px 0;">
      <template #cover>
        <img
          alt="example"
          src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
        />
      </template>
      <template #actions>
        <like-outlined key="like" />
        <eye-outlined key="eye" />
      </template>
      <a-card-meta title="Card title" description="This is the description"/>
    </a-card>
  </template>
  <script setup lang="ts">
  import { LikeOutlined , EyeOutlined} from '@ant-design/icons-vue';

  </script>





