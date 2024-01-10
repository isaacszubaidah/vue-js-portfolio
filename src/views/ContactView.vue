<template>
    <navbar/>
 <div class="contact vh-100">
<div>
    <h1 class="header">Work With Me</h1>
    <p class="sub">Got a question or proposal, or just want
        to say hello?</p>
</div>
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

<style scoped>
.header{
    font-size:40px;
    font-family:'Playfair Display', serif;
    color: #5E5343;
}
.sub{
    font-size:18px;
    font-family:'Playfair Display', serif;
    color: #5E5343;
}

</style>