CREATE TABLE timur.task4
(
    ID        int,
    NAME      text,
    DEPT_NAME text,
    PRIMARY KEY ( (ID), DEPT_NAME )
) WITH CLUSTERING ORDER BY (DEPT_NAME ASC);


SELECT * FROM timur.task4 WHERE ID = 100 AND DEPT_NAME = 'Devops';

SELECT * FROM timur.task4 WHERE NAME = 'Timur';
SELECT * FROM timur.task4 WHERE NAME = 'Timur_TEST';


CREATE MATERIALIZED VIEW timur.task4_mv AS
SELECT *
FROM timur.task4
WHERE name IS NOT NULL AND dept_name IS NOT NULL
PRIMARY KEY ( (id), dept_name, name );

SELECT * FROM timur.task4_mv WHERE NAME = 'Timur_TEST';
SELECT * FROM timur.task4_mv WHERE NAME = 'Timur_TEST' AND dept_name = 'Java Developer';
