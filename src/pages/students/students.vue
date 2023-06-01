<script setup lang="ts">
import { empStudents } from "@/constants/employee";
import { infoStudents } from "@/constants/info";
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
  <Row label="IQTIDORLI TALABALAR BILAN ISHLASH BO'LIMI">
    <Col>
      <Employe
        v-if="empStudents.length !== 0"
        v-for="(employe, i) of empStudents"
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
      title="Iqtidorli talabalarning ilmiy-tadqiqot faoliyatini tashkil etish boʼlimi:"
      :info="infoStudents"
    />
    <Navigation :data="navlinks[4].items" />
  </Row>
</template>
