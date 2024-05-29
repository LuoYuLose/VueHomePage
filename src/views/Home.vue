<template>
  <div class="home">
    <indexIntroduction></indexIntroduction>
  </div>
</template>

<script lang="ts">
  import { defineComponent } from 'vue'
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
    @apply bg-gray-100 p-6 rounded-lg shadow-md;
  }
</style>
