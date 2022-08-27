// A intersecção de tipos como o próprio nome já diz, podemos unir dois tipos e usar as suas propriedades dentro de um objeto.

type User = {
	id: number;
	name: string;
};

type Char = {
	nickname: string;
	level: number;
};

// unindo Tipos
type PlayerInfo = User & Char;

let info: PlayerInfo = {
	id: 1,
	name: 'Rodrigo Gonçalves',
	nickname: 'rodrigog',
	level: 50
};
