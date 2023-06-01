<script setup lang="ts">
import Row from "@/components/Ui/wrapper/Row.vue";
import { courses,courses_text } from "@/constants/students";
</script>

<template>
  <Row label="Ilmiy To'garaklar">
    <a-collapse class="w-11/12 p-2 rounded-md" accordion>
      <a-collapse-panel v-for="(el, i) of courses" :key="i" :header="el.title">
        <p>{{ el.text }}</p>
      </a-collapse-panel>
    </a-collapse>
    <div class="w-11/12 bg-grenn my-10 rounded-xl p-2 shadow-2xl shadow-gray-800">
      <p class="text-sm text-slate-400 font-medium">
        {{ courses_text }}
      </p>
    </div>
  </Row>
</template>
