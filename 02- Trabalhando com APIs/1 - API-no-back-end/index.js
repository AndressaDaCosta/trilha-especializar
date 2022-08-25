const express = require('express')

const app = express()

app.listen('3000')

//miiddleware
app.use(express.json())

let author = "Andressa"


//GET pegar conteudo
// app.route('/').get((req,res) => res.send(author))

//POST add conteudo
// app.route('/').post((req,res) => {
//   author = req.body
//   res.send(author)
// })

//PUT att conteudo
// app.route('/').put((req,res) => {
//   author = req.body
//   res.send(author)
// })

//DELETE conteudo
// app.route('/:identificador').delete((req,res) => {
//   res.send(req.params.identificador)
// })
