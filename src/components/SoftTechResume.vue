<template>
  <div class="soft-card">
    <div class="header">
      <p class="heading-text">{{ resume.heading }}</p>
    </div>
    <div>
      <p>{{ resume.text }}</p>
    </div>
  </div>
</template>

<script>
export default {
  props: ["resume"],
};
</script>

<style scoped>
.header h2 {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 5px;
}

.heading-text {
  color: #5e5343;
  font-size: 20px;
}

.soft-card {
  padding-top: 10px;
}
</style>
