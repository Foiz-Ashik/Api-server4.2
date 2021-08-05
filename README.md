# 4.3 & 4.3 
## DRAFT
In this project, I have a front end that takes values and adds it to a table 
You then have the option to remove the vaues from the table. Then user should be able to search the record. 

## Tools used:
Node.js
DotEnv
Express
Apache 
MySQL
Javascript
HTML

### Client side: 

1. index.html includes a table with emplid, name with delete and Edit option 


2. index.js should connect to searver side and add data to mysql table and query for any requests made by front end. 

### Server side:

app.js includes all the required modules and connects to db

dbservice.js connects to mysql server and queries for thr required data 

.env file includes DotEnv that will hold sensetive data like passwords, ports and username so it is not visival on the front end. 
