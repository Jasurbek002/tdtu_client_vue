<script setup lang="ts">
import {
  InstagramOutlined,
  LinkedinOutlined,
  YoutubeOutlined,
  FacebookOutlined,
  SendOutlined
} from "@ant-design/icons-vue";

import { navlinks } from "@/constants/navlink";
</script>

<template>
  <footer
    data-aos="flip-down"
    data-aos-delay="100"
    class="w-full flex items-start justify-evenly"
  >
    <div class="Footer">
      <div class="w-full flex items-center justify-evenly mb-4 ">
        <SendOutlined   class="icon" />
        <InstagramOutlined class="icon"  />
        <YoutubeOutlined   class="icon"  />
        <FacebookOutlined  class="icon"  />
        <LinkedinOutlined  class="icon"  />
      </div>


      <ul class="Footer__info">
        <li class="text-white">
          <p class="text-xl">Manzil: Toshkent shaxar universitet ko'chasi 2-uy</p>
        </li>
        <li class="text-white">
          <a class="text-white" href="mailto:tstu_info@tdtu.uz"
            >Email: tstu_info@tdtu.uz</a
          >
        </li>
        <li class="text-white">
          <a href="tel:+99871 000 00 00">Tel: +99871 000 00 00</a>
        </li>
        <li class="text-white">
          <RouterLink to="/">TDTU fakultetlari</RouterLink>
        </li>
        <li class="text-white">
          <RouterLink to="/">Ilmiy bo'lim haqida</RouterLink>
        </li>
        <li class="text-white">
          <RouterLink to="/">Texnopark</RouterLink>
        </li>
      </ul>

      <ul>
        <li v-for="(link,i) of navlinks" :key="i" class="text-white uppercase ">
          <RouterLink class="hover:text-slate-700" :to="link.to">{{ link.name }}</RouterLink>
        </li>
      </ul>

      <div class="Footer__map">
        <iframe
          class="Footer__map__item"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7750.169201656863!2d69.19970163012668!3d41.353714196145624!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae8c3da3c6e5c3%3A0x9882f2a6b7329d1d!2sTDTU!5e0!3m2!1sru!2s!4v1667632619793!5m2!1sru!2s"
          width="350"
          height="250"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  </footer>
</template>

<style scoped lang="scss">

.icon{
    color: white;
    font-size: 40px;
    border: none;
    @apply  hover:scale-150 cursor-pointer transform ease-in-out duration-500; 
}
.Footer {
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  bottom: 0;
  align-items: center;
  justify-content: space-evenly;
  padding: 20px 0;
  margin-bottom: 0px;
  background-color: #1b6b50;
  &__nav {
    margin: 0;
   
  }

  ul li {

    a{
         font-size: 16px;
        @apply text-white mt-3;
    }
  }

  &__map {
    display: flex;
    &__item {
      border-radius: 10px;
    }
  }
  &__info {
    width: 250px;
  }
}

@media only screen and (max-width: 1200px) {
  .Footer {
    justify-content: space-around;
    &__nav {
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: space-evenly;
    }
  }
}

@media only screen and (max-width: 1200px) {
}
</style>
