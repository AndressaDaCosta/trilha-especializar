const express = require('express')

const app = express()

app.listen('3000')

//miiddleware
app.use(express.json())

// app.route('/').post((req,res) => {
//   const {nome, idade} = req.body
//   res.send(`Meu nome é ${nome} tenho ${idade} anos de idade`)
// })

//Rout Params
// app.route('/').get((req,res) => {
//   res.send('iu')
// })

// app.route('/:variavel').get((req,res) => {
//   res.send(req.params.variavel)
// })

// app.route('/identidade/:nome').get((req,res) => {
//   res.send(req.params.nome)
// })

//Query Params
app.route('/').get((req, res) => {
	res.send(req.query.cidade)
})
