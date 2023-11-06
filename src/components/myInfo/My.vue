<template>
  <div
    class="w-full flex bg-[#ECF0F8] border-t-2 border-[#64748B] h-[60px] items-center justify-evenly flex-wrap"
  >
    <li class="text-xl list-none text-[#64748B]">Created by Jasurbek Turgunov</li>
    <a
      target="_blank"
      class="text-white text-xl hover:text-gray-900"
      href="https://www.jasdev.uz"
      ><GlobalOutlined class="icon"
    /></a>
    <a
      target="_blank"
      href="https://www.linkedin.com/in/jasurbek-turgunov-157b48235/"
    >
      <LinkedinOutlined class="icon" />
    </a>
    <a
      target="_blank"
      href="https://www.instagram.com/"
    >
      <InstagramOutlined class="icon" />
    </a>
    <a
      target="_blank"
      href="https://t.me/jasurbekitblog"
    >
      <SendOutlined class="icon" />
    </a>
  </div>
</template>

<script setup lang="ts">
import {
  LinkedinOutlined,
  InstagramOutlined,
  SendOutlined,
  GlobalOutlined,
} from "@ant-design/icons-vue";
</script>

<style scoped>
.icon {
  color: #64748B;
  font-size: 30px;
  border: none;
  @apply hover:text-gray-700 cursor-pointer transform ease-in-out duration-500;
}
</style>
