<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-transparent">
    <div class="container-fluid">
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarTogglerDemo01"
        aria-controls="navbarTogglerDemo01"
        aria-expanded="false"
        aria-label="Toggle navigation"
        @click="toggleNavbar"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div :class="{'collapse': !isNavbarOpen, 'navbar-collapse': true}" id="navbarTogglerDemo01">
        <router-link @click.native="closeNavbar" class="nav-link active" aria-current="page" to="/"
          ><img
            class="logo"
            src="https://i.imgur.com/uzJl7cg.png"
            alt=""
        /></router-link>
        <ul class="navbar-nav centerNav">
          <li class="nav-item">
            <router-link @click.native="closeNavbar" class="nav-link active" aria-current="page" to="/"
              >Home |</router-link
            >
          </li>
          <li class="nav-item">
            <router-link @click.native="closeNavbar" class="nav-link active" aria-current="page" to="/about"
              >About |</router-link
            >
          </li>
          <li class="nav-item">
            <router-link @click.native="closeNavbar" class="nav-link active" aria-current="page" to="/resume"
              >Education & Experience |</router-link
            >
          </li>
          <li class="nav-item">
            <router-link @click.native="closeNavbar" class="nav-link active" aria-current="page" to="/projects"
              >Projects |</router-link
            >
          </li>
          <li class="nav-item">
            <router-link @click.native="closeNavbar" class="nav-link active" aria-current="page" to="/testimonials"
              >Testimonials |</router-link
            >
          </li>
          <li class="nav-item">
            <router-link @click.native="closeNavbar" class="nav-link active" aria-current="page" to="/contact"
              >Contact</router-link
            >
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: "navbar",
  props: {
    msg: String,
  },
  data() {
    return {
      isNavbarOpen: false
    };
  },
  methods: {
    toggleNavbar() {
      this.isNavbarOpen = !this.isNavbarOpen;
    },
    closeNavbar() {
      this.isNavbarOpen = false;
    }
  }
};
</script>

<style scoped>
.centerNav {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: auto;
  margin-left: auto;
}
</style>

