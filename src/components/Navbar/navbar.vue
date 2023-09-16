<script setup lang="ts">
import { navlinks } from "../../constants/navlink";
import { useI18n } from "vue-i18n";
const { t, locale } = useI18n();
</script>

<template>
  <nav
    class="w-full lg:flex md:hidden sm:hidden ssm:hidden flex items-center justify-evenly bg-grenn h-[60px] sticky z-50 mt-0 top-0"
  >
    <li v-for="links of navlinks" :key="links.id" class="list-none relative">
      <RouterLink class="menu" :to="links.to">{{ t(links.name) }}</RouterLink>
      <div
        v-if="links.items.length !== 0"
        class="modal w-[250px] p-2 hidden items-start flex-col rounded-md bg-white opacity-0 absolute transform duration-700 ease"
      >
        <RouterLink
          class="item"
          v-for="(items, i) of links.items"
          :key="i"
          :to="items.to"
        >
          {{ t(items.name) }}
        </RouterLink>
      </div>
    </li>
  </nav>
</template>

<style scoped>
.menu {
  @apply text-white text-base uppercase hover:text-gray-400;
}
.modal {
  z-index: unset;
  @apply hover:opacity-100 hover:flex;
}
.menu:hover ~ .modal {
  @apply opacity-100 flex;
}
.item {
  @apply text-cyan-700 text-xl my-1 text-start hover:text-black border-b-2 border-white hover:border-sky-200;
}
</style>
