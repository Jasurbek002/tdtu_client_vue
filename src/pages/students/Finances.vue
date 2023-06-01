<script setup lang="ts">
import Row from "@/components/Ui/wrapper/Row.vue";
import { finace } from "@/constants/students";
</script>

<template>
  <Row label="Davalat stipendiyalari">
    <div
    v-for="(el,i) of finace"
    :key="i"
    class="w-96 h-20 shadow-myshadow flex items-center justify-center text-green-700 font-medium border-2 border-emerald-400 hover:bg-white cursor-pointer transition-all duration-500 hover:border-orange-800 m-2">
    {{ el }}
    </div>
  </Row>
</template>
