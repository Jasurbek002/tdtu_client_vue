<script setup lang="ts">
import { empShopping } from "@/constants/employee";
import { infoShopping } from "@/constants/info";
import Employe from "@/components/Ui/employee/Employe.vue";
import Info from "@/components/Ui/info/info.vue";
import Row from "@/components/Ui/wrapper/Row.vue";
import Col from "@/components/Ui/wrapper/Col.vue";
import Aos from "aos";
import Navigation from "@/components/Ui/navigation/Navigation.vue";
import { navlinks } from "@/constants/navlink";
Aos.init();

</script>

<template>
  <Row
    label="ILMIY-INAVATSION ISHLANMALARNI TIJORATLASHTIRISH BO'LIMI"
  >
  <Navigation :data="navlinks[5].items" />
    <Col>
      <Employe
        v-if="empShopping.length !== 0"
        v-for="(employe, i) of empShopping"
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
      title="Toshkent davlat texnika universteti Ilmiy-inavatsion ishlanmalarni tijoratlashtirish bo'limi quyidagi vazifalarni bajaradi:"
      :info="infoShopping"
    />

  </Row>
</template>