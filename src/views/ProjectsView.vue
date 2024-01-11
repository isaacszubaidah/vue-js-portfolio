<template>
  <div class="projects mt-5 vh-100">
    <div v-if="isLoading" class="loader"></div>
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

@keyframes rotation {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>
