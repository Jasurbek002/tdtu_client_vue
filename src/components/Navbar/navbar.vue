<script setup lang="ts">
import { ref } from "vue";
import { navlinks } from "../../constants/navlink";
import { useI18n } from "vue-i18n";
const { t, locale } = useI18n();
const active = ref<{ link_id: number; index: number }>({
  link_id: 0,
  index: 0,
});
const onMaouse = (id: number, index: number) => {
  active.value.link_id = id;
  active.value.index = index;
};
</script>

<template>
  <nav
    class="w-full lg:flex md:hidden sm:hidden ssm:hidden flex items-center justify-evenly bg-[var(--site-color)] sticky inset-0 z-50 mt-0 top-0"
  >
    <div
      class="w-full lg:flex md:hidden sm:hidden ssm:hidden flex items-center justify-evenly bg-[var(--site-color)] relative"
    >
      <li
        @mouseenter="onMaouse(links.id, i)"
        v-for="(links, i) of navlinks"
        :key="links.id"
        class="list-none"
      >
        <RouterLink @click="onMaouse(0, 0)" class="menu" :to="links.to">
          <p class="m-0 py-4">
            {{ t(links.name) }}
          </p>
        </RouterLink>
      </li>
      <div
        data-aos="zoom-in-up"
        v-if="navlinks[active.index].items.length !== 0"
        v-show="active.link_id === navlinks[active.index].id"
        @click="onMaouse(0,0)"
        class="modal w-full h-[100vh] p-8 hidden bg-black/30 items-center flex-col rounded-sm opacity-0 absolute left-0 top-[61px] right-0 transform translate-y-[3px] duration-1000 ease-linear"
      >
        <div
          class="w-10/12 h-[300px] flex items-start flex-col justify-center p-8 rounded-lg bg-white"
        >
          <RouterLink
            @click="onMaouse(0, 0)"
            class="item"
            v-for="(items, i) of navlinks[active.index].items"
            :key="i"
            :to="items.to"
          >
            {{ t(items.name) }}
          </RouterLink>
        </div>
      </div>
    </div>
  </nav>
</template>

<style scoped>
.menu {
  @apply text-white text-base uppercase hover:text-gray-400;
}
.modal {
  z-index: unset;
  @apply hover:opacity-100 opacity-100 flex hover:flex;
}

.item {
  @apply text-cyan-700 text-xl my-1 text-start hover:text-black border-b-2 border-white hover:border-sky-200;
}
</style>
