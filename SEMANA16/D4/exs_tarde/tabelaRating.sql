show tables;
describe Filmes;
select id,movieName from Filmes;

CREATE TABLE Rating (
		id VARCHAR(255) PRIMARY KEY,
    comment TEXT NOT NULL,
		rate FLOAT NOT NULL,
    filmes_id VARCHAR(255),
    FOREIGN KEY (filmes_id) REFERENCES Filmes(id)
);

INSERT INTO Rating(id, comment, rate,filmes_id)
VALUES(
 "005", 
  "Filme sensacional. O melhor já visto!",
  10,
  "004"
);

select * from Rating;

INSERT INTO Rating(id, comment, rate,filmes_id)
VALUES(
 "002", 
  "Bom, mas nem tanto",
  6.5,
  "003"
);

select * from Rating;

INSERT INTO Rating(id, comment, rate,filmes_id)
VALUES(
 "003", 
  "Muito bom, mercia mais de 10!",
  10,
  "005"
);

select * from Rating;

describe Rating;