<template>
  <!-- <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link> |
    <router-link to="/skills">Skills</router-link> |
  </nav> -->
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <div class="container-fluid">
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarTogglerDemo01">
      <nav class="navbar navbar-light bg-light">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">
      <img class="logo" src="https://lh3.googleusercontent.com/drive-viewer/AEYmBYRBRqyME_LggWDRyjUedrXxWsESs4t2CI_hcODY0tDjEg9SYrkMI74EJEy_AXxFmEFAD5QiOE-HTkpARzBKAHEIKC5CSQ=s2560" alt="">
    </a>
  </div>
</nav>
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <router-link class="nav-link active" aria-current="page" to="/">Home</router-link>
        </li>
        <li class="nav-item">
              <router-link class="nav-link active" aria-current="page" to="/about">About</router-link>
        </li>
        <li class="nav-item">
              <router-link class="nav-link active" aria-current="page" to="/education">Education</router-link>
        </li>
        <li class="nav-item">
              <router-link class="nav-link active" aria-current="page" to="/workexperience">Work Experience</router-link>
        </li>
        <li class="nav-item">
              <router-link class="nav-link active" aria-current="page" to="/skills">Soft And Technical Skills</router-link>
        </li>
        <li class="nav-item">
              <router-link class="nav-link active" aria-current="page" to="/projects">Projects</router-link>
        </li>
        <li class="nav-item">
              <router-link class="nav-link active" aria-current="page" to="/resume">Resume</router-link>
        </li>
        <li class="nav-item">
              <router-link class="nav-link active" aria-current="page" to="/contact">Contact</router-link>
        </li>
      </ul>
    </div>
  </div>
</nav>
  <router-view/>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
.logo{
  border-radius: 90px;
  width: 100px;
  height:90px;
}
</style>
