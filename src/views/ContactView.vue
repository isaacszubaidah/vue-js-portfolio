<template>
  <div class="vh-100">
    <div class="contact">
      <div>
        <h1 class="header">Work With Me</h1>
        <h3 class="sub">
          Got a question or proposal, or just want to say hello?
        </h3>
      </div>
    </div>

    <div class="bigger mt-5">
      <div class="col-6 columnA">
        <!-- <form
          action="https://formspree.io/f/mayrnyoz"
          method="POST"
          class="formDiv"
        >
          <label>
            <input
              class="name"
              type="name"
              name="name"
              placeholder="Enter Your Name"
              required
            />
          </label>
          <label>
            <input
              class="input"
              type="email"
              name="email"
              placeholder="Enter Your Email"
              required
            />
          </label>
          <label>
            <textarea
              class="input"
              name="message"
              placeholder="Enter Message"
              required
            ></textarea>
          </label>
          <div>
            <button class="btn" type="submit">Send</button>
          </div>
        </form> -->

        <form @submit.prevent="submitForm" class="formDiv">
          <label>
            <input
              v-model="formData.name"
              class="name"
              type="name"
              name="name"
              placeholder="Enter Your Name"
              required
            />
            <span v-if="formErrors.name" class="error">{{
              formErrors.name
            }}</span>
          </label>
          <label>
            <input
              v-model="formData.email"
              class="input"
              type="email"
              name="email"
              placeholder="Enter Your Email"
              required
            />
            <span v-if="formErrors.email" class="error">{{
              formErrors.email
            }}</span>
          </label>
          <label>
            <textarea
              v-model="formData.message"
              class="input"
              name="message"
              placeholder="Enter Message"
              required
            ></textarea>
            <span v-if="formErrors.message" class="error">{{
              formErrors.message
            }}</span>
          </label>
          <div>
            <button class="btn" type="submit" :disabled="isLoading">
              <span v-if="isLoading">Loading...</span>
              <span v-else>Send</span>
            </button>
          </div>
        </form>
      </div>
      <div class="col-6 columnA">
        <span class="subhead">How to find me?</span>

        <div class="row iconRow">
          <div class="col-3">
            <p><i class="fa-solid fa-location-dot fa-2x"></i></p>
          </div>
          <div class="col-9"><p>Manenberg,7764,Cape Town</p></div>
        </div>
        <div class="row iconRow">
          <div class="col-3">
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
  </div>
</template>

<script>
export default {
  data() {
    return {
      formData: {
        name: "",
        email: "",
        message: "",
      },
      formErrors: {
        name: "",
        email: "",
        message: "",
      },
      isLoading: false,
    };
  },
  methods: {
    submitForm() {
      this.formErrors = {
        name: "",
        email: "",
        message: "",
      };

      this.isLoading = true;

      fetch("https://formspree.io/f/mayrnyoz", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(this.formData),
      })
        .then((response) => {
          if (!response.ok) {
            alert("Something went wrong , please try again");
          }
          return response.json();
        })
        .then((data) => {
          this.formData = {
            name: "",
            email: "",
            message: "",
          };
        })
        .catch((error) => {
          console.error("There was a problem with the fetch operation:", error);
          this.formErrors.message =
            "An error occurred while submitting the form. Please try again.";
        })
        .finally(() => {
          this.isLoading = false;
        });
    },
  },
};
</script>

<style scoped>
.formDiv {
  max-width: 200px;
  width: 100%;
  display: flex;
  flex-direction: column;
  padding-top: 30px;
}

.error {
  color: red;
}

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
  color: #5e5343;
  display: flex;
  justify-content: flex-start;
  padding-left: 28px;
  padding-bottom: 30px;
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
  align-items: center;
  padding-top: 5%;
}
.find {
  margin-top: 5%;
}
.name {
  border: 0px solid black;
  border-bottom: 3px solid;
  width: 200%;
  color: #5e5343;
}

.input {
  border: 0px solid black;
  border-bottom: 3px solid;
  color: #5e5343;
  width: 200%;
  margin-top: 35%;
}
::placeholder {
  font-weight: bold;
  font-size: 14px;
  display: flex;
  text-align: center;
  justify-content: center;
  font-family: "Quicksand", sans-serif;
  color: #5e5343;
}
.btn {
  margin-top: 10%;
  margin-left: 100px;
  background-color: #5e5343;
  color: white;
  width: 200px;
}

@media screen and (max-width: 480px) {
  .bigger {
    display: flex;
    justify-content: center;
    flex-direction: column-reverse;
    gap: 20px;
    align-items: center;
  }

  .subhead {
    font-size: 20px;
    font-weight: bold;
    color: #5e5343;
    display: flex;
    justify-content: flex-start;
  }
  .find {
    margin-top: 0%;
  }
  .columnA {
    height: 100%;
  }

  .formDiv {
    max-width: 200px;
    width: 100%;
    display: flex;
    flex-direction: column;
    padding-top: 10px;
  }
}
</style>
