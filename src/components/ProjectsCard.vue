<template>
  <div class="projects mt-5">
    <div class="row">
      <!-- Card 1 -->
      <div class="col-4">
        <div class="card shadow-lg p-3">
          <img src="" class="card-img-top" alt="..." />
          <div class="card-body">
            <h5 class="card-title">{{ project.heading }}</h5>
            <p class="card-text">{{ project.text }}</p>
          </div>
          <div class="card-body">
            <a href="" class="card-link">Github link</a>
            <a href="" class="card-link">Netlify link</a>
          </div>
        </div>
      </div>
      <!-- Card 2 -->
      <div class="col-4">
        <div class="card shadow-lg p-3">
          <img src="" class="card-img-top" alt="..." />
          <div class="card-body">
            <h5 class="card-title">{{ project.heading }}</h5>
            <p class="card-text">{{ project.text }}</p>
          </div>
          <div class="card-body">
            <a href="" class="card-link">Github link</a>
            <a href="" class="card-link">Netlify link</a>
          </div>
        </div>
      </div>
      <!-- Card 3 -->
      <div class="col-4">
        <div class="card shadow-lg p-3">
          <img src="" class="card-img-top" alt="..." />
          <div class="card-body">
            <h5 class="card-title">{{ project.heading }}</h5>
            <p class="card-text">{{ project.text }}</p>
          </div>
          <div class="card-body">
            <a href="" class="card-link">Github link</a>
            <a href="" class="card-link">Netlify link</a>
          </div>
        </div>
      </div>
    </div>
    <div class="row" style="margin-top: 3%;">
      <!-- Card 1 -->
      <div class="col-4">
        <div class="card shadow-lg p-3">
          <img src="" class="card-img-top" alt="..." />
          <div class="card-body">
            <h5 class="card-title">{{ project.heading }}</h5>
            <p class="card-text">{{ project.text }}</p>
          </div>
          <div class="card-body">
            <a href="" class="card-link">Github link</a>
            <a href="" class="card-link">Netlify link</a>
          </div>
        </div>
      </div>
      <!-- Card 2 -->
      <div class="col-4">
        <div class="card shadow-lg p-3">
          <img src="" class="card-img-top" alt="..." />
          <div class="card-body">
            <h5 class="card-title">{{ project.heading }}</h5>
            <p class="card-text">{{ project.text }}</p>
          </div>
          <div class="card-body">
            <a href="" class="card-link">Github link</a>
            <a href="" class="card-link">Netlify link</a>
          </div>
        </div>
      </div>
      <!-- Card 3 -->
      <div class="col-4">
        <div class="card shadow-lg p-3">
          <img src="" class="card-img-top" alt="..." />
          <div class="card-body">
            <h5 class="card-title">{{ project.heading }}</h5>
            <p class="card-text">{{ project.text }}</p>
          </div>
          <div class="card-body">
            <a href="" class="card-link">Github link</a>
            <a href="" class="card-link">Netlify link</a>
          </div>
        </div>
      </div>
    </div>
  </div>
  </template>
  
  <script>
  export default {
    props: ["project"],
  };
  </script>
  
  <style scoped>
  .projects{
    overflow-x: hidden;
  }
  
  .row {
    margin: 0 auto;
  }
  .card{
    width: 18rem;
    height: 25rem;
    border-radius:30px ;
    margin: 0 auto;
  }
  img{
    margin-left:50% ;
  }
  </style>