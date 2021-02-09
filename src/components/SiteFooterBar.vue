
<template>
    <main>
        <footer>
            <div id="footer-container">
                <div id="footer-copyright">
                    Copyright &copy; MindRain 2020
                </div>
                <div id="footer-socials">
                    <a href="">
                        <img src="../assets/images/social-links/80x80/Facebook.png" alt="">
                    </a>
                    <a href="">
                        <img src="../assets/images/social-links/80x80/Instagram.png" alt="">
                    </a>
                    <a href="">
                        <img src="../assets/images/social-links/80x80/Twitter.png" alt="">
                    </a>
                </div>
                <div id="footer-links">
                    <div>
                        <a href="">Help</a>
                    </div>
                    <div>
                        <a href="">Policy</a>
                    </div>
                    <div>
                        <a href="">License</a>
                    </div>
                </div>
            </div>
        </footer>
    </main>
</template>

<script>

    export default {
        data() {
            return {
            }
        }
    }
</script>

<style scoped>
main {
  background-color: #292c33;
}

footer {
    text-align: center;
    width: 100%;
    padding-top: 5px;
    padding-bottom: 5px;
    background-color: #4c4e55;
    box-shadow: 0px 0px 3px 1px black;
}

footer a {
    color: #eee;
    transition: 500ms;
}

footer a:hover {
    color:  rgb(161, 190, 216);
    text-decoration: none;
    transition: 500ms;
}

#footer-container {
    display: flex;
    width: 100%;
    justify-content:space-around;
}

#footer-copyright {
    width: 30%;
    display: flex;
    justify-content: center;
    align-items: center;
}

#footer-socials {
    width: 30%;
    display: flex;
    justify-content: center;
    align-items: center;
}

#footer-socials img {
    height: 35px;
    width: 35px;
    filter: grayscale(70%);
    margin-right: 10px;
    transition: 400ms;
}

#footer-socials img:hover {
    transition: 400ms;
    filter: grayscale(0%)
}

#footer-links {
    width: 30%;
    display: inline-block;
}
</style>