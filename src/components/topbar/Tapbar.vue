<script setup lang="ts">
import { ref } from "vue";
const treeLine = ref(true);
</script>

<template>
  <header class="topbar">
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
      <h1 class="uppercase">Toshkent davlat Texnika universiteti</h1>
    </div>

    <div class="topbar__title">Ilmiy Faoliyat</div>

    <div class="topbar__togglebar">
      <a-switch
        v-model:checked="treeLine"
        checked-children="o'zbek"
        un-checked-children="english"
      ></a-switch>
      <a-switch
        v-model:checked="treeLine"
        checked-children="dark"
        un-checked-children="light"
      ></a-switch>
    </div>
  </header>
</template>

<style scoped lang="scss">
.topbar {
  @apply w-full bg-slate-100 flex items-center justify-between px-5 py-2;

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
    @apply flex items-center w-[100px] h-[80px] justify-around flex-col bg-cyan-100 rounded-lg;
  }
}

.flag {
}
</style>
