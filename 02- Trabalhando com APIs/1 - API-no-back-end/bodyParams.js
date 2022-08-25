// Body Params

const express = require("express")

const app = express()

app.listen("3000")

// app.route("/").get((req, res) => res.send("olá"))

//middleware
app.use(express.json())

/*
app.route("/").post((req, res) => {
	// console.log(req.body)
	res.send(req.body)
	// res.send(req.body.nome)
})
*/

app.route("/").post((req, res) => {
	const { nome, cidade, livros_favoritos } = req.body
	res.send(`meu nome é ${nome} e minha cidade é ${cidade}`)
	// res.send(livros_favoritos)
})

// ${nome} template string
