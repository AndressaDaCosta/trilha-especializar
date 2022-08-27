// Compilação

// O TypeScript é sempre compilado para JavaScript, mas normalmente não estamos vendo isso. Observe os exemplos:

// Código em TypeScript:

function showTicket(user: string, ticket: number) {
	console.log(
		`Olá ${user ?? 'Usuário Padrão'}. Seu número de bilhete é: ${ticket}`
	);
}

showTicket('João Inácio', 123);

// Resultado da conversão para JavaScript:

('use strict');
function showTicket(user, ticket) {
	console.log(
		`Olá ${
			user !== null && user !== void 0 ? user : 'Usuário Padrão'
		}. Seu número de bilhete é: ${ticket}`
	);
}
showTicket('João Inácio', 123);
