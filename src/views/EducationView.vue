<template>
  <div>
    <div class="education">
      <div class="item-2">
        <div class="item-3">
          <h1>Education</h1>
          <p class="paragraphEdu">
            <i class="fa fa-quote-right" aria-hidden="true"></i>
            I graduated from Manenberg High School in 2020, where I proudly
            served as the valedictorian of my graduating class. This experience
            ignited a profound realization of my leadership potential and
            allowed me to hone my skills in guiding others.
            <i class="fa fa-quote-right" aria-hidden="true"></i>
          </p>
        </div>
      </div>
      <div class="item-1 animate-right">
        <img
          class="EducationPageImg"
          src="https://i.imgur.com/2bPGbOe.jpg"
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

.education {
  display: grid;
  grid: 500px / 1fr 1fr;
  align-items: center;
  width: 1000px;
  margin: auto auto 200px auto;
  gap: 90px;
}

.item-1.animate-right {
  width: 250px;
}
.EducationPageImg {
  border-radius: 60px;
  border: #5e5343 5px solid;
  box-shadow: 10px 10px 5px grey;
  /* margin-right: 250px; */
  width: 400px;
  height: 300px;
}
.item-2 {
  font-family: "Playfair Display", serif;
  text-align: center;
  align-items: center;
  color: #5e5343;
  /* gap: 30px; */
  width: 500px;
  display: flex;
  flex-direction: column;
  font-size: 20px;
}

.paragraphEdu {
  padding-top: 20px;
  max-width: 600px;
  font-family: "Quicksand", sans-serif;
  font-size: 22px;
  font-weight: 300;
}

@media screen and (max-width: 480px) {
  .education {
    display: flex;
    flex-direction: column-reverse;
    align-items: center;
    text-align: center;
    margin-bottom: 40px;
    padding-left: 16px;
    padding-right: 16px;
    gap: 50px;
  }

  .EducationPageImg {
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
