<template>
  <div class="home">
    <img class="HomePageImg" alt="" src="https://lh3.googleusercontent.com/drive-viewer/AEYmBYTti3Nexk4BEz1YHXD-bu2VGW8ToMZ3UYS8cpFJAh4QlXuTniWDFmcbip-aAxHTqQOs3008f6XyKtuQESMCz---IulT=s1600">
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'HomeView',
  components: {
    HelloWorld
  }
}
</script>

<style scoped>
.HomePageImg{
    width: 500px;
    height: 450px;
    display: flex;
    position: relative;
    float: start;
}
</style>