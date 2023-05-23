<script setup lang="ts"></script>
<script setup lang="ts">
import Row from "@/components/Ui/wrapper/Row.vue";
import { DownloadOutlined } from "@ant-design/icons-vue";
</script>

<template>
  <Row label="ILMIY-TEXNIK KENGASH">
    <a-card
      class="w-[350px] mt-10"
      title="ILMIT-TEXNIK kengash nizomi"
      :bordered="false"
    >
      <a-button type="primary" size="large" loading>
        <template #icon>
          <DownloadOutlined />
        </template>
        Download
      </a-button>
    </a-card>
    <a-card
      class="w-[350px]"
      title="ILMIT-TEXNIK kengash tarkibi"
      :bordered="false"
    >
      <a-button type="primary" size="large" loading>
        <template #icon>
          <DownloadOutlined />
        </template>
        Download
      </a-button>
    </a-card>
  </Row>
</template>
