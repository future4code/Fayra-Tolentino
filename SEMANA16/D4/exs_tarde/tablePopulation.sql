select * from Filmes;

ALTER TABLE Filmes DROP rating;

delete from Filmes where id = "003";

INSERT INTO Filmes(id, movieName, sinopse,releaseDate)
VALUES(
 "002", 
  "Tropa de Elite 1",
  "Nascimento, capitão da Tropa de Elite do Rio de Janeiro, é designado para chefiar uma das equipes que tem como missão apaziguar o Morro do Turano",
  "2007-10-05"
);

INSERT INTO Filmes(id, movieName, sinopse,releaseDate)
VALUES(
 "004", 
  "Amores possíveis",
  "Carlos e Júlia combinam de ir ao cinema, mas ela acaba não aparecendo.",
  "2001-03-30"
);

INSERT INTO Filmes(id, movieName, sinopse,releaseDate)
VALUES(
 "006", 
  "Amor por acaso",
  "Ana Vilanova trabalha como vendedora. Após descobrir que herdou uma propriedade em uma região vinícola da California, ela parte para a pequena cidade de Webster.",
  "2010-03-30"
);