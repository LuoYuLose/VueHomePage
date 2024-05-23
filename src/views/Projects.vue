<template>
  <div class="projects">
    <h1>My Projects</h1>
    <ul>
      <li v-for="project in projects" :key="project.id">
        {{ project.name }} - {{ project.description }}
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
  import { defineComponent } from 'vue'
  export default {
    name: 'Projects',
    data() {
      return {
        projects: [
          { id: 1, name: 'Project One', description: 'Description of project one' },
          { id: 2, name: 'Project Two', description: 'Description of project two' },
        ]
      }
    }
  }
</script>

<style scoped>
  .projects {
    text-align: center;
    margin-top: 50px;
  }
</style>