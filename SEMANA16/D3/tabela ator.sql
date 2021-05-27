INSERT INTO Actor_Table (id, name, salary, birth_date, gender)
VALUES(
 "007", 
  "Renata Sorrah",
  408000,
  "1947-02-21", 
  "female"
);

select name, id,gender,salary from Actor_Table;

update Actor_Table set gender = female where id = "002"