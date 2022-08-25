const express = require("express")

const app = express()

app.listen("3000")

// middlewares
app.use(express.json()) // usa express nao inicializado em json

let author = "Andressa"

app.route("/").get((req, res) => res.send(author))

app.route("/").put((req, res) => {
	author = req.body.author
	res.send(author)
})

// put = editar
