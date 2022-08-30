## ORDER BY

```
SELECT * FROM professor
ORDER BY materia

decrescente:
SELECT * FROM professor
ORDER BY nome DESC
```

## LIMIT

```
SELECT * FROM aluno LIMIT 2

```

## OFFSET

```
<!-- ignora os primeiros que encontrar -->

SELECT * FROm funcionarios
LIMIT 4 OFFSET 2

```

## COUNT

```
SELECT COUNT(nome) FROM funcionarios

```

## GROUP BY

```
SELECT id_departamento, COUNT(id_departamento)
FROM funcionarios

```

## JOIN, GROUP BY e COUNT juntos

```
SELECT departamentos.descricao, count(id_departamento)
FROM funcionarios
JOIN departamentos
ON funcionarios.id_departamento = departamentos.id_dept
GROUP BY departamentos.id_dept

```

## HAVING

```

SELECT departamentos.descricao, count(funcionarios.id_departamento)
FROM funcionarios
JOIN departamentos
ON funcionarios.id_departamento = departamentos.id_dept
GROUP BY departamentos.id_dept
<!-- HAVING count(funcionarios.id_departamento) >= 2 -->
HAVING count(funcionarios.id_departamento) IN (2, 4)


```
