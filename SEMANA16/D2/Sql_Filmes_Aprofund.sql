describe Filmes;

alter table Filmes add column playing_limit_date date ;

alter table Filmes drop column playing_limit_date ;

alter table Filmes change rating rating int;

alter table Filmes change releaseDate CURDATE() where id = "01";

select id, name from Filmes;

alter table Filmes change moveName movieName varchar(100);

alter table Filmes change releaseDate CURDATE() where id = "01";



