//dependencies

const express = require("express")
const app = express()
const morgan = require("morgan")
const pokemon = require("./models/pokemon.js")

//middleware

app.use(morgan("dev"))

//routes















app.listen(3000, console.log("listening on port 3000"))