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



// SHOW - GET

app.get("/:id", (req, res) => {
    // variable to be the id
    const id = req.params.id
    // variable to represent the single index of pokempn
    const poke = pokemon[id]
    res.render("show.ejs", {poke, id})
})









app.listen(3000, console.log("listening on port 3000"))