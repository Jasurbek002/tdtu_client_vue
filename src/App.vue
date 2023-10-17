<script setup lang="ts">
import { RouterView } from "vue-router";
import Navbar from "./components/Navbar/navbar.vue";
import Topbar from "./components/topbar/Tapbar.vue";
import Footer from "./components/Footer/footer.vue";
import LayoutVue from "./Layout/Layout.vue";
import Container from "./components/Ui/container/container.vue";
import AOS from "aos";
import "aos/dist/aos.css";
import My from "./components/myInfo/My.vue";
import TextWidgetVue from "./components/widget/TextWidget.vue";
import Loader from "@/components/Ui/Loader/Loader.vue";
import { ref } from "vue";
const clas = ref("");
window.addEventListener("load", () => {
  clas.value = "z-[60]";
});

setTimeout(() => {
  clas.value = "z-[0]";
}, 3000);

AOS.init();
</script>

<template>
  <Loader :styles="clas" />
  <Container>
    <Topbar />
    <TextWidgetVue />
    <Navbar />
    <LayoutVue>
      <RouterView />
    </LayoutVue>
    <Footer />
    <My />
  </Container>
</template>
