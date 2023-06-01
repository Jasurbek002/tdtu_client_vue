<script setup lang="ts">
import { ref, watch } from "vue";
import type { SelectProps } from "ant-design-vue";
import { useI18n } from "vue-i18n";
import { GlobalOutlined } from "@ant-design/icons-vue";
import { sun, moon } from "@/assets/static/index";
import { useThemaStore } from "@/stores/thema";
const { t, locale } = useI18n();
const store = useThemaStore();
const options = ref<SelectProps["options"]>([
  { value: "uz", label: "uz" },
  { value: "en", label: "en" },
]);
const changeLanguage = (lang: string) => {
  locale.value = lang;
};
</script>

<template>
  <header :class="`topbar ${store.getThema ? 'bg-slate-100': 'bg-black'}`">
    <div class="topbar__logo">
      <RouterLink to="/">
        <img
          class="h-full w-full"
          src="../../assets/static/png/logo.png"
          alt="logotip"
        />
      </RouterLink>
      <div class="w-1 ml-1">
        <img
          class="h-[70%] w-full"
          src="../../assets/static/unoptimized/flag.png"
          alt="flag"
        />
      </div>
      <h1 class="uppercase">{{ t("title") }}</h1>
    </div>

    <div class="topbar__title">{{ t("text") }}</div>

    <div class="topbar__togglebar">
      <button 
       @click="store.setThmea"
      class="w-10 h-10 mb-2">
        <img :src="store.getThema ? moon : sun" alt="icon" />
      </button>
      <div>
        <a-select
          class="w-[70px] text-xl border-none"
          :options="options"
          v-model:value="locale"
          v-model="locale"
          @change="changeLanguage"
        />
      </div>
    </div>
  </header>
</template>

<style scoped lang="scss">
.topbar {
  @apply w-full  flex items-center justify-between px-5 py-2;

  &__logo {
    @apply flex items-center;
    img {
      @apply w-[80px] h-[80px] inline-block;
    }
    h1 {
      @apply text-2xl ml-5 w-[320px] font-bold text-grenn leading-10;
    }
  }
  &__title {
    font-size: 75px;
    @apply text-grenn   font-bold uppercase;
  }
  &__togglebar {
    @apply flex items-center w-[100px] h-[80px] justify-around flex-col rounded-lg;
  }
}
</style>
