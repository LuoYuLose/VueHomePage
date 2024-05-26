<template>
    <div class="content-container flex-auto flex-col md:flex-row">
      <div class="SelfIntroduction rounded-lg bg-gradient-to-r from-blue-100 to-white p-6 shadow">
        <SelfIntroduction></SelfIntroduction>
      </div>
      <div class="PageIntroduction rounded-lg bg-gradient-to-r from-blue-100 to-white p-6 shadow">
        <PageIntroduction></PageIntroduction>
      </div>
    </div>
</template>

<script lang="ts">
  import { defineComponent, ref } from 'vue'
  import SelfIntroduction from '../components/SelfIntroduction.vue'
  import PageIntroduction from '../components/PageIntroduction.vue'
  export default {
    name: 'AboutMe',
    components: {
      SelfIntroduction,
      PageIntroduction,
    },
  }
</script>

<style scoped>
  .PageIntroduction {
    text-align: center;
    margin-top: 50px;
  }
</style>