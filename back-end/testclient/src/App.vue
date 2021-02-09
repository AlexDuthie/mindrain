<template>
  <div id="app">
    <router-view/>
    </div>
</template>

<script>
const axios = require('axios')
export default {

  data() {
    return {
      
    }
  },
  name: 'App',
  components: {
  },
  methods:{
    get(){
      axios.get('http://localhost:3600/users/5fc7bb3d94761e74ec475d89')
      .then(response=>{
        document.write(JSON.parse(response))
      })
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
