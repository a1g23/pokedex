//dependencies

const express = require("express")
const app = express()
const morgan = require("morgan")
const pokemon = require("./models/pokemon.js")

//middleware

app.use(morgan("dev"))
app.use(express.urlencoded({extended: true})) // body parser
const methodOverride = require("method-override");
app.use(methodOverride("_method"));

//routes

//INDUCES

// INDEX - GET

app.get("/pokemon", (req, res) => {
    //lets render the object over to index ejs where we will loop
    res.render("index.ejs", {pokemon})
})

// NEW - GET - create form to make a new Pokemon

app.get("/pokemon/new", (req, res) => {
    
    //render to a new.ejs page which has a form
    res.render("new.ejs")
})


// DELETE - DELETE - option to delete a Pokemon

app.delete("/pokemon/:id",)


// EDIT - GET - create form to edit a certain pokemon

app.get("/pokemon/:id/edit", (req, res) => {
    // variable to be the id
    const id = req.params.id
    // variable to represent the single index of pokempn
    const poke = pokemon[id]
    //render to a update.ejs page which has a form
    res.render("edit.ejs", {poke, id})
})


// CREATE - POST

app.post("/pokemon", (req, res) => {
    // create the body of the req
    const body = req.body
    // push to the pokemon database
    pokemon.push(body)
    //redirect to pokemon site
    pokemon.reverse()
    res.redirect("/pokemon")
})

// UPDATE - PUT - update the database with info from the edit page

app.put("/pokemon/:id", (req, res) => {
    // variable to be the id
    const id = req.params.id
    // create the body of the req
    const updatedPoke = req.body
    
    // update with the new information which is in the body
    pokemon[id] = updatedPoke
    // redirect back to index
    res.redirect("/pokemon")
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