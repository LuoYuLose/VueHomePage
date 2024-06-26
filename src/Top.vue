<script setup lang="ts">
  let a:string = 'Test'
</script>

<template>
  <div id="root">
    <div class="p-2 text-center">
      <p>q(≧▽≦q)</p>
    </div>
    <div id="searchBar">
      Test
    </div>
  </div>
</template>

<style scoped>
  #root {
    display: flex;
    flex-direction: row;
  }

  p {
    color: red;
  }

  .Words {
    font-size: 1em;
    text-align: center;
    padding: 1em 0;
    width: 12%;
  }
</style>
