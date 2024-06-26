<script setup lang="ts">
  import mainPage from '@/components/mainPage.vue'
  import Hikari from '@/assets/HeadPic/Hikari.jpg'
  import Reisa from '@/assets/HeadPic/Reisa.jpg'
  import Reisa2 from '@/assets/HeadPic/Reisa2.jpg'
  import Mari from '@/assets/HeadPic/Mari.jpg'
  import Elaina from '@/assets/HeadPic/Elaina.jpg'
  import Fox from '@/assets/HeadPic/Fox.jpg'
  const picPaths:string[] = [
    Hikari,
    Reisa,
    Reisa2,
    Mari,
    Elaina,
    Fox,
  ]
  let randomNum = Math.floor(Math.random() * picPaths.length);
  let pic:string = picPaths[randomNum];
</script>

<template>
  <div class="">
    <header>
      <img alt="RandomPics" class="logo" width="325" :src="pic">
      <div>
        <div class="wrapper">
          <mainPage msg="欢迎来到避世酒馆" whatever="渴望平凡，也希望人生能够一路生花。" style="font-size: 1.125rem" />
          <div class="text-sky-100 mt-4">
            <p class="px-1">
              按我切换右侧文字喵φ(*￣0￣)
            </p>
            <nav class='mt-2'>
              <router-link to="/">主页</router-link>
              <router-link to="/about">关于我</router-link>
              <router-link to="/projects">项目</router-link>
              <router-link to="/contact">联系与友链</router-link>
            </nav>
          </div>
        </div>
        <div class="text-lg text-sky-400">
          <p class="common-p">外部链接喵</p>
          <ul class="mt-1 social">
            <li>
              <a href="https://blogs.luoyu.ink">
                <i class="fa-solid fa-blog"></i>
              </a>
            </li>
            <li>
              <a href="https://x.com/RavenMicroCtrl">
                <i class="fa-brands fa-twitter"></i>
              </a>
            </li>
            <li>
              <a href="https://zhihu.com/people/LuoYuMeye">
                <i class="fab fa-zhihu" aria-hidden="true"></i>
              </a>
            </li>
            <li>
              <a href="https://github.com/LuoYuLose">
                <i class="fab fa-github" aria-hidden="true"></i>
              </a>
            </li>
          </ul>
        </div>
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
    width: 780px;
    height: 800px;
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

    header .social {
      padding-left: 0;
    }

    header .social li {
      list-style: none;
      float: left;
      margin-right: 8px;
    }
  }
</style>