//dependencies

const express = require("express")
const app = express()
const morgan = require("morgan")
const pokemon = require("./models/pokemon.js")

//middleware

app.use(morgan("dev"))
app.use(express.urlencoded({extended: true})) // body parser

//routes

//INDUCES

// INDEX - GET

app.get("/pokemon", (req, res) => {
    //lets render the object over to index ejs where we will loop
    res.render("index.ejs", {pokemon})
})

// NEW - GET - create form to make a new Pokemon

app.get("/pokemon/new", (req, res) => {
    //create the body on req
    const body = req.body
    //render to a new.ejs page which has a form
    res.render("new.ejs")
})

// SHOW - GET

app.get("/pokemon/:id", (req, res) => {
    // variable to be the id
    const id = req.params.id
    // variable to represent the single index of pokempn
    const poke = pokemon[id]
    res.render("show.ejs", {poke, id})
})









app.listen(3000, console.log("listening on port 3000"))