//dependencies

const express = require("express")
const morgan = require("morgan")
const originalPokemon = require("./models/pokemon.js")
const methodOverride = require("method-override");

//simpler pokemon

const pokemon = originalPokemon.map((poke) => {
    return {
        name: poke.name,
        type: poke.type,
        img: poke.img,
        hp: poke.stats.hp,
        attack: poke.stats.attack,
        defense: poke.stats.defense
    }
})

//console.log(pokemon)
// app objects

const app = express()

//middleware

app.use(morgan("dev"))
app.use(express.urlencoded({extended: true})) // body parser
app.use((req, res, next) => {
    console.log("before method override", req.method)
    next()
})
app.use(methodOverride("_method"));
app.use((req, res, next) => {
    console.log("after method override", req.method)
    next()
})
app.use(express.static("public"))



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

app.delete("/pokemon/:id", (req, res) => {
    const deletePoke = req.params.id
    pokemon.splice(deletePoke, 1)
    res.redirect("/pokemon")
})


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
    // manipulate "type" data to be an array
    const typeStr = req.body.type
    typeArr = typeStr.split(",")
    const body = {
        name: req.body.name,
        type: typeArr,
        img: req.body.img,
        hp: req.body.hp,
        attack: req.body.attack,
        defense: req.body.defense,
    }
    
    
    



    //push to the pokemon database
    pokemon.push(body)
    //redirect to pokemon site
    pokemon.reverse()
    res.redirect("/pokemon")
})

// UPDATE - PUT - update the database with info from the edit page

app.put("/pokemon/:id", (req, res) => {
    // variable to be the id
    const id = req.params.id
    // manipulate "type" data to be an array
    const typeStr = req.body.type
    typeArr = typeStr.split(",")
    // create the body of the req
    const updatedPoke = {
        name: req.body.name,
        type: typeArr,
        img: req.body.img,
        hp: req.body.hp,
        attack: req.body.attack,
        defense: req.body.defense,
    }



    
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