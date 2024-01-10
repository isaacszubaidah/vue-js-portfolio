<template>
    <footer>
<div>
    <p class="para">Zubaidah Isaacs
      </p>
</div>
<div>
    <p class="para">CopyRights Reserved 
      </p>
</div>
<div>
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
    methods:{
    getCurrentYear() {
        const currentDate = new Date();
        const currentYear = currentDate.getFullYear()
  return currentYear

}
// Call the function to set the current year when the page loads
}}
</script>

<style scoped>

</style>