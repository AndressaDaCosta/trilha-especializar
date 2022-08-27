// Nessa aula vamos aprendemos como criar tipagens utilizando objetos no TypeScript.

type Point = {
	x: number;
	y: number;
};

function printCoord(points: Point) {
	console.log(`O eixo x é: ${points.x}`);
	console.log(`O eixo y é: ${points.y}`);
}

printCoord({ x: 101, y: 50 });

// Resultado do log:

// [LOG]: "O eixo x é: 101"
// ------------------------
// [LOG]: "O eixo y é: 50"

type User = {
	name: string;
	email: string;
	age: number;
	// isAdmin: boolean;

	// = ? transforma em Opcional
	isAdmin?: boolean;
};

// const newUser: User;
// newUser.// age,email,isAdmin,name..

let newUser: User = {
	name: 'Rodrigo',
	email: 'rodrigo@email.com',
	age: 18
};
