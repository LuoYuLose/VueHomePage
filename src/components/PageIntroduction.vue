<template>
  <h1 class="header text-2xl font-bold">
    网站介绍
  </h1>
  <p class="para text-base font-semibold">
    本网站基于Vue3与TailwindCSS构建，部署于雨云港区服务器。
    <br />
    网站源码部署于
    <a href="https://github.com/LuoYuLose/VueHomePage">Github</a>，
    欢迎访问与学习。
  </p>
</template>

<script lang="ts">
  export default {
    name: 'PageIntroduction',
  }
</script>

<style scoped>
  .header {
    text-align: left;
  }
  .para {
        text-align: left;
  }
</style>