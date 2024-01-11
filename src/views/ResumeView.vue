<template>
  <div>
    <div v-if="isLoading" class="loader"></div>
    <ResumeCard v-for="resume of resume" :key="resume.id" :resume="resume" />
  </div>
</template>

<script>
import ResumeCard from "@/components/ResumeCard.vue";

export default {
  computed: {
    resume() {
      return this.$store.state.resume;
    },
    isLoading() {
      return this.$store.state.loading;
    },
  },
  mounted() {
    this.$store.dispatch("getResume");
  },
  components: { ResumeCard },
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
