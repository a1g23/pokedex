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
    //lets render the object over to index ejs where we will loop
    res.render("index.ejs", {pokemon})
})













app.listen(3000, console.log("listening on port 3000"))