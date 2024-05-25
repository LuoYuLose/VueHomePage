<template>
  <div class="about">
    <self-introduction></self-introduction>
  </div>
</template>

<script lang="ts">
  import { defineComponent } from 'vue'
  import SelfIntroduction from '../components/SelfIntroduction.vue'
  export default {
    name: 'AboutMe',
    components: {
      SelfIntroduction
    }
  }
</script>

<style scoped>
  .about {
    text-align: center;
    margin-top: 50px;
  }
</style>