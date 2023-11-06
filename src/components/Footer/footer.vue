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
    


      <ul class="Footer__info">
        <li class="flex items-center">
          <img src="./../../assets/static/png/logo.png" class="w-[60px] h-[60px]" alt="">
          <p class="text-[#1B1B1B] ml-2">Toshkent Davlat Texnika Universteti</p>
        </li>
        <li class="flex">
          <a class="text-[#1B1B1B]" href="mailto:tstu_info@tdtu.uz"
            >Email: tstu_info@tdtu.uz</a
          >
        </li>
        <li >
          <a class="text-[#1B1B1B]" href="tel:+99871 000 00 00">Tel: +99871 000 00 00</a>
        </li>
        <p class="text-xl font-medium">Ijtimoiy tarmoqlar</p>
        <div class="w-full flex items-center justify-evenly mb-4 ">
        <SendOutlined   class="icon" />
        <InstagramOutlined class="icon"  />
        <YoutubeOutlined   class="icon"  />
        <FacebookOutlined  class="icon"  />
        <LinkedinOutlined  class="icon"  />
      </div>
        
      </ul>
      
      <!-- <ul>
        <li v-for="(link,i) of navlinks" :key="i" class="text-white uppercase ">
          <RouterLink class="hover:text-slate-700" :to="link.to">{{ link.name }}</RouterLink>
        </li>
      </ul> -->

      <div class="Footer__map">
        <iframe
          class="Footer__map__item"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7750.169201656863!2d69.19970163012668!3d41.353714196145624!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae8c3da3c6e5c3%3A0x9882f2a6b7329d1d!2sTDTU!5e0!3m2!1sru!2s!4v1667632619793!5m2!1sru!2s"
          width="550"
          height="300"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  </footer>
</template>
  
<style scoped lang="scss">

.icon{
    color: #64748B;
    font-size: 30px;
    background-color: #d2d5db;
    border: none;
    padding: 5px;
    border-radius: 5px;
    @apply  cursor-pointer transform ease-in-out duration-500; 
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
  background-color: #ECF0F8;
  &__nav {
    margin: 0;
   
  }

  ul li {
    @apply my-3;
  p{
    font-size: 18px;
  }
    a{
         font-size: 18px;
        @apply text-[#1B1B1B] mt-3;
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
