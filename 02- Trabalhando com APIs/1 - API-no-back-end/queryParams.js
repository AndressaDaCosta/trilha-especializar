// QUERY PARAMS

const express = require("express")

const app = express()

app.listen("3000")

// app.route("/").get((req, res) => res.send(req.query.nome))
// insomnia: localhost:3000?nome=jakeline&cidade=São paulo

// app.route("/about/user").get((req, res) => res.send(req.query))
// insomnia: localhost:3000/anout/user?name=jakelyne / localhost:3000/anout/user?id=85938493

app.route("/about/user").get((req, res) => res.send(req.query.id))
// insomnia: localhost:3000/about/user?name=jakeliny&id=99882382&cidade=sao paulo&livros=neromancer
