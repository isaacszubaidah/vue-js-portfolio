<template>
  <navbar/>
  <div class="about">
    <h1>This is an about page</h1>
  </div>
</template>



<script>
import navbar from "@/components/Navbar.vue"
export default {
    name:"about",
    components: {
        navbar,
    },

}

</script>
