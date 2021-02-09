<template>
  <main>
    <nav id="navbar">
        <div class="backgroundcolour transition">

        </div>
        <div id="navbar-left">            
            <router-link to="/#">
                <h2>MindRain</h2>
            </router-link>
        </div>

        <div id="navbar-right" class="navbar-right hiderightbackground">

            <div class="dropdown">
                <div id="user-dropdown">
                    <router-link class="dropbtn" to="/">
                        <img
                            class="img-fluid"    
                            href="" 
                            id="navbar-avatar" 
                            src="../assets/images/avatars/avatar_unknown.jpg">
                        <label id="avatar-arrow">&#8681;</label>
                    </router-link>
                </div>
                <div class="dropdown-content">
                    <router-link class="dropdown-item" to="/register">Register</router-link>
                    <router-link class="dropdown-item" to="/login">Log In</router-link>
                    <router-link class="dropdown-item" to="/profile">Profile</router-link>
                </div>
            </div>
            <button class="mx-1 my-1 btn btn-outline-success" href="">UPLOAD</button>
            <div id="nav-search-box">
                <input type="search" name="nav-search" id="nav-search" placeholder="Search...">
                <button id="nav-search-box-btn">&#128269;</button>
            </div>
        </div>
    </nav>
  </main>
</template>

<script>
export default {
    data() {
        return {
            userName: 'Meraki'
        }
    }
};

window.onload=function(){
    $(window).scroll(function() {

	    if ($(window).scrollTop() > 350 ){
             $('.navbar-right').removeClass('hiderightbackground');
            $('.backgroundcolour').addClass('showbackgroundcolour');
    } else {
        $('.navbar-right').addClass('hiderightbackground');
        $('.backgroundcolour').removeClass('showbackgroundcolour');
        };   	
    });
};

</script>

<style scoped>
main {
    background-color:  #292c33;
    margin-bottom: 7vh;
    width: 100%;
}

#navbar {
    position: fixed;
    top: 0;
    width: 100%;
    height: 7vh;

    z-index: 12;
}

.backgroundcolour {
    position: fixed;
    z-index: -14;
    background: #24262a;
    width: 100%;
    height: inherit;
    opacity: 0;
    border-bottom: solid 3px rgb(31, 31, 31);
}

.showbackgroundcolour {
  opacity: 1;
}

.hiderightbackground {
    border-bottom: solid 3px rgb(31, 31, 31);
    border-radius: 10px;
}

.transition {
	transition: all 0.5s ease-in-out;
}

#navbar a{
    color: #eee;
    font-size: 100%;
    transition: 500ms;
}

#navbar a:hover{
    color: rgb(102, 134, 160);
    text-decoration: none;
    transition: 500ms;
}

#navbar-left {
    float: left;
}

#navbar-left h2{
    font-family: ethnocentric;
    text-shadow: -3px -1px 2px rgba(0, 0, 0, 0.521);
    font-style: italic;
    margin: 5px;
    width: max-content;
}

#navbar-right {
    display: flex;
    float: right;
    width: max-content;
    margin-right: 10px;
    height: 100%;
    box-shadow: 0px -70px 50px -30px #24262a inset;
    border-bottom: solid 3px rgb(31, 31, 31);
}

#user-dropdown {
    margin-right: 20px;
    cursor: pointer;
}

#navbar-avatar {
    margin-top: 10px;
    margin-right: 5px;
    height: 30px;
    margin-left: 10px;
    filter: opacity(70%);
    transition: 400ms;
    float: left;
    border-radius: 60px/60px;
    box-shadow: 0px 0px 5px rgb(255, 0, 0);
}

#navbar-avatar:hover {
    filter: opacity(100%);
    transition: 600ms;
    transform: rotate(360deg);
    border-radius: 60px/60px;
    box-shadow: 0px 0px 5px rgb(21, 255, 0);
}

#avatar-arrow {
    font-size: 30px;
    color: green;
}

.dropdown-content {
    display: none;
    position: absolute;
    z-index: 12;
    right: 0;
    min-width: 300px;
    background-color: #373e46;
    font-size: 17px;
    border-radius: 10px 10px 10px 10px;
}

.dropdown-content a {
    color: white;
    text-decoration: none;
}

.dropdown-content a:hover {
    background-color: #24262a;
    border-radius: 10px 10px 10px 10px;
}

.dropdown:hover .dropdown-content {
    display: block;
}

#nav-search-box {
    display: flex;
    margin-top: 5px;
    margin-bottom: 5px;
}

#nav-search {
    width: 150px;
    border: none;
    border-radius: 5px 0px 0px 5px;
    outline: none;
    background-color: #47494d; 
    color: white;
    font-size: 20px;
}

#nav-search::placeholder {
    color: rgba(255, 255, 255, 0.863);
}

#nav-search-box-btn {
    border: none;
    border-radius: 0px 5px 5px 0px;
    outline: none;
    background-color: #47494d;
}

#nav-search-box-btn:active {
    border: solid 1px black;
}
</style>