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
//     let nome = prompt("Qual o seu nome?");
//     let idade = prompt("Qual a sua idade?");
//     let endereco = prompt("Digite o seu endereço : ");
//     let boolean = confirm("Você é estudante ? Okay para sim, cancelar para não");

// function identidade (nome,idade, endereco, boolean){
//     if (boolean == true){
//         console.log("Sou estudante");
//     }else{
//         console.log("Eu não sou estudante!")
//     }
// }
//     console.log(" Eu sou ", nome, "tenho ", idade , ", " , "moro em ", endereco , " e ", boolean)

// *******************************************************************************************************************************************

// 5.Escreva as funções explicadas abaixo:

// a . Escreva uma função que receba 2 números como parâmetros, e, dentro da função, faça a soma das duas entradas e 
// retorne o resultado. Invoque a função e imprima no console o resultado.
// b . Faça uma função que recebe 2 números e retorne um booleano que informa se o primeiro número é maior ou igual ao segundo.
// c. Faça uma função que recebe uma mensagem (string) como parâmetro e imprima essa mensagem 10 vezes. (não é permitido escrever 
// 10 console.log dentro da função, use outra estrutura de código para isso).

// a .
function soma(n1,n2){
   let operacao = n1 +n2;
   return operacao
}

// b. 
function confirmacao (n3,n4){
    if(n3 >= n4){
        console.log("O primeiro número ", n3, "é maior que ", n4);
    }else {
        console.log("O primeiro número ", n3, " não é maior que ", n4);
    }
}

// c . ?????? (COMO FAZER)
function repeticao (texto){
    let texto = "Essa sentença se repetirá 10 vezes";
    return (texto*10)
}

let texto = "Essa sentença se repetirá 10 vezes";
function repeticao (texto){
    for (i = 0; i < 11; i++){
        return texto *10
    }
}

// ********************************************************************************************************************************

// 6. Para os itens a seguir, considere o seguinte array para os seus testes:
const arrayTeste = [10, 23, 45, 78, 90, 52, 35, 67, 84, 22]

// a. Escreva uma função que receba um array de números e devolva a quantidade de elementos nele;
// b. Escreva uma função que receba um número e devolva um booleano indicando se ele é par ou não;
// c. Escreva uma função que receba um array de números e devolva a quantidade de números pares dentro dele;
// d. Reescreva seu código anterior (do item c) de tal forma que ele utilize a função do item b para verificar se o número é par;

// a . 
function quantidade(){
    const arrayTeste = [10, 23, 45, 78, 90, 52, 35, 67, 84, 22]
} console.log(arrayTeste.length)

// b. 
function validacao(){
    const arrayTeste = [10, 23, 45, 78, 90, 52, 35, 67, 84, 22]
    for (let i = 0; i < arrayTeste.length; i++) {
        console.log(array[i])
}

function validacao(array){
    const arrayTeste = [10, 23, 45, 78, 90, 52, 35, 67, 84, 22];
    for (let x of arrayTeste) {
		if (x % 2 === 0) {
	    console.log ("é par")
		}
  }
}

function validacao(array){
    const arrayTeste = [10, 23, 45, 78, 90, 52, 35, 67, 84, 22];
    for (let i = 0; i < arrayTeste.length; i++)  {
		
}
// ------------------------------------------------------- ----DESAFIOS DE CÓDIGO ------------------------------------------------