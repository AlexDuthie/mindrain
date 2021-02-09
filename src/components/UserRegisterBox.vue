
<template>
  <main>
    <div id="container">
      <div id="image-container">
        <div id="sunrise-bg"></div>
      </div>

      <div id="register-box-container">
        <div id="register-box">
          <div v-if="triggerError" class="alert alert-danger alert-dismissible show">
            {{errorData}}
            <button
              v-on:click="resetError"
              type="button"
              class="close"
              data-dismiss="alert"
              aria-label="Close"
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <h2 id="register-box-header">Create an Account</h2>
          <form v-on:submit.prevent="submitForm" id="register-form">
            <!-- We need a way to check for existing ones, not on the fly, only when the form is submitted (to avoid username scraping) -->
            <label for="fname">Username:</label>
            <br />
            <input
              type="text"
              name="username"
              id="reg-username"
              placeholder="Username"
              v-model="username"
              required
            />

            <hr />
            <div id="reg-name">
              <div id="fname-div">
                <label for="fname">First Name:</label>
                <br />
                <input
                  type="text"
                  name="fname"
                  id="reg-fname"
                  placeholder="First Name"
                  v-model="firstname"
                  required
                />
              </div>
              <div id="surname-div">
                <div>
                  <label for="surname">Surname:</label>
                  <br />
                  <input
                    type="text"
                    name="surname"
                    id="reg-surname"
                    placeholder="Surname"
                    v-model="surname"
                    required
                  />
                </div>
              </div>
            </div>

            <hr />

            <div id="reg-dob">
              <div id="dob-div">
                <label for="dob">Date of Birth:</label>
                <br />
                <input type="date" name="dob" id="reg-dob" v-model="birthdate" />
              </div>
            </div>

            <hr />

            <div id="reg-phone-no">
              <div id="phone-no-div">
                <label for="phone-no">Phone Number:</label>
                <br />
                <input
                  type="number"
                  name="phone-no"
                  id="reg-phone-no"
                  placeholder="Enter Phone No."
                  v-model="telnumber"
                />
              </div>
            </div>

            <hr />

            <div id="reg-email">
              <div id="email-div">
                <label for="email">Email:</label>
                <br />
                <input
                  type="email"
                  name="email"
                  id="reg-email"
                  placeholder="Enter Email"
                  v-model="email"
                  required
                />
              </div>
              <div id="confirm-email-div">
                <div>
                  <label for="confirm-email">Confirm Email:</label>
                  <br />
                  <input
                    type="email"
                    name="confirm-email"
                    id="reg-confirm-email"
                    placeholder="Confirm Email"
                  />
                </div>
              </div>
            </div>

            <hr />

            <div id="reg-password">
              <div id="password-div">
                <label for="password">Password</label>
                <br />
                <input
                  type="password"
                  name="password"
                  id="reg-password"
                  placeholder="Choose a Password"
                  v-model="password"
                  required
                />
              </div>
              <div id="confirm-password-div">
                <div>
                  <label for="confirm-password">Confirm Password</label>
                  <br />
                  <input
                    type="password"
                    name="confirm-password"
                    id="reg-confirm-passwiohh rd"
                    placeholder="Confirm Password"
                  />
                </div>
              </div>
            </div>
            <hr />
            <div id="reg-terms">
              <input type="checkbox" name="accept-tc" id="reg-accept" required />
              <p>I agree to the terms and conditions</p>
            </div>
            <button class="btn btn-outline-success">Sign Up</button>
          </form>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      // business logic be like
      triggerError: false,
      errorData: null,
      username: null,
      firstname: null,
      surname: null,
      birthdate: null,
      telnumber: null,
      email: null,
      password: null,
    };
  },
  methods: {
    resetError() {
      this.triggerError = false;
    },
    submitForm() {
      axios.post("http://127.0.0.1:4000/register", {
          username: this.username,
          firstname: this.firstname,
          surname: this.surname,
          birthdate: this.birthdate,
          telnumber: this.telnumber,
          email: this.email,
          password: this.password,
        })
        .then((res) => {
          if (res.status == 200) {
            //grab session token and refresh token
            this.$router.push('/'); //redirect to home page

            // this.triggerError = true;
            // this.errorData =
            //   "Register would have been sucessful, so do some redirect";
          } else {
            this.triggerError = true;
            this.errorData = res.error;
          }
        })
        .catch((error) => {
          console.log(error);
          this.triggerError = true;
          this.errorData = error;
        })
        .finally(() => {
          //Perform action in always
        });
    },
  },
};
</script>

<style scoped>
main {
  background-color: #292c33;
  z-index: -1;
}

#container {
  display: flex;
}

#image-container {
  height: 100vh;
  top: 0;
}

#sunrise-bg {
  background-image: url("../assets/images/sunrise.jpg");
  background-size: cover;
  height: 100%;
  width: 30vw;
}

/*** regiser box ***/

#register-box-container {
  margin-top: 2vh;
}

#register-box {
  height: fit-content;
  width: 45vw;
  margin-left: 10vw;
  background-color: #18191d;
  border-radius: 45px 5px 45px 0px;
  padding: 5px;
}

#register-box-header {
  text-align: center;
  text-decoration: underline;
  font-family: ethnocentric;
  font-size: 18px;
}

#register-form {
  margin-top: 20px;
  width: 80%;
  margin-left: 10%;
}

#register-form input {
  background-color: rgb(64, 66, 66);
  color: white;
  outline: none;
  border: solid 1px rgba(187, 187, 187, 0.699);
  border-radius: 5px 5px;
  padding: 2px;
}

#register-form input::placeholder {
  color: white;
}

#register-form hr {
  background-color: rgb(128, 128, 128);
  box-shadow: 0px 0px 3px  rgb(128, 128, 128);
}

#fname-div,
#email-div,
#password-div {
  float: left;
}

#surname-div,
#confirm-email-div,
#confirm-password-div {
  display: flex;
  justify-content: flex-end;
}

#reg-terms {
  display: flex;
}

#reg-accept {
  height: 25px;
  width: 25px;
  cursor: pointer;
}

#reg-terms p {
  margin-left: 6px;
  font-size: 20px;
  font-family: Cambria, Cochin, Georgia, Times, "Times New Roman", serif;
}

.btn:active {
  cursor: progress;
}
</style>