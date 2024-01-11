<template>
<ResumeCard v-for="resume of resume" :key="resume.id" :resume="resume" />
</template>

<script>
import ResumeCard from "@/components/ResumeCard.vue"

export default {
    computed:{
      resume(){
         return this.$store.state.resume
      }
   },
   mounted(){
      this.$store.dispatch("getResume")
   },
   components: {ResumeCard}
   
  }
</script>

<style>

</style>