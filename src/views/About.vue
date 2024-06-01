<template>
    <div class="content-container flex-auto flex-col md:flex-row">
      <div class="card divGaps">
        <selfIntroduction></selfIntroduction>
      </div>
      <div class="card divGaps">
        <myAbilitiesAndHobbies></myAbilitiesAndHobbies>
      </div>
    </div>
</template>

<script lang="ts">
  import selfIntroduction from '../components/selfIntroduction.vue'
  import pageIntroduction from '../components/pageIntroduction.vue'
  import myAbilitiesAndHobbies from '../components/myAbilitiesAndHobbies.vue'
  export default {
    name: 'AboutMe',
    components: {
      selfIntroduction,
      pageIntroduction,
      myAbilitiesAndHobbies,
    },
  }
</script>