<template>
  <div class="vh-100">
    <div class="about">
      <h1>Who Am I ?</h1>
      <div class="item-2">
        <div class="item-3">
          <p class="paragraphAbout animate-right">
            <i class="fa fa-quote-right" aria-hidden="true"></i>
            Hey there! I'm Zubaidah Isaacs, a web developer passionate about
            crafting clean, user-friendly applications. I thrive on turning
            ideas into reality through coding and I'm known for my diligence and
            helpfulness. My fascination with technology's potential led me to
            dive into web development, where I enjoy tackling challenges and
            refining my skills. When I'm not coding, you'll find me spreading
            joy through baking and embracing friendly competition.<i
              class="fa fa-quote-right"
              aria-hidden="true"
            ></i>
          </p>
        </div>
      </div>
      <div class="item-1 animate-right">
        <p class="text"><span class="text2">DOB: </span>17/04/2003</p>
        <p class="text">
          <span class="text2">Languages: </span>English,Afrikaans
        </p>
        <p class="text">
          <span class="text2">Subjects: </span>English,Afrikaans FAL,Mathematics Literacy
                                              Business Studies,Consumer Studies,Life Orientation,Life Science.
        </p>
        <div class="btn-container">
          <router-link to="/contact"
            ><button class="btn">Hire Me</button></router-link
          >

          <a
            href="https://docs.google.com/document/d/1UhD23rohZnc0Chtf6SPqZtM_2dVW5PRh/edit?usp=sharing&ouid=116533081415464734347&rtpof=true&sd=true"
            ><button class="btn">View CV</button></a
          >
        </div>
        <!-- <img
          class="AboutPageImg"
          src="https://i.imgur.com/LyNUFPt.jpg"
          alt=""
        /> -->
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
  margin: 0 auto;
  width: 1000px;
  display: grid;
  grid: 100px 300px/ 600px 300px;
  gap: 0 150px;
  align-items: center;
  margin-top: 3%;
}
h1 {
  grid-area: 1 / 1 / 2 / 3;
  text-align: center;
  color: #5e5343;
  font-family: "Playfair Display", serif;
}
.AboutPageImg {
  border: 3px solid;
  border-radius: 60px;
  margin-right: 250px;
  width: 300px;
  height: 400px;
}
.item-2 {
  grid-area: 2/1/3/2;
  font-family: "Playfair Display", serif;
  text-align: center;
  align-items: center;
  color: #5e5343;
  gap: 30px;
  display: flex;
  flex-direction: column;
  font-size: 20px;
}
.item-1 {
  grid-area: 2/2/3/3;
}
.btn {
  background-color: #5e5343;
  color: white;
  border-radius: 100px;
}

.btn-container {
  margin: 0 auto;
  width: 250px;
  display: flex;
  justify-content: space-between;
  margin-top: 5%;
}

.paragraphAbout {
  max-width: 600px;
  margin: auto;
  font-family: "Quicksand", sans-serif;
  font-size: 22px;
  font-weight: 300;
}
.text {
  font-family: "Quicksand", sans-serif;
  font-size: 20px;
}
.text2 {
  font-family: "Playfair Display", serif;
  color: #5e5343;
  font-size: 20px;
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
