const express = require("express")
const cookie = require("cookie-parser")

const app = express()

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

app.listen(3000, () => {
    console.log("Server running on port 3000");
    
})