<template>
  <div>
      <p> here be email </p>
      <br />
    <input type="text" v-model="email" />
     <p> here is where you WOULDN'T put your password </p>
     <br />
    <input type="text" v-model="password" />
    <p> auth button be like </p>
    <br />
    <button label="login" v-on:click="auth"></button>
  </div>
</template>

<script>
const axios = require('axios')
    export default {
        data(){
            return{
                email:null,
                password:null
            }
        },
        methods:{
    auth(){
      axios.post('http://localhost:3600/auth', {
        email:this.email,
        password:this.password
      })
      .then((response)=>{
        console.log(response);
      }, (error)=>{
        console.log(error);
      });
        }
    }
}
</script>

<style scoped>
</style>