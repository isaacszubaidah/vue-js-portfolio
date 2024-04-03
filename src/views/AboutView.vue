<template>
  <div class="">
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
          <span class="text2">Subjects: </span>English,Afrikaans FAL,Mathematics
          Literacy Business Studies,Consumer Studies,Life Orientation,Life
          Science.
        </p>
        <div class="btn-container">
          <router-link to="/contact"
            ><button class="btn">Hire Me</button></router-link
          >

          <a
            target="_blank"
            href="https://docs.google.com/document/d/1UhD23rohZnc0Chtf6SPqZtM_2dVW5PRh/edit?usp=sharing&ouid=116533081415464734347&rtpof=true&sd=true"
            ><button class="btn">View CV</button></a
          >
        </div>
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
  max-width: 100%;
  padding: 0 20px;
  display: grid;
  grid-template-rows: auto auto;
  align-items: center;
  gap: 50px;
  margin-top: 3%;
  padding-bottom: 100px;
}

h1 {
  text-align: center;
  color: #5e5343;
  font-family: "Playfair Display", serif;
}

.item-1,
.item-2 {
  text-align: center;
}

.item-1 {
  grid-row: 2;
}

.item-2 {
  font-family: "Playfair Display", serif;
  color: #5e5343;
  font-size: 20px;
}

.btn {
  background-color: #5e5343;
  color: white;
  border-radius: 100px;
}

.btn-container {
  margin: 0 auto;
  width: 100%;
  max-width: 250px;
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
    grid-template-rows: auto auto auto;
    gap: 30px;
  }
  .item-1,
  .item-2 {
    grid-row: auto;
  }

  .btn-container {
    width: 100%;
  }

  .AboutPageImg {
    max-width: 300px;
    height: auto;
    margin: auto;
  }

  .item-2 {
    font-size: 14px;
  }
}
</style>
