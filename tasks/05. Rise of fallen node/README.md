
### 1. Create new table

Создать новую таблицу

```CQL
CREATE TABLE timur.task5
(
    ID   int PRIMARY KEY,
    NAME text
);
```

### 2. Endless insert cycle
Бесконечный цикл

+ [NodeJS script](insert.js)

Спустя 5 минут было выполнено 333391 запросов:
![](images/5.png)

### 3. Fall of the node

```bash
ps axu | grep cassandra
sudo kill -9 <pid>
nodetool status
```

![](images/1.png)

На упавшей ноде упал график сети процессора и освободилать оперативная память:
![](images/6.png)

##### Errors
Из-за настроек репликации кассандры она не смогла принимать больше данных
![](images/error.png)

### 4. Rise of the node

```bash
sudo systemctl restart cassandra
```

![](images/2.png)

Нагрузка на ноду восстановилась:
![](images/7.png)
![](images/8.png)



