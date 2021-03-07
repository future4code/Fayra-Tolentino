//Exercício 1
// Escreva uma função que recebe um array como parâmetro e retorne este array invertido.

const array = [0, 8, 23, 16, 10, 15, 41, 12, 13];
function inverteArray(array) {
  //  sua lógica aqui
   array.reverse()
   return array
};

//Exercício 2
// Escreva uma função que recebe um array de números e retorna um array com os números pares elevados a 2.

function retornaNumerosParesElevadosADois (array) {
   // implemente sua lógica aqui
   if (array%2 == 0){
      Math.pow(array, 2)
   }return array
   }

//Exercício 3
// Escreva uma função que receba um array de números e retorne um novo array com apenas os números pares desse array de entrada.
function retornaNumerosPares (array) {
   // implemente sua lógica aqui
}

//Exercício 4
// Escreva uma função que receba um array de números e retorne o maior número dele.
function retornaMaiorNumero(array) {
   // implemente sua lógica aqui
}

//Exercício 5
// Escreva uma função que recebe um array como parâmetro e retorna a quantidade de elementos que há nele.
function retornaQuantidadeElementos (array) {
   // implemente sua lógica aqui
   return array.length;
}

//Exercício 6

function retornaExpressoesBooleanas() {
   // implemente sua lógica aqui
}

//Exercício 7
// Escreva uma função que, recebendo um número N como parâmetro, retorne os N primeiros números pares 
// (por exemplo, se N for 3, você deve imprimir 0, 2 e 4; se N for 5, deve retornar 0, 2, 4, 6 e 8). 
   function retornaNNumerosPares(n) {
     // implemente sua lógica aqui 
   }

// Exercício 8
// Vocês lembram de trigonometria? (Oh, não, trigonometria). Relaxem. O exercício é simples, mas mexe com isso. 
// Veja bem: quando nos ensinam triângulos (uma figura de três lados), nós aprendemos como classifica-los dependendo do 
// tamanho de seus lados. Se um triângulo possuir os três lados iguais, ele é chamado de "Equilátero". Se possuir, dois 
// (e somente 2) lados iguais, diz-se que ele é "Isósceles". Se os três lados tiverem medidas diferentes, ele é "Escaleno". 
// Faça uma função que receba como parâmetro os tamanhos dos três lados do triângulo: a, b, c e retorne se ele é Equilátero, 
// Isósceles ou Escaleno.

function checaTriangulo(a, b, c) {
  // implemente sua lógica aqui
   if( a=== b && a===c && b===c){
      return 'Equilátero'
   }else if ( a=== b || a===c || c===b){
      return 'Isósceles'
   }else{
   return 'Escaleno'
   }
}

// Exercício 9
// Escreva uma função que, dado dois números, retorne um objeto indicando:
// i. qual é o maior,
// ii. determine se o maior é divisível pelo menor (use o operador `%`) e
// iii. determine a diferença entre eles (o resultado deve ser um **número positivo** sempre)
function comparaDoisNumeros(num1, num2) {
   // implemente sua lógica aqui
}

// Exercício 10
// Escreva uma função que receba um array de números e retorne um novo array com apenas 2 valores (NESTA ORDEM)
// : o segundo maior e o segundo menor número do array original. (Desafio: tentem fazer sem usar função de ordenação de array.)
function segundoMaiorEMenor(array) {
   // implemente sua lógica aqui
}

//Exercício 11
// Escreva uma função que recebe um array e retorne um array com eles em ordem crescente. 
// (**Desafio**: tentem fazer sem usar função de ordenação de array.)
function ordenaArray(array) {
   // implemente sua lógica aqui
}

// // Exercício 12
// Crie uma função que retorne um objeto que representa o filme favorito do Astrodev. Ele deve ter as propriedades: 
// `nome`, `ano`, `diretor` e `atores`, sendo que filme e diretor devem ser `strings`, ano deve ser um `number` e atores deve ser um 
// `array de strings`. As informações (que são os valores das propriedades) do filme são:

// nome: O Diabo Veste Prada
// ano: 2006
// diretor: David Frankel
// atores: Meryl Streep, Anne Hathaway, Emily Blunt, Stanley Tucci

// (⚠️ obs: para os testes funcionarem, as propriedades do objeto devem possuir esses exatos nomes → `nome`, `ano`, `diretor`, `atores`):

function filmeFavorito() {
   // implemente sua lógica aqui
}

// Exercício 13
// Crie uma função que retorne a seguinte string, baseada nos valores do objeto que representa o filme favorito do Astrodev 
// no penúltimo exercício feito:Venha assistir ao filme NOME DO FILME, de ANO, dirigido por DIRETOR(A) e estrelado por ATOR 1,
//  ATRIZ 2, ATOR n. A string deve ser impressa acessando os valores do objeto.

function imprimeChamada() {
   // implemente sua lógica aqui
}

// Exercício 14
// Crie uma função chamada `criaRetangulo` que recebe como parâmetros dois lados (`lado1` e `lado2`) 
// e retorna um objeto com 4 informações: largura (`lado1`), altura (`lado2`), perímetro (`2 * (lado1 + lado2)`) e área (`lado1 * lado2`). 
// ⚠️ obs: para os testes funcionarem, as propriedades do objeto devem possuir esses exatos nomes →  **`largura`, `altura`, 
// `perimetro` e `area`**. (perimetro e area não devem ter acento mesmo!)

function criaRetangulo(lado1, lado2) {
   // implemente sua lógica aqui
}

// Exercício 15
// Considere o seguinte objeto: 
// const pessoa = {
// 	nome: "Astrodev",
// 	idade: 25,
// 	email: "astrodev@future4.com.br",
// 	endereco: "Rua do Futuro, 4"
// // }
// Crie uma função que recebe um objeto nesse **formato***, com as propriedades de nome, idade, email e endereco 
// e retorne um novo objeto com as mesmas propriedades, mas com a string ANÔNIMO no lugar do nome. 
// *Atenção! O objeto acima é apenas para demonstrar o formato de um objeto a ser recebido; isso não quer dizer que a função 
// vai receber esse exato objeto, com essas exatas informações, mas as **propriedades** devem ser as mesmas. 
// ⚠️ obs: para os testes funcionarem, as propriedades do objeto devem possuir esses exatos nomes → `nome`, `idade`, `email`, `endereco.`

function anonimizaPessoa(pessoa) {
   // implemente sua lógica aqui
}

// Exercício 16

// Considere um array com o seguinte formato:
// [
// 	{ nome: "Pedro", idade: 20 },
// 	{ nome: "João", idade: 10 },
// 	{ nome: "Paula", idade: 12 },
// 	{ nome: "Artur", idade: 89 } 
// ]
// a) Faça uma função que retorne um novo array só com os adultos (pessoas com idade igual ou superior a 20)
// b) Faça uma função que retorne um novo array só com as crianças/adolescentes (pessoas com idade inferior a 20)

const arrayDePessoas = [
   { nome: "Pedro", idade: 20 },
   { nome: "João", idade: 10 },
   { nome: "Paula", idade: 12 },
   { nome: "Artur", idade: 89 } 
]

// Exercício 16, letra A

function maioresDe18(arrayDePessoas) {
   // implemente sua lógica aqui
}

// Exercício 16, letra B

function menoresDe18(arrayDePessoas) {
   // implemente sua lógica aqui
}

// Exercício 17, letra A

// Em todos os itens deste exercício, você terá que escrever uma função cuja entrada seja um array. Para testes, 
// considere: const array = [1, 2, 3, 4, 5, 6].

// a) Escreva uma função que retorne um array com as entradas multiplicadas por 2. Isto é [2, 4, 6, 8, 10, 12].
// b) Escreva uma função que retorne um array com as entradas multiplicadas por 2 e como strings. Isto é: ["2", "4", "6", "8", "12"]
// c) Escreva uma função que retorne um array de strings dizendo: "${número} é par/impar". Isto é: ["1 é impar", "2 é par", "3 é impar", 
// "4 é par", "5 é impar", "6 é par"]

function multiplicaArrayPor2(array) {
   // implemente sua lógica aqui
}

// Exercício 17, letra B

function multiplicaArrayPor2S(array) {
  // implemente sua lógica aqui
}

// Exercício 17, letra C

function verificaParidade(array) {
   // implemente sua lógica aqui
}

// Exercício 18

// Imagine que você trabalhe num parque de diversões, como desenvolvedor(a). As suas tarefas são sempre com o intuito de ajudar
//  a automação de alguns processos internos do parque. Uma das atrações principais dele é a montanha russa do terror. As filas são
//  muito grandes e todas as pessoas de várias idades insistem entrar no brinquedo, mesmo sabendo que não podem. Considere, então, 
//  essas pessoas:

const pessoas = [
   {nome: "Paula", idade: 12, altura: 1.8},
   { nome: "João", idade: 20, altura: 1.3},
   { nome: "Pedro", idade: 15, altura: 1.9},
   { nome: "Luciano", idade: 22, altura: 1.8},
   { nome: "Artur", idade: 10, altura: 1.2},
   { nome: "Soter", idade: 70, altura: 1.9}
]

//Exercício 18, letra A

function retornaPessoasAutorizadas(pessoas) {
   // implemente sua lógica aqui
}


// Exercício 18, letra B

function retornaPessoasNaoAutorizadas(pessoas) {
   // implemente sua lógica aqui
}

//Exercício 19
// Você foi contratado por um escritório médico para gerar e-mails automáticos para seus clientes,
// lembrando-os de sua consulta marcada; ou avisa-los que foi cancelada. Considere, então, essas consultas:

const consultas = [
  { nome: "João", genero: "masculino", cancelada: true, dataDaConsulta: "01/10/2019" },
  { nome: "Pedro", genero: "masculino", cancelada: false, dataDaConsulta: "02/10/2019" },
  { nome: "Paula", genero: "feminino", cancelada: true, dataDaConsulta: "03/11/2019" },
  { nome: "Márcia", genero: "feminino", cancelada: false, dataDaConsulta: "04/11/2019" }
  ]

function retornaEmailConsulta(consultas) {
  // implemente sua lógica aqui
}

//Exercício 20

// Agora, pediram para você ajudar a fazer uma funcionalidade de um banco digital. Antes de explicar a sua tarefa, você 
// precisa entender como eles guardam as contas dos clientes. Basicamente, eles salvam o nome do clientes, o saldo total e uma 
// lista contendo todas as compras realizadas pelo cliente. Veja abaixo:

const contas = [
  { cliente: "João", saldoTotal: 1000, compras: [100, 200, 300] },
  { cliente: "Paula", saldoTotal: 7500, compras: [200, 1040] },
  { cliente: "Pedro", saldoTotal: 10000, compras: [5140, 6100, 100, 2000] },
  { cliente: "Luciano", saldoTotal: 100, compras: [100, 200, 1700] },
  { cliente: "Artur", saldoTotal: 1800, compras: [200, 300] },
  { cliente: "Soter", saldoTotal: 1200, compras: [] }
]

function atualizaSaldo() {
  // implemente sua lógica aqui
}