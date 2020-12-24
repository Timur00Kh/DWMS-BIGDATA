
# 06. Load Balancer

+ Используя NGINX / Apache как LoadBalancer (LB) на 4 EC2 настроить распределение входящего трафика на 3 существующих узла EC2 Cassandra. Другими словами будет один вход для подключения для внешнего слоя / бэка / фронта 
+ Проверить подключение через LB используя DataGrip
+ Создать новую таблицу и выполнить вставку 10 000 строк через endpoint LB используя EC2 
+ Проанализировать статистику / логи входящего трафика через LB  


### 1. Nginx load balancer config

Создать новую таблицу

```cql
CREATE TABLE timur.task6
(
    ID   int PRIMARY KEY,
    NAME text
);
```
#### Nginx config

+ [lb_cassandra.conf](./lb_cassandra.conf)

### 2. Data Grip connection

![](./images/1.png)

### 3. Create a table and insert 10k rows

Баш скрипт, который создает новый коннекшен на каждую вставку:
+ [script.sh](./script.sh)

Посчитал кол-во запросов на ноды с помощью логов Nginx:
![](./images/2.png)

График нагрузки из Zabbix:
![](./images/3.png)
