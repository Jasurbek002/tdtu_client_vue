<script setup lang="ts">
import { RouterLink, RouterView } from "vue-router";
import Navbar from "./components/Navbar/navbar.vue";
import Topbar from "./components/topbar/Tapbar.vue";
import Footer from "./components/Footer/footer.vue";
import Widget from './components/widget/widget.vue'
import LayoutVue from "./Layout/Layout.vue";
import Container from "./components/Ui/container/container.vue";
import AOS from 'aos'
import 'aos/dist/aos.css'
AOS.init()
</script>

<template>
  <Container>
   
    <Topbar />
    <Widget />
    <Navbar />

  <LayoutVue>
    <RouterView />
  </LayoutVue>
  
  <Footer />
  </Container>
</template>

<style scoped></style>
