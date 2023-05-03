<template>
  <div class="container">
    <div class="banner"></div>
    <slot />
  </div>
</template>

<style scoped>
.container {
  @apply max-w-[2400px] mx-auto;
}
.banner{
  @apply w-full min-h-[100vh] ;
  background-image: url("../../../assets/static/jpg/banner.jpg");
  background-repeat: no-repeat;
  background-size:100% 100%;
  position:fixed;
}
</style>
