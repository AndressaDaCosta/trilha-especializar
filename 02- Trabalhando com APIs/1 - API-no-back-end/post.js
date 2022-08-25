// POST

const { response } = require("express")
const express = require("express")

const app = express()

app.listen("3000")

// middlewares
app.use(express.json())

// app.route("/").post((req, res) => console.log(req.body))

app.route("/").post((req, res) => res.send(req.body))
