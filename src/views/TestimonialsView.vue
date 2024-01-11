<template>
  <div>
    <div v-if="isLoading" class="loader"></div>
    <TestimonialsCard
      v-for="testimonials of testimonials"
      :key="testimonials.id"
      :testimonials="testimonials"
    />
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

@keyframes rotation {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>
