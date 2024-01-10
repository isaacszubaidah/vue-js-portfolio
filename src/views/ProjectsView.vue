<template>
   <navbar/>
   <div class="projects">
<p>Project page</p>
 </div>
 <Footer/>
</template>

<script>
import navbar from "@/components/Navbar.vue"
import Footer from "@/components/Footer.vue"
export default {
    name:"projects",
    components: {
        navbar,
        Footer,
    },

}
</script>

<style>

</style>