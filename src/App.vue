<script setup lang="ts">
import { RouterLink, RouterView } from "vue-router";
import Navbar from "./components/Navbar/navbar.vue";
import Topbar from "./components/topbar/Tapbar.vue";
import Footer from "./components/Footer/footer.vue";
// import Widget from './components/widget/widget.vue'
import LayoutVue from "./Layout/Layout.vue";
import Container from "./components/Ui/container/container.vue";
import AOS from 'aos'
import 'aos/dist/aos.css'
import My from "./components/myInfo/My.vue";
import TextWidgetVue from "./components/widget/TextWidget.vue";



AOS.init()
</script>

<template>

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

