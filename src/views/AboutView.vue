<template>
  <navbar />
  <div class="vh-100">
    <div class="about">
      <div class="item-2">
        <h1>Who Am I ?</h1>
        <div class="item-3">
          <p>I am the girl who likes to laugh and to make those around me smile. I am hardworking and competetive in the sense of I am always willing to accept a challenge. I enjoy baking and coding in my free time because it makes me happy and improve in those skills.</p>
        </div>
      </div>
      <div class="item-1">
        <img
          class="AboutPageImg"
          src="https://lh3.googleusercontent.com/drive-viewer/AEYmBYQUWZdfqDxl0q7ahpJNtPtfWnEzCoi3J-QtOZyO-Sj2BTzvnfLtqJl0evlUx_MTk3D7fJUQNohWh2uzyrc0k8OiGk_m=s1600"
          alt=""
        />
      </div>
    </div>
  </div>
</template>

<script>
import navbar from "@/components/Navbar.vue";
export default {
  name: "about",
  components: {
    navbar,
  },
};
</script>
<style scoped>
.about {
  margin-top: 5%;
  display: grid;
  grid: 700px / 1fr 1fr;
}
.AboutPageImg {
  margin-top: 6%;
  border-radius: 60px;
  margin-right: 250px;
  width: 320px;
  height: 350px;
}
.item-2{
  font-family: 'Playfair Display', serif;
  margin-top: 4%;
  text-align: center;
  align-items: center;
  justify-content: center;
  color: #5E5343;
}
.item-3{
  font-size:27px;
  font-family: 'Playfair Display', serif;
  margin-top: 8%;
  text-align: center;
  align-items: center;
  justify-content: center;
  margin-left: 170px;
  color: #5E5343;
}
</style>
