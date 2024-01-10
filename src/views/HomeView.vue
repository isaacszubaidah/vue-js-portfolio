<template>
<div class="vh-100">
  <navbar/>
  <div class="home">
    <div class="item-1">
      <img class="HomePageImg" src="https://lh3.googleusercontent.com/drive-viewer/AEYmBYTIqMZ_6HYmreaUb7IjF02dbzkvD7Zx52hj6wd1rD4NiYylCbcjcLrxkV_9NfyY49mzkpeBPNcKH_WGze-_x75__iF8=s1600" alt="">
    </div>
    <div class="item-2">
      <p>Zubaidah</p>
      <p>Isaacs</p>
      <div class="item-3">
         <p>Aspiring Developer</p>
        </div>
        <router-link class="nav-link active" aria-current="page" to="/contact"><button class="btn">Find Me</button></router-link>
    </div>
   
  </div>
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
    border: 2px solid;
    border-radius: 30px;
    width: 300px;
    height:470px;
}

.home {
display: grid;
grid: 700px / 1fr 1fr;
}

.item-1 img{
  margin-left: 200px;
  margin-top: 4%;
  align-self: center;
}
.item-2{
  font-size:75px;
  font-family: 'Playfair Display', serif;
  margin-top: 5%;
  text-align: center;
  align-items: center;
  justify-content: center;
  margin-right: 250px;
  color: #5E5343;
}
.item-3{
  font-size:35px;
  font-family: 'Playfair Display', serif;
  text-align: center;
  align-items: center;
  justify-content: center;
  margin-right: 15px;
  color: #5E5343;
}
.btn{
  font-size: 19px;
  background-color: #5E5343;
  color: white;
}

</style>