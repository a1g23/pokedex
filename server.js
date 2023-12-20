//dependencies

const express = require("express")
const app = express()
const morgan = require("morgan")
const pokemon = require("./models/pokemon.js")

//middleware

app.use(morgan("dev"))

//routes

//INDUCES

// INDEX - GET

app.get("/", (req, res) => {
    //lets just get the name and image of all of them rendered on the page
    res.send(pokemon)
})













app.listen(3000, console.log("listening on port 3000"))