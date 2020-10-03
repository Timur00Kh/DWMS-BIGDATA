#!/usr/bin/env bash

for j in {1..1000}
do
    s=""
    for i in {1..1000}
    do
      s="$s insert into timur.TEST(id, name) values ($(( i + 10000 * j )),  'name777');"
    done
    cqlsh "$cassandra_ip" -e "$s"
done