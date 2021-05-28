CREATE TABLE TodoListUser (
	id int NOT NULL AUTO_INCREMENT PRIMARY KEY , 
    name VARCHAR(255) NULL, 
    nickname VARCHAR(255) UNIQUE NOT NULL, 
    email VARCHAR(255) UNIQUE NOT NULL
);

insert into TodoListUser (name,nickname,email)
VALUES(
 "Seley Booth", 
  "Booth",
  "booth@fbi.com"
);

select * from TodoListUser;