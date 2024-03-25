<template>
  <div class="soft-card">
    <div class="header">
      <p class="heading-text">{{ resume.heading }}</p>
    </div>
    <div>
      <p class="text">{{ resume.text }}</p>
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
  font-family:"Playfair Display", serif;
  font-weight: bold;
  color: #5e5343;
  font-size: 20px;
}
.text{
  font-family: 'Quicksand', sans-serif;
  font-size: 18px;
  color: #5e5343;
  font-weight: 300;
}
.soft-card {
  padding-top: 10px;
}
</style>
