<template>
  <div class="content-container flex-auto flex-col md:flex-row">
    <div class="card divGaps">
      <indexIntroduction></indexIntroduction>
    </div>
    <div class="card divGaps">
      <pageIntroduction></pageIntroduction>
    </div>
  </div>
</template>

<script lang="ts">
  import indexIntroduction from '../components/indexIntroduction.vue'
  import PageIntroduction from "@/components/pageIntroduction.vue";
  export default {
    name: 'Home',
    components: {
      PageIntroduction,
      indexIntroduction,
    },
  }
</script>