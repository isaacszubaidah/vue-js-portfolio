<template>
  <navbar />
  <div class="vh-100">
    <div class="workexperience">
      <div class="card">2022</div>
      <div class="card">2022-2023</div>
      <div class="card">2023-2024</div>
      <div class="card">Resume</div>
    </div>
    <p>workexperience page and add your resume here</p>
  </div>
</template>

<script>
import navbar from "@/components/Navbar.vue";
export default {
  name: "workexperience",
  components: {
    navbar,
  },
};
</script>

<style scoped>
.workexperience {
  display: flex;
  align-items: center;
  justify-content: center;
  overflow-x: auto;
  gap: 30px;
}
.card {
  width: 400px;
  height: 500px;
  border-radius: 20px;
  background: #D1C2BB;
  min-width: 400px;
}

</style>
