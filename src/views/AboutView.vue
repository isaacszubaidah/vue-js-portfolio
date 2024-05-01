<template>
  <div class>
    <div class="about d-flex flex-column mt-4">
      <h1 class="title col-12">Who Am I ?</h1>
      <div class="row">
        <div class="col-sm-12 col-lg-6 item-2">
          <div class="item-3">
            <p class="paragraphAbout animate-right">
              <i class="fa fa-quote-right" aria-hidden="true"></i>
              Hey there! I'm Zubaidah Isaacs, a web developer passionate about
              crafting clean, user-friendly applications. I thrive on turning
              ideas into reality through coding and I'm known for my diligence
              and helpfulness. My fascination with technology's potential led me
              to dive into web development, where I enjoy tackling challenges
              and refining my skills. When I'm not coding, you'll find me
              spreading joy through baking and embracing friendly competition.<i
                class="fa fa-quote-right"
                aria-hidden="true"
              ></i>
            </p>
          </div>
        </div>

        <div class="col-sm-12 col-lg-6 item-1 animate-right">
          <p class="text"><span class="text2">DOB: </span>17/04/2003</p>
          <p class="text">
            <span class="text2">Languages: </span>English,Afrikaans
          </p>
          <p class="text">
            <span class="text2">Subjects: </span>English, Afrikaans FAL,
            Mathematics Literacy,<br />
            Business Studies, Consumer Studies, Life Orientation, Life Science.
          </p>
          <div class="btn-container">
            <router-link to="/contact"
              ><button class="btn">Hire Me</button></router-link
            >
            <a
              target="_blank"
              href="https://ivory-lavina-83.tiiny.site"
              ><button class="btn">View CV</button></a
            > 
          </div>
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

.title {
  text-align: center;
  color: #5e5343;
  font-family: "Playfair Display", serif;
}
.row {
  margin-top: 6%;
}
.item-1,
.item-2 {
  text-align: center;
  font-family: "Playfair Display", serif;
  color: #5e5343;
  font-size: 18px;
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
  margin-top: 4%;
}

.paragraphAbout {
  max-width: 600px;
  margin: auto;
  font-family: "Quicksand", sans-serif;
  font-size: 20px;
  font-weight: 300;
}

.text {
  font-family: "Quicksand", sans-serif;
  font-size: 18px;
}

.text2 {
  font-family: "Playfair Display", serif;
  color: #5e5343;
  font-size: 18px;
}

@media screen and (max-width: 480px) {
  .about {
    height: 100vh;
    margin-bottom: 80px;
  }

  .item-2 {
    font-size: 16px;
  }

  .paragraphAbout,
  .text,
  .text2 {
    font-size: 18px;
  }
}
</style>
