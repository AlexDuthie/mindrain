
<template>
  <main>
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-md-9 col-lg-12 col-xl-10">
          <div class="card shadow-lg o-hidden border-0 my-5">
            <div class="loginForm">
              <div class="row">
                <div class="col-lg-6 d-none d-lg-flex">
                  <div
                    class="flex-grow-1 bg-login-image"
                    style="background-image: url(&quot;assets/avatar.jpg&quot;);"
                  ></div>
                </div>
                <div class="loginFromBG">
                  <div class="p-5">
                    <div class="text-center">
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
                      <h4 class="welcomeBack">Sign In:</h4>
                      <p class="e-mail">E-mail:</p>
                      <p class="passw0rd">Password:</p>
                    </div>
                    <form v-on:submit.prevent="submitForm" class="user">
                      <div class="form-group">
                        <input
                          class="form-control form-control-user"
                          type="text"
                          id="usernameInput"
                          aria-describedby="username"
                          placeholder="Enter username"
                          name="username"
                          v-model="username"
                        />
                      </div>
                      <div class="form-group">
                        <input
                          class="form-control form-control-user"
                          type="password"
                          id="exampleInputPassword"
                          placeholder="Password"
                          name="password"
                          v-model="password"
                        />
                      </div>
                      <div id="checkBox" class="form-group">
                        <div class="custom-control custom-checkbox small">
                          <div class="form-check">
                            <input
                              class="form-check-input custom-control-input"
                              type="checkbox"
                              id="formCheck-1"
                            />
                            <label
                              id="rememberMe"
                              class="form-check-label custom-control-label"
                              for="formCheck-1"
                            >Remember Me</label>
                          </div>
                        </div>
                      </div>
                      <button
                        id="signInBtn"
                        class="btn btn-primary btn-block btn-user"
                        type="submit"
                      >Sign In</button>
                      <a href="../views/UserRegister.vue">
                        <button
                          id="createAccBtn"
                          class="btn btn-primary btn-block btn-createUser"
                          type="submit"
                        >Create an Account</button>
                      </a>

                      <hr />

                      <a
                        id="signInGoogleBtn"
                        class="btn btn-primary btn-block btn-google btn-user"
                        role="button"
                      >
                        <i class="fab fa-google"></i>
                        &nbsp; Login with Google
                      </a>
                      <a
                        id="signInFacebookBtn"
                        class="btn btn-primary btn-block btn-facebook btn-user"
                        role="button"
                      >
                        <i class="fab fa-facebook-f"></i>
                        &nbsp; Login with Facebook
                      </a>

                      <hr />
                    </form>
                    <div class="text-center">
                      <a
                        id="forgottenPassword"
                        class="small"
                        href="forgot-password.html"
                      >Forgot Password?</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
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
      password: null,
    };
  },
  methods: {
    resetError() {
      this.triggerError = false;
    },
    trigger: function (text) {
      this.triggerError = true;
      this.errorData = text;
    },
    submitForm() {
      axios
        .post("http://127.0.0.1:4000/login", {
          username: this.username,
          password: this.password,
        })
        .then((res) => {
          console.log(res);
          if (res.status == 200) {
            //grab session token and refresh token
            this.$router.push("/"); //redirect to home page
          }
        })
        .catch((error) => {
          console.log(error.response.status);
          if (error.response.status == 401) {
            this.trigger("Incorrect username or password");
          } else {
            this.trigger("Something really went wrong, please try again");
          }
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
  height: 86vh;
}

.loginFormBG {
  max-height: 600px;
  max-width: 800px;
}

.loginForm {
  background-color: rgb(41, 44, 51);
  border-radius: 50px 1px 50px 1px;
}

.welcomeBack {
  color: snow;
  position: absolute;
  top: 5%;
  left: 24%;
  text-decoration: underline;
}

.e-mail {
  color: snow;
  position: absolute;
  top: 27%;
  left: 8%;
}

#usernameInput {
  background-color: rgb(51, 49, 49);
  border-color: rgb(115, 116, 117);
  color: snow;
  position: absolute;
  top: 25%;
  left: 15%;
  width: 30%;
}

.passw0rd {
  color: snow;
  position: absolute;
  top: 42%;
  left: 5.5%;
}

#exampleInputPassword {
  background-color: rgb(51, 49, 49);
  border-color: rgb(115, 116, 117);
  color: snow;
  position: absolute;
  top: 40%;
  left: 15%;
  width: 30%;
}

::placeholder {
  color: rgb(205, 207, 209);
}

#forgottenPassword {
  position: absolute;
  top: 51%;
  left: 34%;
}

#checkBox {
  position: absolute;
  top: 55%;
  left: 13%;
}

#signInBtn {
  background-color: rgba(0, 0, 0, 0);
  border-color: rgb(28, 243, 71);
  color: rgb(28, 243, 71);
  position: relative;
  top: 17vh;
  left: -135%;
  max-width: 80%;
}

#createAccBtn {
  background-color: rgba(0, 0, 0, 0);
  border-color: rgb(254, 56, 56);
  color: rgb(254, 56, 56);
}

#signInGoogleBtn {
  background-color: rgba(0, 0, 0, 0);
  border-color: rgb(252, 25, 25);
  color: rgb(252, 25, 25);
}

#signInFacebookBtn {
  background-color: rgba(0, 0, 0, 0);
  border-color: rgb(33, 126, 255);
  color: rgb(33, 126, 255);
}
</style>