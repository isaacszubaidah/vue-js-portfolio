<template>
  <div class="vh-100">
    <div class="home">
      <div class="item-1">
        <img
          class="HomePageImg"
          src="https://i.imgur.com/ObkxD6o.jpg"
          alt=""
        />
      </div>
      <div class="item-2 animate-right">
        <p>Zubaidah</p>
        <p>Isaacs</p>
        <div class="item-3">
          <p>Aspiring Developer</p>
        </div>
        <router-link class="nav-link active" aria-current="page" to="/contact"
          ><button class="btn">Find Me</button></router-link
        >
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

.HomePageImg {
  border: 2px solid;
  border-radius: 30px;
  width: 350px;
  height: 470px;
}

.home {
  display: grid;
  grid: 700px / 1fr 1fr;
  align-content: center;
  padding-top: 5%;
}

.item-1 img {
  margin-left: 200px;
  margin-top: 4%;
  align-self: center;
}
.item-2 {
  font-size: 75px;
  font-family: "Playfair Display", serif;
  margin-top: 5%;
  text-align: center;
  align-items: center;
  justify-content: center;
  margin-right: 250px;
  color: #5e5343;
}
.item-3 {
  font-size: 35px;
  font-family: "Playfair Display", serif;
  text-align: center;
  align-items: center;
  justify-content: center;
  margin-right: 15px;
  color: #5e5343;
}
.btn {
  font-size: 19px;
  background-color: #5e5343;
  color: white;
  width: 200px;
}

@media screen and (max-width: 480px) {
  .home {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    padding-left: 16px;
    padding-right: 16px;
  }

  .item-2 {
    font-size: 60px;
    line-height: 60px;
    font-family: "Playfair Display", serif;
    margin-top: 5%;
    text-align: center;
    align-items: center;
    justify-content: center;
    margin-right: 0;
    color: #5e5343;
  }

  .item-3 {
    font-size: 35px;
    font-family: "Playfair Display", serif;
    text-align: center;
    align-items: center;
    justify-content: center;
    color: #5e5343;
  }

  .HomePageImg {
    border: none;
    border-radius: 30px;
    width: 300px;
    height: 400px;
  }

  .item-1 img {
    margin-left: 0;
    margin-top: 0;
    align-self: center;
  }
}
</style>
