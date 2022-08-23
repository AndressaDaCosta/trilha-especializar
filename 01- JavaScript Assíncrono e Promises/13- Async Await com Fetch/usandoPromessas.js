import fetch from "node-fetch"

async function start() {
	const response = await fetch("https://api.github.com/users/maykbrito")
	const user = await response.json()
	const reposResponse = await fetch(user.repos_url)
	const repos = await reposResponse.json()
	console.log(repos)
}

start()

//A ideia em usar await é transformar um encadeamento
//em algo síncrono

//tambem podemos usar try catch

async function start() {
	const url = "https://api.github.com/users/maykbrito"
	const user = await fetch(url).then((r) => r.json())
	const userRepos = await fetch(user.repos_url).then((r) => r.json())
	console.log(repos)
}

start().catch((e) => console.log(e))
