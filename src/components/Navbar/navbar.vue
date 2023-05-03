<script setup lang="ts">
import {navlinks} from "../../constants/navlink"
</script>

<template>
  <nav class="w-full flex items-center justify-evenly bg-grenn h-[60px] sticky z-50 mt-0 top-0">
    <li v-for="links of navlinks" :key="links.id" class="list-none">
      <RouterLink class="menu" :to="links.to">{{ links.name }}</RouterLink>
      <div v-if="links.items.length !== 0" class="modal   w-[250px] p-2 flex items-start flex-col rounded-sm bg-white opacity-0 absolute transform duration-700 ease  ">
         <RouterLink class="item" v-for="(items,i) of links.items" :key="i" :to="items.to">
           {{ items.name }}
        </RouterLink>
      </div>
    </li>
  </nav>
</template>

<style scoped>
.menu{
  @apply text-white text-base uppercase relative hover:text-gray-400 ;
}

.modal{
  z-index: -9999px;
  @apply hover:opacity-100 -translate-y-40 hover:translate-y-0
}
.menu:hover ~ .modal{
  @apply opacity-100;
}


.item{
  @apply text-cyan-700 text-xl my-1 text-start hover:text-black border-b-2 border-white hover:border-sky-200;
}
</style>
