const express = require("express")
const cookie = require("cookie-parser") //small pieces of data that browser stores like login,shopping cart
const session = require("express-session")
const jwt = require('jsonwebtoken')

const app = express()

app.use(express.json()) //parses incoming json data into js objects

app.use(session({
    secret: "1234",
    saveUninitialized:false,
    resave:false
}))

app.get('/', (req,res) => {
    res.send("HELLO FROM EXPRESS")
})

//create a cookie
app.get('/set-cookie', (req,res) => {
    res.cookie("username", "Soham")
    res.send("Cookie created")
})

//access cookie
app.get('/get-cookie', (req,res) => {
    res.send(res.cookie.username)
})

//delete cookie
app.get('/delete-cookie', (req,res) => {
    res.clearCookie("username")
    res.send("Cookie-cleared")
})

app.get('/create-session', (req,res) => {
    req.session.username = "Soham",
    res.send("Session created")
})

app.get('/get-session', (req,res) => {
    res.send(req.session.username)
})

app.get('/delete-session', (req,res) => {
    res.session.destroy((err) => {
        if(err){
            res.send("Cannot destroy sessions")
        }
        else{
            res.send("Session destroyed")
        }
    })
})

//assign jwt
app.use('/assign-token', (req,res) => {
    const token = jwt.sign(
        {
            name: "Soham ghadge",
            age: "18"
        },
        "1234"
    )

    res.send(token)
})

app.get("/verify-token", (req, res) => {
    const token = req.query.token;

    try {
        const decoded = jwt.verify(token, "1234");

        res.json(decoded);
    } catch (error) {
        res.send("Invalid token");
    }
});

//read post req and respond
app.post('/get-data', (req,res) => {
    const data = req.body

    res.json({
        message: "Data recived succesfully",
        revivedData: data 
    })
})

//create server
app.listen(3000, () => {
    console.log("Server running on port 3000");
    
})