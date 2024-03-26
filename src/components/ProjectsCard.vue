<template>
  <div>
    <div class="row">
      <div class="col-4 card-container">
        <div class="card">
          <img :src="project.url" class="card-img-top" alt="..." />
          <div class="card-body">
            <h5 class="card-title">{{ project.heading }}</h5>
            <p class="card-text">{{ project.text }}</p>
          </div>
          <div class="card-body">
            <a target="_blank" :href="project.githubLink" class="card-link">Github</a>
            <a target="_blank" :href="project.siteLink" class="card-link">Netlify</a>
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
.projects {
  overflow-x: hidden;
}
.card-title {
  font-weight: bold;
  font-family: "Playfair Display", serif;
  color: #5e5343;
}
.card-text {
  font-size: 14px;
  padding-top: 5px;
  height: 100px;
}

.row {
  margin: 0 auto;
}
.card {
  width: 18rem;
  height: 25rem;
  box-shadow: 10px 10px 5px grey;
  border-radius: 10px;
  padding: 16px;
  transition: transform 0.3s ease-in-out;
}

.card-container:hover .card {
  transform: translateY(-10px);
}

.card-link {
  text-decoration: none;
  color: black;
}

.card-link:hover {
  text-decoration: underline;
  color: #5e5343;
}
.card-body a{
  color: #5e5343;
}
</style>
