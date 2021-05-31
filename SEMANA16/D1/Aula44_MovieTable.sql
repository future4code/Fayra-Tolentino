CREATE TABLE Filmes(
id varchar(255) primary key,
moveName varchar(255) not null, 
sinopse varchar(255) not null,
releaseDate date not null, 
rating float not null
);