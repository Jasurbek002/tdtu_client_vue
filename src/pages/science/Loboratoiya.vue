<script lang="ts" setup>
import Row from "@/components/Ui/wrapper/Row.vue";
import { rooms } from "@/constants/lobaratory";
import { lobaratory } from "@/assets/static";
</script>
<template>
  <div
    :style="`background-image:url(${lobaratory});`"
    class="min-h-[100vh] bg-no-repeat bg-cover"
  >
    <Row
      styles="w-10/12"
      label="ENERGIYA TEJAMKOR TEXNOLOGIYALARI, NAZARAT-ULCHOV VA AVTOMATLASHTIRILGAN TIZIMLAR OTM LAR ARO ILMIY TADQIQOT LABORATORIYASI."
    >
      <div
        class="w-[250px] my-10 shadow-md shadow-blue h-[150px] rounded-md backdrop-blur-3xl cursor-pointer flex justify-center items-center border-2 transform duration-700 border-transparent hover:border-white"
        v-for="(room, i) of rooms"
        :key="i"
      >
        <RouterLink to="/">
          <p class="text-xl text-center text-white font-medium">
            {{ room.name }}
          </p>
        </RouterLink>
      </div>
    </Row>
  </div>
</template>
