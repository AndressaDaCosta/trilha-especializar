//O fetch automaticamente gera toda a estrutura de uma Promise

fetch("https://api.github.com/users/maykbrito").then((res) => {
	res.json().then((data) => {
		fetch(data.repos_url).then((res) =>
			res.json().then((dt) => console.log(dt))
		)
	})
})

//Aqui temos um encadeamento de promessas
//Rodar no codesandbox.io pq lá funciona

fetch("https://api.github.com/users/maykbrito")
	.then((response) => response.json())
	.then((data) => fetch(data.repos_url))
	.then((response) => response.json())
	.then((d) => console.log(d))
	.catch((err) => console.log(err))
