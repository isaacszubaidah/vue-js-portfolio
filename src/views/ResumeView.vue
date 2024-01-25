<template>
  <div class="resume">
    <div v-if="isLoading" class="loader"></div>

    <div class="work">
      <h2>Work Experience</h2>
      <ResumeCard
        v-for="workResume of workResume"
        :key="workResume.id"
        :resume="workResume"
      />
    </div>

    <div class="soft">
      <h2>Soft and Tech Skills</h2>
      <SofTechResume
        v-for="sofTechResume of sofTechResume"
        :key="sofTechResume.id"
        :resume="sofTechResume"
      />
    </div>
    <div>
      <h5>Resume Document</h5>
      <p>Feel Free to Explore</p>
      <a
        href="https://docs.google.com/document/d/1UhD23rohZnc0Chtf6SPqZtM_2dVW5PRh/edit?usp=sharing&ouid=116533081415464734347&rtpof=true&sd=true"
        ><button class="btn">Read Me</button></a
      >
    </div>
  </div>
</template>

<script>
import ResumeCard from "@/components/ResumeCard.vue";
import SofTechResume from "@/components/SoftTechResume.vue";

export default {
  computed: {
    workResume() {
      return (this.$store.state.resume || []).filter(
        (resume) => resume.type === "work"
      );
    },
    sofTechResume() {
      return (this.$store.state.resume || []).filter(
        (resume) => resume.type === "softTech"
      );
    },
    isLoading() {
      return this.$store.state.loading;
    },
  },
  mounted() {
    this.$store.dispatch("getResume");
  },
  components: { ResumeCard, SofTechResume },
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
.btn {
  background-color: #5e5343;
  color: white;
}
h5 {
  font-family: "Playfair Display", serif;
  font-weight: bold;
  font-size: 20px;
  color: #5e5343;
}
h2 {
  font-family: "Playfair Display", serif;
  color: #5e5343;
}

@keyframes rotation {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}

.work {
  padding-top: 20px;
}
.soft {
  padding-top: 20px;
}

@media screen and (max-width: 480px) {
  .resume {
    margin-bottom:90px ;
  }
}
</style>
