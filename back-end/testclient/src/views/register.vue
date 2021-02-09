<template>
  <div>
      <p> Definitely not first name </p>
      <br />
      <input type="text" v-model="firstName">
      <p> Definitely not last name </p>
      <br />
      <input type="text" v-model="lastName">
      <p> Definitely not email </p>
      <br />
      <input type="text" v-model="email">
      <p> Definitely not password </p>
      <br />
      <input type="text" v-model="password">
      <p> Definitely don't submit a POST request </p>
      <br />
      <button value="submit" v-on:click="post"></button>
  </div>
</template>

<script>
const axios = require('axios')
export default {

    data(){
        return{
    firstName:null,
      lastName:null,
      email:null,
      password: null,
      permissionLevel:1
        }
    },
    methods:{
        post(){
      axios.post('http://localhost:4000/users/add', {
        firstName:this.firstName,
        lastName:this.lastName,
        email:this.email,
        password:this.password,
        permissionLevel:this.permissionLevel
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

<style>

</style>