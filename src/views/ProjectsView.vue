<template>
<div v-for="project of projects" :key="project.id">
{{ project.id }}
</div>
</template>

<script>

export default {
    computed:{
      projects(){
         console.log(this.$store.state.projects,"this.$store.state.projects")
         return this.$store.state.projects
      }
   },
   mounted(){
      this.$store.dispatch("getProjects")
   },
   // components: {CardComp}
   
  }
</script>

<style>

</style>