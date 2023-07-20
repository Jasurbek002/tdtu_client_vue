<script setup lang="ts">
import Row from "@/components/Ui/wrapper/Row.vue";
import List from "@/components/Ui/List/List.vue";
import { qs1, qs2 } from "@/assets/static";
</script>
<template>
  <Row label="Qs ranking">
    <List
      :image="qs1"
      title="Islom Karimov nomidagi Toshkent davlat Texnika universiteti xalqaro miqyosda e’tirof etildi"
      text="O‘zbekiston Respublikasi oliy ta’lim tizimini 2030 yilgacha rivojlantirish konsepsiyasida xalqaro e’tirof etilgan tashkilotlar (Quacquarelli Symonds World University. Times Higher Education yoki ARWU) reytingidagi birinchi 1000 ta oliy ta’lim muassasasi ro‘yxatiga kamida 10 ta oliy ta’lim muassasasini kiritish ko‘zda tutilgan. Bu borada Oliy va o‘rta maxsus ta’lim vazirligi hamda barcha oliy ta’lim muassasalari maqsadli rejalar asosida ish boshladi va «Rivojlanayotgan Yevropa va Markaziy Osiyo davlatlari oliy ta’lim muassasalarining (QS World University Rankings: Emerging Europe and Central Asia) 2022 yilgi reytingi» e’lon qilindi. Quvonarlisi, O‘zbekistonda QS mintaqaviy reytingida qayd etilgan universitetlar ketma-ket ikkinchi yil o‘z o‘rnini yanada mustahkamladi va yuqoriroq pog‘onalarga ko‘tarildi. Bu bugungi kunda «Yangi O‘zbekiston» oliy ta’lim tizimida samarali faoliyat yuritayotganidan, ta’limga bo‘lgan munosabatni oshirayotganidan dalolat beradi"
      styles="bg-grenn"
    />
    <List
      :image="qs2"
      title="Islom Karimov nomidagi Nufuzli xalqaro QS reyting tashkiloti 2023-yil uchun reyting natijalarini e’lon qildi"
      text="2023-yil uchun QS Osiyo Universitetlar reytingi (QS Asia University Rankings 2023) da ilk bor respublikamizning 8 ta oliy ta’lim muassasasi TOP 1 000 talikdagi Osiyoning eng kuchli universitetlari qatoridan joy oldi. Xalqaro reyting tuzuvchi tashkilot Quacquarelli Symondsning bu yilgi reytingi bugungi kunga qadar eng kattasi hisoblanib, o‘z ichiga 760 ta eng kuchli Osiyo universitetlarini qamrab olgan. Shuningdek, reytingni shakllantirishdagi asosiy koʻrsatkichlar sifatida akademik va ish beruvchining obroʻsi, PhD darajasiga ega boʻlgan xodimlar soni hamda xalqaro talabalar ulushi kabi me’zonlar birinchi marotaba kiritildi. Qolaversa, QS Asia University 2023 reytingida Osiyo qit’asidagi universitetlar joylashuviga qarab mintaqaviy o‘rinlari ham belgilangan bo‘lib, mamlakatimizning yuqoridagi 8 ta oliy ta’lim muassasasi QS Markaziy Osiyo Universitetlar Reytingida ham munosib o‘rinlarni egalladi."
      styles="bg-grenn"
    />
  </Row>
</template>
