<script setup lang="ts">
import Row from "@/components/Ui/wrapper/Row.vue";
import List from "@/components/Ui/List/List.vue";
import { national1, national2, national3 } from "@/assets/static";
</script>
<template>
  <Row label="Milliy reyting">
    <List
      :image="national1"
      title="Toshkent davlat texnika universiteti 2021 yil Milliy reyting 6-o'rinni egalladi"
      text="O‘zbekiston Respublikasi oliy ta’lim tizimini 2030 yilgacha rivojlantirish konsepsiyasida xalqaro e’tirof etilgan tashkilotlar (Quacquarelli Symonds World University. Times Higher Education yoki ARWU) reytingidagi birinchi 1000 ta oliy ta’lim muassasasi ro‘yxatiga kamida 10 ta oliy ta’lim muassasasini kiritish ko‘zda tutilgan. Bu borada Oliy va o‘rta maxsus ta’lim vazirligi hamda barcha oliy ta’lim muassasalari maqsadli rejalar asosida ish boshladi va «Rivojlanayotgan Yevropa va Markaziy Osiyo davlatlari oliy ta’lim muassasalarining (QS World University Rankings: Emerging Europe and Central Asia) 2022 yilgi reytingi» e’lon qilindi. Quvonarlisi, O‘zbekistonda QS mintaqaviy reytingida qayd etilgan universitetlar ketma-ket ikkinchi yil o‘z o‘rnini yanada mustahkamladi va yuqoriroq pog‘onalarga ko‘tarildi. Bu bugungi kunda «Yangi O‘zbekiston» oliy ta’lim tizimida samarali faoliyat yuritayotganidan, ta’limga bo‘lgan munosabatni oshirayotganidan dalolat beradi"
      styles="bg-grenn"
    />
    <List
      :image="national2"
      title="Technique va qishloq khzhaligi sohasi bwyicha OTMlar reytingida Toshkent davlat universiteti texnikasi 3-o'rin."
      text="Scopus ilmiy-technician bazalarigi makolalar sony b'yicha Toshkent davlat texnika universiteti 3-o'rin va iqtibosliklar b'yicha 🥈2-o'rinda."
      styles="bg-grenn"
    />
    <List
      :image="national3"
      text="Doctoral dissertation blue himoy qililish homda ilmiy unvonlar olish kursatgichi bo'yicha Toshkent davlat universiteti texnikasi 2-o'rin."
      styles="bg-grenn"
    />
  </Row>
</template>
