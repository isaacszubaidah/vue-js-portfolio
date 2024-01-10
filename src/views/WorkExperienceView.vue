<template>
  <div>
    <div class="workexperience">
      <div class="card">2022</div>
      <div class="card">2022-2023</div>
      <div class="card">2023-2024</div>
      <div class="card">Resume</div>
    </div>
  </div>
</template>

<script>
export default {

};
</script>

<style scoped>
.workexperience {
  font-size: 20px;
 font-weight: bold;
  color: white;
  font-family: 'Playfair Display', serif;
  margin: 0 auto;
  margin-top: 3%;
  display: flex;
  justify-content: stretch;
  overflow-x: auto;
  width:90%;
  gap: 30px;
}
.card {
  width: 370px;
  height: 500px;
  border-radius: 20px;
  background: #D1C2BB;
  min-width: 400px;
}

.workexperience {
 -ms-overflow-style: none;  /* IE and Edge */
 scrollbar-width: none;  /* Firefox */
}


</style>
