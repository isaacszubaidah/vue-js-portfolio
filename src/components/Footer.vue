<template>
  <footer>
    <div class="footer">
      <p class="para">Zubaidah Isaacs</p>

      <p class="para">CopyRights Reserved</p>

      <p class="para2">{{ getCurrentYear() }}</p>
    </div>
  </footer>
</template>

<script>
export default {
  name: "Footer",
  props: {
    msg: String,
  },
  methods: {
    getCurrentYear() {
      const currentDate = new Date();
      const currentYear = currentDate.getFullYear();
      return currentYear;
    },
    // Call the function to set the current year when the page loads
  },
};
</script>

<style scoped>
.footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1220px;
  width: 100%;
  margin-right: auto;
  margin-left: auto;
}

p {
  padding-top: auto;
  padding-bottom: auto;
}
</style>
