<template>
  <navbar/>
  <router-view/>
  <Footer/>
</template>

<script>
import navbar from "@/components/Navbar.vue";
import Footer from "@/components/Footer.vue"



export default {
  components: {
    navbar,
    Footer,
  },
};
</script>


<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav a {
  font-family: 'Quicksand', sans-serif;
  font-weight: bold;
  color: #2c3e50;
}

.logo{
  width: 90px;
  height:70px;
}
.center-nav{
  margin-left: 295px;
}
#navbarTogglerDemo01{
  margin-left: 40px;
}
footer{
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-content: center;
    position: sticky;
    margin-top: 10px;
    bottom: 0;
    background-color: #DEB887;
}

.para{
  font-family: 'Alegreya', serif;
  font-size:20px;
  font-weight: semi-bold;
  color: #5E5343;
  display: flex;
  margin-left: 20px;
}
.para2{
  font-family: 'Alegreya', serif;
  font-size:20px;
  font-weight: semi-bold;
  color: #5E5343; 
  display: flex;
  margin-right: 20px;
}
</style>
