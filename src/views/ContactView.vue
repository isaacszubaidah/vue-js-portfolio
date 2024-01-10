<template>
    <navbar/>
 <div class="contact">
<p>contact page</p>
 </div>
 <Footer/>
</template>

<script>
import navbar from "@/components/Navbar.vue"
import Footer from "@/components/Footer.vue"
export default {
    name:"contact",
    components: {
        navbar,
        Footer,
    },

}
</script>

<style>

</style>