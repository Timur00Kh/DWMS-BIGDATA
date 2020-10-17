
### 1. Create new table

Создать новую таблицу состоящую из 3 столбцов (ID, DEPT_NAME, NAME) с первичным ключом ( (ID), DEPT_NAME ) , где ID - ключ распределения, DEPT_NAME - ключ сортировки

```CQL
CREATE TABLE timur.task4
(
    ID        int,
    NAME      text,
    DEPT_NAME text,
    PRIMARY KEY ( (ID), DEPT_NAME )
) WITH CLUSTERING ORDER BY (DEPT_NAME ASC);
```

### 2. Fill table with 1000000 random rows
Заполнить таблицу произвольными данными в порядке 1 000 000 строк

+ [NodeJS script](insert.js)

