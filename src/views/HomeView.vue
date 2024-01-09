<template>
  <navbar/>
  <div class="home vh-100">
  <h1>Still Loading</h1>
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
  </div>
</template>

<script>
// @ is an alias to /src
import navbar from "../components/Navbar.vue"
export default {
    name:"/",
    components: {
        navbar,
    },

}
</script>

<style scoped>
.HomePageImg{
    width: 400px;
    height: 450px;
    display: flex;
    position: relative;
    padding: 20px;
    float: start;
}
</style>