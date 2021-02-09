<template>
  <main>
    <div>
      <HomeNavBar/>
    </div>
    <h1>home</h1>
    <div id="home-banner">
      <div id="home-banner-content">
        <h1>Fuel your Imagination.</h1>
        <div id="search-bar">
          <input type="search" id="search-box" placeholder="Search MindRain...">
          <button id="search-box-btn">&#128269;</button>
        </div>
      </div>
    </div>

    <section id="home-body">
      <div id="image-background">
        <div id="image-container">
          <div @mouseover="imageHover" @mouseleave="imageLeave" id="image">
            <div v-if="images.image1.hover == true" id="image-options">
              <div v-if="images.image1.hover == true" id="image-option-container">
                <div id="options-left">
                  <img id="image-avatar" :src="images.image1.avatar_url" alt="user avatar">
                  <p>{{ images.image1.name }}<p/>
                </div>
                <div id="options-right">
                  <button id="image-option-btn">+</button>
                  <button id="image-option-btn">&hearts;</button>
                </div>
              </div>
            </div>
          </div>
          <div @mouseover="imageHover2" @mouseleave="imageLeave2" id="image2">
            <div v-if="images.image2.hover == true" id="image-options">
              <div v-if="images.image2.hover == true" id="image-option-container">
                <div id="options-left">
                  <img id="image-avatar" :src="images.image2.avatar_url" alt="user avatar">
                  <p>{{ images.image2.name }}<p/>
                </div>
                <div id="options-right">
                  <button id="image-option-btn">+</button>
                  <button id="image-option-btn">&hearts;</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<script>
  import HomeNavBar from '../components/HomeNavBar.vue'

  export default {
    name: 'Home',
    components: {
      HomeNavBar,
    },
    data() {
      return {
        images: {
          image1: {
            id: "image1",
            hover: false,
            avatar_url: require('@/assets/images/avatars/avatar_andy.jpg'),
            name: 'Andy'
          },
          image2: {
            id: "image2",
            hover: false,
            avatar_url: require('@/assets/images/avatars/avatar_jason.jpg'),
            name: 'Jason'
          }
        }
      }
    },
    methods: {
      imageHover() {
          this.images.image1.hover = true
      },
      imageLeave() {
        this.images.image1.hover = false
      },      
      imageHover2() {
          this.images.image2.hover = true
      },
      imageLeave2() {
        this.images.image2.hover = false
      }
    }
  };
</script>

<style scoped>
main {
  background-color: #292c33;
}

/*** Home Banner Image and Search Box ***/

#home-banner {
  background-image: url('../assets/images/beach.jpg');
  background-size: cover;
  background-position: 0px -100px;
  background-repeat: no-repeat;
  height: 460px;
  width: 100%;
  top: 0px;
  box-shadow: 0px -150px 50px -30px #292c33 inset;
  z-index: 5;
  position: absolute;
}

#home-banner-content {
  margin-top: 90px;
  margin-left: 32.5%;
  width: 35%;
  text-shadow: 2px 2px 5px black;
}

#search-bar {
  display: flex;
  box-shadow: 1px 1px 3px rgba(0, 0, 0, 0.835);
  border-radius: 10px 10px 10px 10px;
}

#search-box {
  width: 100%;
  padding: 10px;
  font-size: 25px;
  border: none;
  border-radius: 10px 0px 0px 10px;
  outline: none;
  background-color: #eee;
}

#search-box-btn {
  outline: none;
  border: none;
  border-radius: 0px 10px 10px 0px;
  background-color: #eee;
}

#search-box-btn:active {
  border: solid 2px black;
}

/*** Home Body ***/

#home-body {
  margin-top: 700px;
  margin-bottom: 30px;
  grid-template-columns: auto;
}

#image-background {
  width: 100%;
  height: 400px;
  margin-top: 20px;
  margin-bottom: 20px;
  background-image: linear-gradient(to top, #292c33, #474b53,  #474b53, #292c33);
}

#image-container {
  margin-left: 25%;
  height: 100%;
  width: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #2d2f31;
  border: solid #282828;
  box-shadow: 0px 0px 5px 5px #292c33;
}

#image {
  height: 90%;
  width: 320px;
  background-image: url('../assets/images/sunrise.jpg');
  background-size: 100%;
  background-position: center;
  transition: 250ms;
  margin-left: 5px;
  margin-right: 5px;
  border-radius: 9px 9px;
}

#image2 {
  height: 90%;
  width: 320px;
  background-image: url('../assets/images/beach.jpg');
  background-size: 100%;
  background-position: center;
  transition: 250ms;
  margin-left: 5px;
  margin-right: 5px;
  border-radius: 9px 9px;
}

#image:hover, #image2:hover {
  cursor: pointer;
  background-size: 110%;
  transform: rotate(1deg);
  transition: 250ms;
  box-shadow: 0px -10px 30px 0px rgba(0, 0, 0, 0.527) inset;
}

#image-options {
  display: flex;
  align-items: flex-end;
  height: 100%;
}

#image-option-container {
  display: flex;
  align-items: flex-end;
  margin: 4px;
  width: 100%;
  height: 100%;
}

#options-left {
  display: flex;
}

#options-left p {
  font-family: ethnocentric;
  text-shadow: 2px 2px black;
  margin-left: 2px;
  margin-top: 7px;
}

#image-avatar {
  height: 40px;
  width: 40px;
  border-radius: 50%;
}

#options-right {
  width: 100%;
  display: flex;
  justify-content: flex-end;
}

#image-option-btn {
  border: none;
  outline: none;
  height: 40px;
  width: 40px;
  border-radius: 5px 5px;
  background-color: lightgreen;
  margin: 5px;
}

#image-option-btn:hover{
  background-color: rgb(90, 211, 90);
}
</style>