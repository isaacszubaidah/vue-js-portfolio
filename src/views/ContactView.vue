<template>
  <div class="contact">
    <div>
      <h1 class="header">Work With Me</h1>
      <h3 class="sub">
        Got a question or proposal, or just want to say hello?
      </h3>
    </div>
    <div class="find">
      <span class="subhead">How to find me?</span>
    </div>
  </div>

  <!-- Contact Form -->
  <div class="bigger mt-5 row">
    <div class="col-6 columnA ">
      <div>
        <form action="https://formspree.io/f/mayrnyoz" method="POST">
          <label>
            <input class="name" type="name" name="name" placeholder="Enter Your Name" required  />
          </label>
          <label>
            <input class="input" type="email" name="email" placeholder="Enter Your Email" required />
          </label>
          <label>
            <textarea class="input" name="message" placeholder="Enter Message" required></textarea>
          </label>
          <div>
            <button class="btn" type="submit">Send</button>
          </div>
          
        </form>
      </div>
    </div>
    <div class="col-6 columnA">
      <div class="row iconRow">
        <div class="col-3">
          <p><i class="fa-solid fa-location-dot fa-2x"></i></p>
        </div>
        <div class="col-9"><p>Manenberg,7764,Cape Town</p></div>
      </div>
      <div class="row iconRow">
        <div class="col-3 ">
          <p><i class="fa-solid fa-envelope fa-2x"></i></p>
        </div>
        <div class="col-9"><p>isaacszubaidah17@gmail.com</p></div>
      </div>
      <div class="row iconRow">
        <div class="col-3">
          <p><i class="fa-solid fa-mobile fa-2x"></i></p>
        </div>
        <div class="col-9"><p class="num">067 978 2069</p></div>
      </div>
    </div>
  </div>
  <!-- Naeema's attempt ends here -->
</template>

<script>
export default {};
</script>

<style scoped>
.header {
  font-size: 40px;
  font-family: "Playfair Display", serif;
  color: #5e5343;
}
.sub {
  font-size: 18px;
  font-family: "Playfair Display", serif;
  color: #5e5343;
}
.subhead {
  font-size: 20px;
  font-weight: bold;
  margin-top: 5%;
  margin-left: 500px;
  color: #5e5343;
}
h4 {
  font-weight: bold;
  color: #5e5343;
}
p {
  font-size: 18px;
  font-weight: bold;
  font-family: "Quicksand", sans-serif;
  color: #5e5343;
}
.num {
  font-weight: bold;
  font-family: "Quicksand", sans-serif;
  margin-right: 120px;
  color: #5e5343;
}

.columnA {
  height: 300px;
  width: 400px;
}

.iconRow {
  height: 100px;
}
.bigger {
  display: flex;
  justify-content: center;
  gap: 200px;
}
.find {
  margin-top: 5%;
}
.name{
    border: 0px solid black;
    border-bottom: 3px solid;
    width: 200%;
    color: #5e5343;
}

.input{
    border: 0px solid black;
    border-bottom: 3px solid;
    color: #5e5343;
    width: 200%;
    margin-top: 35%;
}
::placeholder{
    font-weight: bold;
    font-size: 14px;
    display: flex;
   text-align:center;
    justify-content: center;
    font-family: "Quicksand", sans-serif;
    color: #5e5343;

}
.btn{
    margin-top: 3%;
    margin-left: 100px;
    background-color: #5e5343;
    color: white;
}


</style>
