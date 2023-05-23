<template>
  <div class="container">
    <div class="banner"></div>
    <slot />
  </div>
</template>

<style scoped>
.container {
  @apply max-w-[2400px] mx-auto relative;
}
.banner{
  @apply w-full min-h-[100vh] mx-auto;
  background-image: url("../../../assets/static/jpg/bunner.jpg");
  background-repeat: no-repeat;
  background-size:100% 100%;
  position:fixed;
}
</style>
