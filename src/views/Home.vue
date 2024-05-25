<template>
  <div class="home">
    <IndexIntroduction></IndexIntroduction>
  </div>
</template>

<script lang="ts">
  import { defineComponent } from 'vue'
  import IndexIntroduction from '../components/IndexIntroduction.vue'
  export default {
    name: 'Home',
    components: {
      IndexIntroduction
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
