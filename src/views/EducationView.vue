<template>
  <div>
    <div class="education">
      <div class="item-2">
        <div class="item-3">
          <h1>Education</h1>
          <p class="paragraphEdu">
            I matriculated in the year 2020.I was the valedictorian of my class
            that year.It was tough because of Covid and that is where I learnt
            that nothing can stop you, once you are committed and persevere.I
            won’t forget this quote from Hamlet , “To be or not to be” in the
            sense of is it nobler to drown in the sea of troubles or will you
            take arms and defeat it.
          </p>
        </div>
      </div>
      <div class="item-1 animate-right">
        <img
          class="EducationPageImg"
          src="https://i.imgur.com/NcCG5TA.png"
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
  grid: 700px / 1fr 1fr;
  align-items: center;
}
.EducationPageImg {
  border-radius: 60px;
  /* margin-right: 250px; */
  width: 400px;
  height: 355px;
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

.paragraphEdu {
  padding-top: 20px;
  max-width: 600px;
  font-family: 'Quicksand', sans-serif;
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
