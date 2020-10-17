CREATE TABLE timur.task4
(
    ID        int,
    NAME      text,
    DEPT_NAME text,
    PRIMARY KEY ( (ID), DEPT_NAME )
) WITH CLUSTERING ORDER BY (DEPT_NAME ASC);


SELECT * FROM timur.task4 WHERE ID = 100 AND DEPT_NAME = 'HR';

SELECT * FROM timur.task4 WHERE NAME = 'Ivan';


CREATE MATERIALIZED VIEW timur.task4_mv AS
SELECT *
FROM timur.task4
WHERE name IS NOT NULL
PRIMARY KEY ( (id), dept_name, name );

SELECT * FROM timur.task4_mv WHERE NAME = 'Ivan';
SELECT * FROM timur.task4_mv WHERE NAME = 'Ivan' AND dept_name = 'HR';
