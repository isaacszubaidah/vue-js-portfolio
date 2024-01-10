<template>
<ProjectsCard v-for="project of projects" :key="project.id" :project="project" />
</template>

<script>
import ProjectsCard from "@/components/ProjectsCard.vue"

export default {
    computed:{
      projects(){
         return this.$store.state.projects
      }
   },
   mounted(){
      this.$store.dispatch("getProjects")
   },
   components: {ProjectsCard}
   
  }
</script>

<style>

</style>