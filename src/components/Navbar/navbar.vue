<script setup lang="ts">
import { navlinks } from "../../constants/navlink";
import { useI18n } from "vue-i18n";
const { t, locale } = useI18n();
</script>

<template>
  <nav
    class="w-full lg:flex md:hidden sm:hidden ssm:hidden flex items-center justify-evenly bg-[var(--site-color)] sticky inset-0 z-50 mt-0 top-0"
  >
    <li v-for="links of navlinks" :key="links.id" class="list-none list">
      <RouterLink class="menu" :to="links.to">
        <p class="m-0 py-4">
          {{ t(links.name) }}
        </p>
      </RouterLink>
      <div
        data-aos="zoom-in-up"
        v-if="links.items.length !== 0"
        class="modal w-[800px] p-8 hidden bg-[#F0F4FA] items-center flex-col rounded-sm opacity-0 absolute transform translate-y-[3px] duration-1000 ease-linear"
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
  @apply text-white text-base uppercase hover:text-gray-400 relative;
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
