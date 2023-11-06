<script setup lang="ts">
import { ref, watch } from "vue";
import { navlinks } from "@/constants/navlink";
import type { SelectProps } from "ant-design-vue";
import { useI18n } from "vue-i18n";
import { MenuOutlined, GlobalOutlined } from "@ant-design/icons-vue";
import { sun, moon } from "@/assets/static/index";
import { useThemaStore } from "@/stores/thema";
const { t, locale } = useI18n();

const store = useThemaStore();
const options = ref<SelectProps["options"]>([
  { value: "uz", label: "uz" },
  { value: "en", label: "en" },
]);
const visible = ref(false);
const changeLanguage = (lang: string) => {
  locale.value = lang;
};
</script>

<template>
  <header :class="`topbar ${store.getThema ? 'bg-[#FFF]' : 'bg-black/75'}`">
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
      <h1>{{ t("title") }}</h1>
    </div>

    <div
      class="topbar__title text-grenn font-bold uppercase md:hidden lg:flex sm:hidden ssm:hidden"
    >
      {{ t("text") }}
    </div>

    <div class="topbar__togglebar">
      <div
        @click="store.setThmea"
        class="w-8 h-8 lg:mb-2 md:mb-0 rounded-full flex items-center justify-center"
      >
        <img
          class="w-full h-full rounded-full"
          :src="store.getThema ? moon : sun"
          alt="icon"
        />
      </div>
      <div class="relative">
        <GlobalOutlined
          :style="`color: ${store.getThema ? 'black' : 'white'};`"
          class="text-xl"
        />
        <div class="absolute top-0">
          <a-select
            class="w-[40px] text-xl border-none opacity-0"
            :options="options"
            v-model:value="locale"
            v-model="locale"
            @change="changeLanguage"
          />
        </div>
      </div>
    </div>
    <div
      @click="visible = true"
      class="lg:hidden md:flex sm:flex ssm:flex ml-5"
    >
      <MenuOutlined
        :style="`color: ${store.getThema ? 'black' : 'white'};`"
        :class="`text-xl cursor-pointer`"
      />
    </div>
    <a-modal v-model:visible="visible" title="Bo'limlar">
      <nav class="w-full flex flex-col items-center">
        <p
          class="text-xl font-medium"
          v-for="(link, i) of navlinks"
          @click="visible = false"
          :key="i"
        >
          <RouterLink class="text-slate-600" :to="link.to">
            {{ link.name }}
          </RouterLink>
        </p>
      </nav>
    </a-modal>
  </header>
</template>

<style scoped lang="scss">
.topbar {
  @apply w-full  flex items-center justify-between px-5 py-2;

  &__logo {
    @apply flex items-center;
    img {
      @apply lg:w-[80px] lg:h-[80px] md:w-[80px] md:h-[80px] sm:w-[60px] sm:h-[60px] ssm:w-[60px] inline-block;
    }
    h1 {
      @apply text-2xl ml-5 w-[320px] font-bold text-grenn leading-10 uppercase mobile:hidden lg:flex md:flex sm:hidden ssm:hidden;
    }
  }
  &__title {
    font-size: 75px;
    // @apply text-grenn font-bold uppercase md:hidden lg:flex sm:hidden ssm:hidden;
  }
  &__togglebar {
    @apply flex items-center w-[100px] h-[80px] justify-around  rounded-lg md:ml-auto sm:ml-auto ssm:ml-auto lg:ml-0 sm:flex-row md:flex-row ssm:flex-row lg:flex-col;
  }
}
</style>
