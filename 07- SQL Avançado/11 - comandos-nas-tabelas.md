## CREATE TABLE

```
CREATE TABLE alunos (
  matricula INTEGER PRIMARY KEY AUTOINCREMENT,
  nome TEXT,
  cpf INTEGER UNIQUE,
  responsavel TEXT
  )


CREATE TABLE professores (
  id_professor INTEGER PRIMARY KEY AUTOINCREMENT,
  nome TEXT,
  cpf INTEGER UNIQUE,
  materia TEXT
  )


CREATE TABLE aulas (
	id-professor INTEGER,
  matricula INTEGER,
  FOREIGN KEY(id_professor) REFERENCES professores(id_professor),
  FOREIGN KEY(matricula) REFERENCES alunos(matricula)
  )



```

## ALTER TABLE

```

ALTER TABLE aluno RENAME TO alunos

ALTER TABLE professor RENAME TO professores

ALTER TABLE aulas RENAME COLUMN id_aluno TO matricula_aluno

```

## DROP TABLE

```
<!-- apagar tabelas 🚨 -->
DROP TABLE alunos

DROP TABLE aulas

DROP TABLE professores


```
