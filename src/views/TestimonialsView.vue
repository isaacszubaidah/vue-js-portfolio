<template>
  <navbar/>
  <div class="testimonials">
<h1>Testimonials</h1> 
  </div>
  <Footer/>
</template>

<script>
import navbar from "@/components/Navbar.vue"
import Footer from "@/components/Footer.vue"
export default {
    name:"testimonials",
    components: {
        navbar,
        Footer,
    },

}
</script>

<style>

</style>