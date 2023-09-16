<script setup lang="ts">
import { empReyting } from "@/constants/employee";
import { infoReyting } from "@/constants/info";
import Employe from "@/components/Ui/employee/Employe.vue";
import Info from "@/components/Ui/info/info.vue";
import Row from "@/components/Ui/wrapper/Row.vue";
import Col from "@/components/Ui/wrapper/Col.vue";
import Aos from "aos";
import Navigation from "@/components/Ui/navigation/Navigation.vue";
import { navlinks } from "@/constants/navlink";
import { useI18n } from "vue-i18n";
const { t } = useI18n();
Aos.init();
</script>

<template>
  <Row :label="t('rayting.name')">
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
      :title="t('rayting.title')"
      :info="infoReyting"
    />
    <Navigation :data="navlinks[3].items" />
  </Row>
</template>
