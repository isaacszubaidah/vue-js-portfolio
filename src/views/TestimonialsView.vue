<template>
<TestimonialsCard v-for="testimonials of testimonials" :key="testimonials.id" :testimonials="testimonials" />
</template>

<script>
import TestimonialsCard from "@/components/TestimonialsCard.vue"

export default {
    computed:{
      testimonials(){
         return this.$store.state.testimonials
      }
   },
   mounted(){
      this.$store.dispatch("getTestimonials")
   },
   components: {TestimonialsCard}
   
  }
</script>

<style>

</style>