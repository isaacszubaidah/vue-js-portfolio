<template>
  <footer>
    <div class="footer">
      <p class="para">Zubaidah Isaacs</p>

      <p class="para">CopyRights Reserved</p>

      <p class="para2">{{ getCurrentYear() }}</p>
      <div>
        <p>
          <a target="_blank" href="https://www.linkedin.com/in/zubaidah-isaacs-1b8070281/"
            ><i class="fa-brands fa-linkedin fa-2x" style="color: #5e5343"></i
          ></a>
          <a target="_blank" href="https://github.com/"
            ><i class="fa-brands fa-github fa-2x" style="color: #5e5343"></i
          ></a>
        </p>
      </div>
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
