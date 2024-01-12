<template>
  <div class="vh-100">
    <div class="about">
      <div class="item-2">
        <div class="item-3">
          <h1>Who Am I ?</h1>
          <p class="paragraphAbout">
            I am the girl who likes to laugh and to make those around me smile.
            I am hardworking and competetive in the sense of I am always willing
            to accept a challenge. I enjoy baking and coding in my free time
            because it makes me happy and improve in those skills.
          </p>
        </div>
      </div>
      <div class="item-1 animate-right">
        <img
          class="AboutPageImg"
          src="https://i.imgur.com/LyNUFPt.jpg"
          alt=""
        />
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>
<style scoped>
.animate-right {
  animation: slideInRight 1s ease-in-out;
}

@keyframes slideInRight {
  0% {
    transform: translateX(100%);
  }
  100% {
    transform: translateX(0);
  }
}
.about {
  display: grid;
  grid: 700px / 1fr 1fr;
  align-items: center;
}
.AboutPageImg {
  border: 3px solid;
  border-radius: 60px;
  /* margin-right: 250px; */
  width: 300px;
  height: 400px;
}
.item-2 {
  font-family: "Playfair Display", serif;
  text-align: center;
  align-items: center;
  color: #5e5343;
  gap: 30px;
  display: flex;
  flex-direction: column;
  font-size: 20px;
}

.paragraphAbout {
  max-width: 600px;
  padding-top: 20px;
  margin: auto;
}

@media screen and (max-width: 480px) {
  .about {
    display: flex;
    flex-direction: column-reverse;
    align-items: center;
    text-align: center;
    padding-left: 16px;
    padding-right: 16px;
    gap: 50px;
  }

  .AboutPageImg {
    margin: auto;
    display: flex;
    justify-content: center;
    align-items: center;
    border: none;
    border-radius: 30px;
    width: 300px;
    height: 300px;
  }

  .item-2 {
    font-family: "Playfair Display", serif;
    text-align: center;
    align-items: center;
    color: #5e5343;
    gap: 30px;
    display: flex;
    flex-direction: column;
    font-size: 14px;
  }
}
</style>
