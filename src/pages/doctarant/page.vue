<script setup lang="ts">
import { empDoctarant } from "@/constants/employee";
import { infoDoctarant } from "@/constants/info";
import { navlinks } from "@/constants/navlink";
import Employe from "@/components/Ui/employee/Employe.vue";
import Info from "@/components/Ui/info/info.vue";
import Row from "@/components/Ui/wrapper/Row.vue";
import Col from "@/components/Ui/wrapper/Col.vue";
import Navigation from "@/components/Ui/navigation/Navigation.vue";
import Aos from "aos";
import { storage } from "@/utils/firebase";
import {ref } from "firebase/storage";
const spaceRef = ref(storage, 'banners');
console.log(spaceRef);

Aos.init();
</script>

<template>
  <Row
    label="ILMIY–TADQIQOTLAR INNOVATSIYALAR VA PEDAGOGIK KADRLARNI TAYYORLASH BO’LIMI"
  >
    <Col>
      <Employe
        v-if="empDoctarant.length !== 0"
        v-for="(employe, i) of empDoctarant"
        :image="employe?.image"
        :fullname="employe?.fullname"
        :postsia="employe?.postsia"
        :exprence="employe?.exprence"
        :phone="employe?.phone"
        :email="employe?.email"
        :key="i"
      />
    </Col>
    <Info
      data-aos="fade-left"
      data-aos-anchor="#example-anchor"
      data-aos-offset="500"
      data-aos-duration="500"
      title="Ilmiy–tadqiqotlar innovatsiyalar va pedagogik kadrlarni tayyorlash bo’limi quydagi vazifalarni bajaradi:"
      :info="infoDoctarant"
    />
    <Navigation :data="navlinks[1].items" />
  </Row>
</template>
