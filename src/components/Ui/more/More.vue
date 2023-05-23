<script setup lang="ts">
import Wrapper from '../wrapper/Wrapper.vue';
import Col from "../wrapper/Col.vue"
import { useDataStore } from '@/stores/news';
import { useRoute } from 'vue-router';
const route = useRoute()
const store = useDataStore()
const data = store.getOneNews(+route.params?.id)
</script>

<template>
<Wrapper :label="data?.title" styles="bg-white">
    <Col>
      <div class="w-10/12 h-[600px] rounded-md my-4">
        <img class="w-full h-full rounded-md" :src="data?.img" alt="img">
      </div>
      <p class="w-10/12 text-xl text-start text-black">
        {{ data?.text }}
      </p>
    </Col>
</Wrapper>
</template>