
/*
const express = require("express")

const app = express()

app.listen("3000")

app.route("/").get((req, res) => res.send(req.query.name))

app.route("/").post((req, res) => res.send(req.body))

app.route("/:parametro").get((req, res) => res.send(req.params.parametro))


// localhost:3000/?name=jakelyny / localhost:3000/ola alunos

*/

// Body Params

const express = require("express")

const app = express()

app.listen("3000")

app.route("/").get((req, res) => res.send("olá"))
