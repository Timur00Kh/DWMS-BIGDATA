#!/usr/bin/env bash

i=0
while :
do
  cqlsh 172.31.77.183 -e "insert into timur.TEST(id, name) values ($(( i)),  'name777');";
  i=$i+1;
done