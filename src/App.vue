<script setup lang="ts">
  import mainPage from './components/mainPage.vue'
  const picPaths:string[] = [
    './src/assets/HeadPic/Hikari.jpg',
    './src/assets/HeadPic/Reisa.jpg',
    './src/assets/HeadPic/Reisa2.jpg',
    './src/assets/HeadPic/Mari.jpg',
    './src/assets/HeadPic/Elaina.jpg',
    './src/assets/HeadPic/Fox.jpg',
  ]
  let randomNum = Math.floor(Math.random() * picPaths.length);
  let pic:string = picPaths[randomNum];
</script>

<template>
  <div class="">
    <img alt="RandomPics" class="logo" width="325" :src="pic">

    <header>
      <div class="wrapper">
        <mainPage msg="欢迎来到避世酒馆" whatever="渴望平凡，也希望人生能够一路生花。" style="font-size: 1.125rem" />
        <nav class='text-sky-400'>
          <router-link to="/">主页</router-link>
          <router-link to="/about">关于我</router-link>
          <router-link to="/projects">项目</router-link>
          <router-link to="/contact">联系与友链</router-link>
        </nav>
      </div>
    </header>
  </div>

  <router-view v-slot="{ Component }">
    <transition name="fade" mode="out-in">
      <component :is="Component" />
    </transition>
  </router-view>
</template>

<style scoped>
  header {
    line-height: 1.5;
  }

  .logo {
    display: block;
    margin: 0 auto 2rem;
  }

  @media (min-width: 1024px) {
    header {
      display: flex;
      place-items: center;
      padding-right: calc(var(--section-gap) / 2);
    }

    .logo {
      margin: 0 2rem 0 0;
    }

    header .wrapper {
      display: flex;
      place-items: flex-start;
      flex-wrap: wrap;
    }
  }
</style>