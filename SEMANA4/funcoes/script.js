// ------------------------------------------------------- EXERCÍCIO LEITURA DE CÓDIGO -------------------------------------------
// 1. function minhaFuncao(variavel) {
// 	return variavel * 5
// }

// console.log(minhaFuncao(2))
// console.log(minhaFuncao(10))

// a. O que vai ser impresso no console?

// Resposta: No console será impresso 5 e 50

// b. O que aconteceria se retirasse os dois console.log e simplesmente invocasse a função minhaFuncao(2)
//  e minhaFuncao(10)? O que apareceria no console?

// Resposta: Caso simplesmente invocasse a função iria aparecer o 5 e o 10

// ***************************************************************************************************************************************************

// 2.let arrayDeNomes = ["Darvas", "Caio", "João", "Paulinha", "Chijo"];

// const outraFuncao = function(array) {
// 	for (let i = 0; i < 2; i++) {
// 		console.log(array[i])
// 	}
// }

// outraFuncao(arrayDeNomes)


// a. Explicite quais são as saídas impressas no console;

// Resposta: Ele imprimirá todos os nomes dentro do array => Correção, ele não imprimirá todos os nomes dentro do array,mas sim 
// só  Darvas e Caio.


// b. Se arrayDeNomes mudasse de valor para ["Amanda", "Caio"], o que vai ser impresso no console?
// Resposta: Irá dar erro => Correção, ela imprimirá A e M, ou seja os dois primeiros idices do nome da Amanda.

// ************************************************************************************************************************************************

// 3. O código abaixo mostra uma função que recebe um array e devolve outro array. Explique em poucas palavras o que ela faz 
// e sugira um nome melhor para ela!

// const metodo = (array) => {
//     let arrayFinal = [];
  
//     for (let x of array) {
//           if (x % 2 === 0) {
//           arrayFinal.push(x * x)
//           }
//     }
  
//     return arrayFinal;
//   }

// Resposta: Esse array, fornecerá um número ao quadrado caso ele seja par. Um melhor nome para o mesmo, seria parQuadrado.

// ********************************************************************************************************************************
// ------------------------------------------------------- EXERCÍCIO ESCRITA DE CÓDIGO -------------------------------------------

// 4. Escreva as funções explicadas abaixo:

// a. A função não deve receber nenhum parâmetro e deve imprimir uma mensagem falando algumas informações sobre você, como: 
// "Eu sou Caio, tenho 23 anos, moro em São Paulo e sou estudante.
// Troque o nome, idade, cidade e se é estudante ou não por informações sobre você. Lembrando que a função não possui entradas, 
// apenas imprimir essa mensagem.

// b.Agora escreva uma função que receba 4 parâmetros que correspondem às informações de uma pessoa: o nome (string), a idade (number),
//  a cidade (string) e um boolean que representa se é estudante ou não. Ela deve retornar uma string que unifique todas as informações 
// da pessoa em uma só mensagem com o template:
// Eu sou [NOME], tenho [IDADE] anos, moro em [ENDEREÇO] e [SOU/NÃO SOU] estudante.

// function biografia(){
//     console.log("Eu sou a Fay, tenho 26 anos, moro em Osasco e sou estudante");
// }

// let biografia = ()=> {
//     console.log("Eu sou a Fay, tenho 26 anos, moro em Osasco e sou estudante");
// }

// b .
    let nome = prompt("Qual o seu nome?");
    let idade = prompt("Qual a sua idade?");
    let endereco = prompt("Digite o seu endereço : ");
    let boolean = confirm("Você é estudante ? Okay para sim, cancelar para não");

function identidade (nome,idade, endereco, boolean){
    if (boolean == true){
        console.log("Sou estudante");
    }else{
        console.log("Eu não sou estudante!")
    }
}
    console.log(" Eu sou ", nome, "tenho ", idade , ", " , "moro em ", endereco , " e ", boolean)

// ------------------------------------------------------- ----DESAFIOS DE CÓDIGO ------------------------------------------------