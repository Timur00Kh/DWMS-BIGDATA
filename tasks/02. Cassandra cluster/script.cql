
CREATE KEYSPACE timur
WITH replication = {'class': 'NetworkTopologyStrategy', 'dc1' : 1};

CREATE TABLE timur.TEST (
    ID int PRIMARY KEY, NAME text
);

