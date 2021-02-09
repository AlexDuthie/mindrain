const express = require('express'); //lets us access express
const User = require('./models/User');
const app = express(); //initialise app as express object
const uri = "mongodb+srv://root:ySSHoC0jIgPbUg7X@back-end-marketplace.9n0kw.mongodb.net/test"; //link to dev db please move to dotenv before prod
const session = require('express-session'); //allows session persistance
const mongoose = require('mongoose');
mongoose.connect(uri, { useUnifiedTopology: true, useNewUrlParser: true });
const bodyParser = require('body-parser'); //lets us access body parser (req.body object)

app.use(session({ secret: "98h12s9h1hZZzZZZz2S681g267128JSd27h68271g67g2s6G12s", resave: false, saveUninitialized: true })); //put in ENV before PROD


app.use(function(req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Credentials', 'true');
    res.header('Access-Control-Allow-Methods', 'GET,HEAD,PUT,PATCH,POST,DELETE');
    res.header('Access-Control-Expose-Headers', 'Content-Length');
    res.header('Access-Control-Allow-Headers', 'Accept, Authorization, Content-Type, X-Requested-With, Range');
    if (req.method === 'OPTIONS') {
        return res.sendStatus(200);
    } else {
        return next();
    }
});



app.use(bodyParser.json());

app.post('/register', function(req, res) {
    const username = req.body.username;
    const password = req.body.password;
    const email = req.body.email;
    const firstname = req.body.firstname;
    const surname = req.body.surname;
    const birthdate = req.body.birthdate;
    const telnumber = req.body.telnumber;

    const newuser = new User();
    newuser.username = username;
    newuser.password = password;
    newuser.email = email;
    newuser.firstname = firstname;
    newuser.surname = surname;
    newuser.birthdate = birthdate;
    newuser.telnumber = telnumber;
    newuser.save(function(err, savedUser) {
        if (err) {
            console.log(err);
            return res.status(500).send();
        }
        console.log(`A new user has registered! Welcome ${username}`)
        console.log(`pw: ${password}`)
        console.log(`em: ${email}`)
        console.log(`fn: ${firstname}`)
        console.log(`ln: ${surname}`)
        console.log(`bd: ${birthdate}`)
        console.log(`tel: ${telnumber}`)
        console.log('✅ operation complete')
        return res.status(200).send();
    })
});

app.post('/login', function(req, res) {
    const username = req.body.username;
    const password = req.body.password;

    User.findOne({
        username: username
    }, function(err, user) {
        if (err) {
            console.log(err);
            console.log('🛑 operation failed');
            return res.status(500).send();
        }
        if (!user) {
            console.log(`User: ${username} not found`)
            console.log('🛑 operation failed');
            return res.status(401).send();
        }

        // take user object, run comparePassword which compares password provided with encrypted one on db
        user.comparePassword(password, function(err, isMatch) {
            if (isMatch && isMatch == true) {
                req.session.user = user; //sets current session :D
                console.log(`${username} logged in!`)
                console.log('✅ operation complete')
                return res.status(200).send();
            } else {
                console.log(`User: ${username} not found or Password incorrect`)
                console.log('🛑 operation failed');
                return res.status(401).send();
            }
        });

    })
});

app.get('/dashboard', function(req, res) {
    if (!req.session.user) {
        console.log("Cannot visit /dashboard! You aren't logged in, this endpoint is protected.")
        console.log('🛑 operation failed');
        return res.status(401).send();
    }
    console.log('Welcome to the secure dashboard! Only visable to logged in users!');
    console.log('✅ operation complete');
    return res.send("Welcome to the secure dashboard! only visable to logged in users!");
})

app.get('/logout', function(req, res) {
    console.log('User was successfully logged out')
    console.log('✅ operation complete');
    req.session.destroy(); // end session
    return res.status(200).send();
})







app.listen(4000, function() { //hosts server on localhost:4000
    console.log('✅Server is live at: 127.0.0.1:4000')
    console.log('Do a POST request to localhost:4000/register with "username", "password" & "email" fields.')
    console.log('Or a POST request to localhost:4000/login with "username" & "password" fields.')
    console.log('Finally test logging in by GET requesting protected endpoint: /dashboard')
    console.log('Log out by GET requesting /logout')
    console.log('✅ awaiting operation')
})

// })