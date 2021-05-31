update Actor_Table set name = "Feh Montenegro", birth_date = "1929-10-29" where id = "003";
 
select upper(name) from Actor_Table  where name = "Juliana Paes";

update Actor_Table set name = "Juliana Paes"  where name = "JULIANA PAES";

-- Error Code: 1175. You are using safe update mode and you tried to update a table without a 
-- WHERE that uses a KEY column.  To disable safe mode, toggle the option in Preferences 
-- -> SQL Editor and reconnect.

update Actor_Table set name = "Juliana Paes"  where id = "005";

select name from Actor_Table where id = "005";

-- update Actor_Table where id = "005";

select id, name, salary, birth_date,gender from Actor_Table ;

update Actor_Table set name = "Juh Paes", id = "008", salary = 100000 , birth_date = "1979-03-22"  where id = "005";

update Actor_Table set name = "Bananilds" where id = "009";


delete from Actor_Table where name = "Feh Montenegro";

delete from Actor_Table where gender ="male" and salary >100000;

select max(salary) from Actor_Table ;

select min(salary) from Actor_Table where gender = "female";

select count(*) from Actor_Table where gender = "female";

SELECT COUNT(*) FROM Actor_Table WHERE gender = "female";

select sum(salary) from Actor_Table;

SELECT COUNT(*), gender FROM Actor_Table GROUP BY gender;

select id, name from Actor_Table order by name asc;

select id, name from Actor_Table order by salary asc;

select id, name from Actor_Table order by salary asc limit 3;

select avg (salary) from Actor_Table order by gender;







