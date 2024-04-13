<script setup lang="ts"></script>
<script setup lang="ts">
import Row from "@/components/Ui/wrapper/Row.vue";
import { DownloadOutlined } from "@ant-design/icons-vue";
</script>

<template>
  <Row styles="bg-white h-[100vh]" label="ILMIY-TEXNIK KENGASH">
    <a-card
      class="w-[350px] h-[200px] mt-10 shadow-md shadow-slate-500"
      title="ILMIT-TEXNIK kengash nizomi"
      :bordered="false"
    >
      <a-button  type="primary" size="large" target="_blanck" href="https://science.tdtu.uz/technizom.pdf">
        <template #icon>
          <DownloadOutlined />
        </template>
        Download
      </a-button>
    </a-card>
    <a-card
    class="w-[350px] h-[200px] mt-10 shadow-md shadow-slate-500"
      title="ILMIT-TEXNIK kengash tarkibi"
      :bordered="false"
    >
      <a-button type="primary" size="large" target="_blanck" href="https://science.tdtu.uz/techkengash.pdf">
        <template #icon>
          <DownloadOutlined />
        </template>
        Download
      </a-button>
    </a-card>
  </Row>
</template>
