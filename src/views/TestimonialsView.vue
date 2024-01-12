<template>
  <div v-if="isLoading" class="loader"></div>
  <h1>Testimonials</h1>
  <p>Scroll sideways to view more</p>
  <div class="vh-100 testimonialContainer">
    <div class="testimonials">
      <TestimonialsCard
        v-for="testimonials of testimonials"
        :key="testimonials.id"
        :testimonials="testimonials"
      />
    </div>
  </div>
</template>

<script>
import TestimonialsCard from "@/components/TestimonialsCard.vue";

export default {
  computed: {
    testimonials() {
      return this.$store.state.testimonials;
    },
    isLoading() {
      return this.$store.state.loading;
    },
  },
  mounted() {
    this.$store.dispatch("getTestimonials");
  },
  components: { TestimonialsCard },
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
h1{
  font-family: "Playfair Display", serif;
}
p{
  font-family:"Playfair Display", serif;
  font-size: 18px;
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

.testimonials {
  padding-top: 60px;
  display: flex;
  max-width: 1200px;
  overflow: auto;
  width: 100%;
  padding-right: 16px;
  padding-left: 16px;
  margin-right: auto;
  margin-left: auto;
  gap: 20px;
  padding-bottom: 60px;
}

@media screen and (max-width: 480px) {
  .testimonialContainer {
    margin-top: 40%;
  }

  .testimonials {
    padding-top: 0;
    display: flex;
    max-width: 1200px;
    overflow: auto;
    width: 100%;
    padding-right: 16px;
    padding-left: 16px;
    margin-right: auto;
    margin-left: auto;
    gap: 20px;
    padding-bottom: 0;
  }
}

h1 {
  color: #5e5343;
}
</style>
