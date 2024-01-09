<template>
    <nav class="navbar navbar-expand-lg navbar-light bg-transparent">
  <div class="container-fluid">
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarTogglerDemo01">
    <a class="navbar-brand" href="#">
      <img class="logo" src="https://lh3.googleusercontent.com/drive-viewer/AEYmBYTtXe4LvlEcbgX8yA8-Wsnv3R-PqrE_Y4NizziZBcH8-5qjUQTdvIoo2PuF3LM5IY9UeDcRIV6iEUonR0JBQF3qdHPkUA=s2560" alt="">
    </a>
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <router-link class="nav-link active" aria-current="page" to="/">Home  |</router-link> 
        </li> 
        <li class="nav-item">
              <router-link class="nav-link active" aria-current="page" to="/about">About  |</router-link> 
        </li>
        <li class="nav-item">
              <router-link class="nav-link active" aria-current="page" to="/education">Education  |</router-link> 
        </li>
        <li class="nav-item">
              <router-link class="nav-link active" aria-current="page" to="/workexperience">Work Experience  |</router-link> 
        </li>
        <li class="nav-item">
              <router-link class="nav-link active" aria-current="page" to="/skills">Soft And Technical Skills  |
              </router-link> 
        </li>
        <li class="nav-item">
              <router-link class="nav-link active" aria-current="page" to="/projects">Projects  |</router-link> 
        </li>
        <li class="nav-item">
              <router-link class="nav-link active" aria-current="page" to="/resume">Resume  |</router-link> 
        </li>
        <li class="nav-item">
              <router-link class="nav-link active" aria-current="page" to="/contact">Contact </router-link> 
        </li>
      </ul>
    </div>
  </div>
</nav>
</template>

<script>
export default {
    name:"navbar",
    props: {
        msg: String,
    },

}
</script>

<style>

</style>