<template>
  <div class="work-card">
    <div class="header">
      <p class="heading-text">{{ resume.heading }}</p>
      <p>{{ resume.year }}</p>
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
.header {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 5px;
}

.heading-text {
  font-family:"Playfair Display", serif;
  font-weight: bold;
  color: #5e5343;
  font-size: 20px;
}
.work-card{
  display: flex;
  flex-wrap: wrap;
  max-width: 1220px;
  width: 50%;
  margin-right: auto;
  margin-left: auto;
  justify-content: center;
  align-items: center;
}
</style>
