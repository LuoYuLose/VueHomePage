<template>
  <div class="projects card">
    <projectInformation></projectInformation>
    <ul>
      <li class="list" v-for="project in projects" :key="project.id">
        {{ project.name }} - {{ project.desc }}
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
  import projectInformation from '../components/projectInformation.vue'
  const projects = [
    { id: 1, name: 'Django所做的Web应用', desc: '目前未在Github创建对应仓库' },
    { id: 2, name: 'React重构个人主页', desc: '目前未在Github创建对应仓库' },
    { id: 3, name: 'Python数据结构的MarkDown形式讲解', desc: '目前未在Github创建对应仓库' },
    { id: 4, name: '使用TailwindCSS美化个人主页', desc: '正在进行中' },
  ]
  export default {
    name: 'projects',
    components: {
      projectInformation
    },
    data() {
      return {
        projects,
      }
    }
  }
</script>

<style scoped>
  .projects {
    text-align: center;
    margin-top: 50px;
  }

  .list {
    text-align: left;
    margin-top: 20px;
  }
</style>