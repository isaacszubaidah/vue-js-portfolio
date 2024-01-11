<template>
  <div class="">
    <div class="row">
      <div class="col-4 card-container">
        <div class="card">
          <div class="testi-card-image">
            <img :src="testimonials.url" class="card-image" alt="..." />
          </div>
          <div class="card-body">
            <h5 class="card-title">{{ testimonials.heading }}</h5>
            <p class="card-text">{{ testimonials.text }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["testimonials"],
};
</script>

<style scoped>
.card-text {
  font-size: 14px;
}

.row {
  margin: 0 auto;
}
.card {
  width: 18rem;
  height: 25rem;
  border-radius: 10px;
  padding: 16px;
  transition: transform 0.3s ease-in-out;
}

.card-container:hover .card {
  transform: translateY(-10px);
}

.testi-card-image {
  display: flex;
  justify-content: center;
  align-items: center;
}

.card-image {
  width: 150px;
  height: 150px;
  border-radius: 100%;
}
</style>
