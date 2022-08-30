## JOIN

```
SELECT * FROM funcionarios
JOIN departamentos
ON departamentos.id_dept = funcionarios.id_departamento
```

## JOIN com WHERE

```
SELECT * FROM funcionarios
JOIN departamentos
ON departamentos.id_dept = funcionarios.id_departamento
WHERE departamentos.id_dept = 2

```

## JOIN especificando campos

```
SELECT funcionarios.nome, funcionarios.cpf, departamentos.descricao
FROM funcionarios
JOIN departamentos
ON funcionarios.id_departamento = departamentos.id_dept

```

## Alias

```
SELECT func.nome as "Nome", func.cpf as "CPF", dept.descricao as "Departamento"
FROM funcionarios as func
JOIN departamentos as dept
ON func.id_departamento = dept.id_dept

```

## LEFT OUTER JOIN

```
SELECT * FROM funcionarios
LEFT OUTER JOIN departamentos
ON funcionarios.id_departamento = departamentos.id_dept

SELECT * FROM funcionarios
LEFT OUTER JOIN departamentos
ON funcionarios.id_departamento = departamentos.id_dept

```
