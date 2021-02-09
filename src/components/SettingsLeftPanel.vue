<template>
    <main>
        <div id="left-panel">
            <div id="menu-icon">
                <a href="">&#9776;</a>
            </div>
            <div id="avatar-user">
                <img src="../assets/images/avatars/avatar_unknown.jpg" id="avatar" alt="avatar">
                <p>User</p>
            </div>
            <div id="tabs">
                <div>
                    <a href=""><u>My Account</u></a>
                </div>
                <div>
                    <a href="">Security</a>
                </div>
                <div>
                    <a href="">Billing</a>
                </div>
                <div>
                    <a href="">Connections</a>
                </div>
            </div>
            <hr>
            <div id="tabs">
                <div>
                    <a href="">Privacy</a>
                </div>
                <div>
                    <a href="">Block List</a>
                </div>
                <div>
                    <a href="">Language</a>
                </div>
            </div>
            <hr>
            <div id="tabs">
                <div>
                    <a href="">User Feedback</a>
                </div>
                <div>
                    <a href="">Contact us</a>
                </div>
                <div>
                    <a href="">User Agreement</a>
                </div>
            </div>
        </div>
    </main>
</template>

<script>
    export default {
        name: 'settings-left-panel'
    }
</script>

<style scoped>
#left-panel {
    height: 80vh;
    margin-top: 4vh;
    margin-left: 20px;
    border-radius: 4px 4px;
    width: 200px;
    background-color: #1d1f24;
    box-shadow: 0px 0px 2px white;
}

hr {
    background-color: white;
    box-shadow: 0px 0px 3px 1px white;
    width: 90%;
}

#menu-icon {
    text-align: right;
}

#menu-icon a {
    color: white;
    text-decoration: none;
    cursor: pointer;
    font-size: 20px;
    margin: 3px;
}

#menu-icon a:hover {
    color: rgb(152, 209, 214);
}

#avatar-user {
    display: flex;
    align-items: center;
}

#avatar {
    height: 35px;
    width: 35px;
    margin: 5px;
    border-radius: 50%;
}

#avatar-user p {
    font-family: ethnocentric;
    text-decoration: underline;
    margin-left: 3px;
}

#tabs {
    width: 70%;
    margin-left: 15%;
    margin-top: 10px;
    text-align: left;
    font-size: 17px;
}

#tabs div {
    margin-top: 20px;
}

#tabs a {
    color: white;
    transition: 300ms;
    text-decoration: none;
}

#tabs a:hover {
    color: rgb(164, 195, 207);
    transition: 300ms;
}
</style>