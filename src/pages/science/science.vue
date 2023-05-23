<script setup lang="ts">
import Employe from "@/components/Ui/employee/Employe.vue";
import Navigation from "@/components/Ui/navigation/Navigation.vue";
import Info from "@/components/Ui/info/info.vue";
import Row from "@/components/Ui/wrapper/Row.vue";
import Col from "@/components/Ui/wrapper/Col.vue";
import { navlinks } from "@/constants/navlink";
import Aos from "aos";
Aos.init();

import { empScience } from "@/constants/employee";
import { infoScience } from "@/constants/info";
</script>

<template>
  <Row
    label="ILMIY-TADQIQOT QISMI"
  >
    <Col>
      <Employe
        v-if="empScience.length !== 0"
        v-for="(employe, i) of empScience"
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
      title="Quyidagilar Ilmiy tadqiqot qismining asosiy vazifalari hisoblanadi:"
      :info="infoScience"
    />
    <Navigation :data="(navlinks[2].items)"/>
  </Row>
</template>