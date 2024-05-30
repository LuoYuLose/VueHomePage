<template>
  <div class="home card">
    <indexIntroduction></indexIntroduction>
  </div>
</template>

<script lang="ts">
  import indexIntroduction from '../components/indexIntroduction.vue'
  export default {
    name: 'Home',
    components: {
      indexIntroduction
    },
  }
</script>

<style scoped>
  .home {
    text-align: center;
    margin-top: 50px;
  }
</style>
