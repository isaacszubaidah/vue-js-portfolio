<template>
  <div v-if="isLoading" class="loader"></div>
  <h1>Projects</h1>
  <div class="projects">
    <ProjectsCard
      v-for="project of projects"
      :key="project.id"
      :project="project"
    />
  </div>
</template>

<script>
import ProjectsCard from "@/components/ProjectsCard.vue";

export default {
  computed: {
    projects() {
      return this.$store.state.projects;
    },
    isLoading() {
      return this.$store.state.loading;
    },
  },
  mounted() {
    this.$store.dispatch("getProjects");
  },
  components: { ProjectsCard },
};
</script>

<style scoped>
.projects {
  display: flex;
  flex-wrap: wrap;
  max-width: 1220px;
  width: 100%;
  margin-right: auto;
  margin-left: auto;
  justify-content: center;
  align-items: center;
  gap: 20px;
  padding-bottom: 60px;
}
.loader {
  width: 40px;
  height: 40px;
  border: 2px solid black;
  border-bottom-color: transparent;
  border-radius: 50%;
  display: inline-block;
  box-sizing: border-box;
  animation: rotation 1s linear infinite;
}
h1{
  font-family: "Playfair Display", serif;
}

@keyframes rotation {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}

h1 {
  color: #5e5343;
}
</style>
