<script setup lang="ts">
  defineProps<{
    msg: string
    whatever: string
  }>()
</script>

<template>
  <div class="greetings">
    <h1 class="mainColor text-blue-900">{{ msg }}</h1>
    <p class="text-yellow-400">{{ whatever }}</p>
  </div>
</template>

<style scoped>
  h1 {
    font-weight: 500;
    font-size: 2.6rem;
    position: relative;
    top: -10px;
  }

  p {
    font-size: 1.2rem;
  }

  .greetings h1,
  .greetings p {
    text-align: center;
  }

  @media (min-width: 1024px) {
    .greetings h1,
    .greetings h3 {
      text-align: left;
    }
  }
</style>