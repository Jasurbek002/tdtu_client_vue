<script setup lang="ts">
import Employe from "@/components/Ui/employee/Employe.vue";
import Info from "@/components/Ui/info/info.vue";
import Row from "@/components/Ui/wrapper/Row.vue";
import Col from "@/components/Ui/wrapper/Col.vue";
import Aos from "aos";
Aos.init();

import { empReyting } from "@/constants/employee";
import { infoReyting } from "@/constants/info";
</script>

<template>
  <Row
    label="XALQARO REYTING BO'LIMI"
  >
    <Col>
      <Employe
        v-if="empReyting.length !== 0"
        v-for="(employe, i) of empReyting"
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
      :info="infoReyting"
    />
  </Row>
</template>