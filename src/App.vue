<script setup lang="ts">
import HelloWorld from './components/HelloWorld.vue'
// import TheWelcome from './components/TheWelcome.vue'
</script>

<template>
  <header>
    <img alt="Test Pic" class="logo" src="./assets/Hikari.jpg" width="125" height="125" />

    <div class="wrapper">
      <HelloWorld msg="欢迎来到避世酒馆" whatever="渴望平凡，也希望人生能够一路生花。"/>
    </div>
  </header>

  <nav>
    <a href="/home">主页</a>
    <a href="/about">关于我</a>
  </nav>

  <router-view></router-view>
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
