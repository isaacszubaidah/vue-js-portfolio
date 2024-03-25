<template>
  <div class="work-card">
    <div class="header">
      <p class="heading-text">{{ resume.heading }}</p>
      <p class="year">{{ resume.year }}</p>
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
.header {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: #5e5343;
  font-family: 'Quicksand', sans-serif;
  gap: 5px;
  font-weight: bold;
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
.text{
  font-family: 'Quicksand', sans-serif;
  font-size: 18px;
  color: #5b4c36;
  font-weight: 500;
}

</style>
