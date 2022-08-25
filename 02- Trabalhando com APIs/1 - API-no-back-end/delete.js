// DELETE

const { response } = require("express")
const express = require("express")

const app = express()

app.listen("3000")

let author = "Andressa"

// app.route("/").delete((req, res) => res.send("apagado"))

app.route("/:identificador").delete((req, res) => {
	// author = ""
	// res.send('apagado')
	res.send(req.params.identificador)
})
