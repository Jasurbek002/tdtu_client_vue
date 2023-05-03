<script setup lang="ts">
import { fack, schema, prof, magister,student } from "@/assets/static";

const { kafedras, fucultys, profs, doctarnts, students } = defineProps({
  kafedras: String,
  fucultys: String,
  profs: String,
  doctarnts: String,
  students: String,
});



const score = [
  {
    id: 1,
    name: "Kafedralar",
    count: kafedras,
    icon: schema,
  },
  {
    id: 2,
    name: "Fakultetlar",
    count: fucultys,
    icon: fack,
  },
  {
    id: 3,
    name: "Professor o'qituvchilar",
    count: profs,
    icon: prof,
  },
  {
    id: 4,
    name: "Doktarantlar",
    count: doctarnts,
    icon: magister,
  },
  {
    id: 5,
    name: "Students",
    count: students,
    icon:student ,
  },
];

</script>

<template>
  <section class="score">
    <h1 class="w-11/12 text-xl text-white uppercase my-4">Statistika</h1>
    <ul
      class="w-[220px] flex justify-around items-center flex-col border-2 border-md border-white hover:border-grenn rounded-md duration-500 transform h-[270px]"
      v-for="(scor, i) of score"
    >
      <p class="text-md text-gray-50 font-bold text-center uppercase">
        {{ scor.name }}
      </p>
      <img class="w-[70px]" :src="scor.icon" alt="icon">
      <i class="text-xl text-gray-50 font-bold">{{ scor.count }}</i>
    </ul>
  </section>
</template>

<style scoped lang="scss">
.score {
  background: #00000099;
  @apply flex w-full py-5 flex-wrap justify-evenly items-baseline;
}
</style>
