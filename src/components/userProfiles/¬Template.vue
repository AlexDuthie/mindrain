<template>
    <main>
        <div id="profile-banner">
            <div id="banner-avatar">
                <img :src="user.avatar" alt="avatar">
            </div>
            <div id="banner-info-left">
                <div id="username">
                    {{ user.name }}
                </div>
                <div v-if="user.followers>0" id="followers">
                    <p id="followers-display" v-if="user.followers>1">
                        {{ user.followers }} Followers
                    </p>
                    <p id="followers-display" v-else>
                        {{ user.followers }} Follower
                    </p>
                </div>
                <div id="banner-btns">
                    <button v-if="followed == false" @click="follow" id="follow-btn">follow</button>
                    <button v-else @click="unFollow" id="follow-btn">unfollow</button>
                    <button v-if="user.donateBtn == true" id="donate-btn">donate</button>
                </div>
            </div>
            <div id="social-links">
                <div id="social-links-youtube">
                    <a v-if="user.socials.youtube == true" href="">
                        <img src="@/assets/images/social-links/80x80/YouTube.png" alt="Youtube Link" id="youtube">
                    </a>
                    <button v-else>
                        +
                    </button>
                </div>
                <div id="social-links-instagram">
                    <a v-if="user.socials.instagram == true" href="">
                        <img src="@/assets/images/social-links/80x80/Instagram.png" alt="Instagram Link" id="instagram">
                    </a>
                    <button v-else>
                        +
                    </button>
                </div>
                <div id="social-links-twitter">
                    <a v-if="user.socials.twitter == true" href="">
                        <img src="@/assets/images/social-links/80x80/Twitter.png" alt="Twitter Link" id="twitter">
                    </a>
                    <button v-else>
                        +
                    </button>
                </div>
                <div id="social-links-facebook">
                    <a v-if="user.socials.facebook == true" href="">
                        <img src="@/assets/images/social-links/80x80/Facebook.png" alt="Facebook Link" id="facebook">
                    </a>
                    <button v-else>
                        +
                    </button>
                </div>
                <div id="social-links-linkedin">
                    <a v-if="user.socials.linkedin == true" href="">
                        <img src="@/assets/images/social-links/80x80/Linkedin.png" alt="Linkedin Link" id="linkedin">
                    </a>
                    <button v-else>
                        +
                    </button>
                </div>
                <div id="social-links-patreon">
                    <a v-if="user.socials.patreon == true" href="">
                        <img src="@/assets/images/social-links/80x80/Patreon.png" alt="Patreon Link" id="patreon">
                    </a>
                    <button v-else>
                        +
                    </button>
                </div>
            </div>
        </div>
        
        <div id="profile-main">
            <div id="img-container">
                <div class="imgBox" v-for="user in user.images" :key="user.name">
                    <img :src="user.image" :alt="user.alt">
                </div>
            </div>
        </div>
    </main>
</template>

<script>
    export default {
        name: 'profile-template',
        components: {
        },
        data: function() {
            return {
                user: {
                    name: "template user",
                    avatar: require("@/assets/images/avatars/avatar_unknown.jpg"),
                    followers: 1,
                    donateBtn: true,
                    socials: {
                        youtube: true,
                        instagram: true,
                        twitter: true,
                        facebook: true,
                        linkedin: true,
                        patreon: true
                    },
                    images: [
                        {
                            name: "",
                            image: require("@/assets/images/avatars/avatar_unknown.jpg"),
                            alt: "image"
                        },
                        {
                            name: "",
                            image: require("@/assets/images/avatars/avatar_unknown.jpg"),
                            alt: "image"
                        },
                        {
                            name: "",
                            image: require("@/assets/images/avatars/avatar_unknown.jpg"),
                            alt: "image"
                        }
                    ]
                },
                followed: false
            }
        },
        methods: {
            follow: function() {
                this.user.followers++
                this.followed = true
            },
            unFollow: function() {
                this.user.followers--
                this.followed = false
            }
        }
    }
</script>

<style scoped>
main {
    background-color: #292c33;
    min-height: 120vh;
}

#close {
    height: 10px;
    width: 10px;
}

#profile-banner {
    background-color: #eee;
    height: 180px;
    width: 80vw;
    margin-left: 10vw;
    margin-top: 40px;
    border-radius: 30px 30px;
    display: flex;
    position: absolute;
    background-image: url('../../assets/images/space.jpg');
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
}

#banner-avatar {
    filter: opacity(100%);
    height: 120px;
    width: 120px;
    border-radius: 50%;
    margin-top: 30px;
    margin-left: 30px;
    border: solid 2px silver;
}

#banner-avatar img {
    height: 100%;
    width: 100%;
    border-radius: 50%;
}

#banner-info-left {
    color: #eee;
    font-family: ethnocentric;
    text-shadow: 1px 1px 2px #292c33;
    font-size: 20px;
    padding-top: 30px;
    margin-left: 10px;
    z-index: 4;
}

#banner-btns {
    margin-top: 20px;
}

#follower-display {
    transition: 500ms;
}

#follow-btn, #donate-btn {
    border-radius: 50px 50px;
    margin-right: 3px;
    padding: 5px;
    width: 120px;
    height: 40px;
    outline: none;
    border: none;
    background-color: rgba(0, 0, 0, 0.685);
    color: white;
    font-family: 'Courier New', Courier, monospace;
    transition: 2000ms;
}

#follow-btn:hover, #donate-btn:hover {
    background-color: rgba(0, 0, 0, 0.952);
    transition: 0ms;
    transform: rotateX(360deg);
    color: rgb(157, 255, 189);
}

#social-links {
    height: fit-content;
    margin-top: 120px;
    width: 100%;
    display: flex;
    position: absolute;
    align-items: flex-end;
    justify-content: flex-end;
    padding-right: 30px;
    z-index: 1;
}

#social-links img, #social-links button {
    height: 46px;
    width: 46px;
    margin-right: 5px;
    transition: 600ms;
    filter: brightness(90%);
    filter: saturate(0.3)
}

#social-links a img:hover, #social-links button:hover {
    filter: brightness(100%);
    filter: saturate(1.2);
    transition: 600ms;
}

#social-links button {
    border-radius: 7px 7px;
    background-color: rgb(223, 59, 59);
    color: white;
    font-weight: bold;
    border: none;
    outline: none;
}

#social-links button:hover {
    background-color: rgb(40, 189, 40);
    color: rgb(34, 33, 33);
}

#account-settings-btn {
    height: fit-content;
    border: none;
    background-color: #171c27;
    color: white;
    border-radius: 60px 60px;
    padding: 6px;
    transition: 300ms;
    position: absolute;
    margin-left: 70vw;
    margin-top: 4px;
}

#account-settings-btn:hover {
    background-color: #333436;
    transition: 300ms;
}

#profile-main {
    position: absolute;
    background-image: linear-gradient(to top, rgb(163, 163, 163), rgb(255, 255, 255));
    width: 90vw;
    margin-left: 5vw;
    margin-top: 250px;
    padding-bottom: 20px;
    border-radius: 15px 15px;
}

#img-container {
    display: flex;
    justify-content: center;
    padding-top: 20px;
}

.imgBox {
    height: 260px;
    width: 260px;
    margin-right: 40px;
    border-radius: 5px 5px;
    box-shadow: 0px 0px 5px 1px #292c33;
}

.imgBox img {
    height: 100%;
    width: 100%;
    border-radius: 5px 5px;
}
</style>