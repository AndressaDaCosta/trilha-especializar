import React, { useState, useEffect } from 'react';

import './styles.css';

import { Card } from '../../components/Card';

export function Home() {
	//estado [aonde vai guardar esse estado, e a função]useState("Valor inicial")
	const [studentName, setstudentName] = useState('');
	const [students, setStudents] = useState([]);
	const [user, setUser] = useState([{ name: '', avatar: '' }]);

	function handleAddStudent() {
		const newStudent = {
			name: studentName,
			time: new Date().toLocaleTimeString('pt-BR', {
				hour: '2-digit',
				minute: '2-digit',
				second: '2-digit'
			})
		};

		setStudents((prevState) => [...prevState, newStudent]);
	}

	useEffect(() => {
		fetch('https://api.github.com/users/AndressaDaCosta')
			.then((response) => response.json())
			.then((data) => {
				setUser({
					name: data.name,
					avatar: data.avatar_url
				});
			});
	}, []);

	return (
		<div className="container">
			<header>
				<h1>Lista de Presença</h1>
				<div>
					<strong>{user.name}</strong>
					<img
						src={user.avatar}
						alt="Foto de Perfil"
					/>
				</div>
			</header>

			<input
				type="text"
				placeholder="Digite o nome..."
				onChange={(e) => setstudentName(e.target.value)}
			/>

			<button
				type="button"
				onClick={handleAddStudent}>
				Adicionar
			</button>
			{students.map((student) => (
				<Card
					key={student.time}
					name={student.name}
					time={student.time}
				/>
			))}
		</div>
	);
}

// export default Home;

// let studentName = '';

// function handleNameChange(name) {
// 	studentName = name;

// onChange={(e) => handleNameChange(e.target.value)}
// }

{
	/* 
			<Card
				name="Rodrigo"
				time="10:55:25"
			/>
			<Card
				name="João"
				time="11:00:10"
			/>
			<Card
				name="Andressa"
				time="12:21:03"
			/> */
}

// useEffect(() => {
// 	//corpo do useEffect
// 	// é automatico -> console.log('useEffect foi chamado!');
// 	// [se tiver um estado a cada auteração do estado o useEffect sera executado de novo]
// }, [students, setstudentName]);

// se precisar criar um useEffect async, criar uma funcao async dentro do useEffect

// useEffect(() => {
// 	async function fetchData() {
// 		const response = await fetch("https://api.github.com/users/birobirobiro");
// 		const data = await response.json();
// 		console.log("DADOS =>", data);

// 		setUser({
// 			name: data.name,
// 			avatar: data.avatar_url,
// 		});
// 	}

// 	fetchData();
// }, []);
