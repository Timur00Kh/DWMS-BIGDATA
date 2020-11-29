#!/usr/bin/env bash

for i in {1..10000}
do
  s="insert into timur.task6(id, name) values ($(( i )),  'name777');"
  cqlsh -e "$s"
done