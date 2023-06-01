<script setup lang="ts">
import Row from "@/components/Ui/wrapper/Row.vue";
import { olimp } from "@/constants/students";
</script>

<template>
  <Row label="Olimpiadalar">
    <a-collapse class="w-11/12 p-2 rounded-md" accordion>
      <a-collapse-panel v-for="(el, i) of olimp" :key="i" :header="el.title">
        <p>{{ el.text }}</p>
      </a-collapse-panel>
    </a-collapse>
  </Row>
</template>
