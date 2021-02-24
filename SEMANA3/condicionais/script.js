// EXERCÍCIO 1

// Leia o código abaixo:


const respostaDoUsuario = prompt("Digite o número que você quer testar")
const numero = Number(respostaDoUsuario)

if(numero % 2 === 0) {
  console.log("Passou no teste.")
} else {
  console.log("Não passou no teste.")
}

// Explique o que o código faz. Qual o teste que ele realiza? 
// Para que tipos de números ele imprime no console "Passou no teste"? Para que tipos de números
// a mensagem é "Não passou no teste"?

// Resposta:

// O código a cima ele solicita ao usuário por meio de um prompt, um número que o usário deseja testar. 
// após essa etapa, o algoritmo transforma em número, a string obtida pelo o input do usuário, verifica se o resto 
// do número é 0. Se sim, o número  dado pelo usuário passou no TextDecoderStream. Se não, o número do usuário não passou
// no teste .

// ----------------------------------------------------------------------------------------------------------------------------------

// EXERCÍCIO 2

// O código abaixo foi feito por uma pessoa desenvolvedora, contratada para automatizar algumas tarefas de um supermercado. 
// Veja abaixo:

let fruta = prompt("Escolha uma fruta")
let preco
switch (fruta) {
  case "Laranja":
    preco = 3.5
    break;
  case "Maçã":
    preco = 2.25
    break;
  case "Uva":
    preco = 0.30
    break;
  case "Pêra":
    preco = 5.5
    break; // BREAK PARA O ITEM c.
  default:
    preco = 5
    break;
}
console.log("O preço da fruta ", fruta, " é ", "R$ ", preco)


// a. Para que serve o código acima?

// O código acima, é utilizado para automatizar o processo de consulta do preço de uma frunta no supermercado,onde o 
// usuário escolhe por meio de prompt  uma fruta, e se a frutar for : laranja, maçã, uva, pêra,  já há um preço pré estabelecido,
// se não for uma dessas a fruta custará 5 reais .

// b. Qual será a mensagem impressa no console, se o valor de fruta for `"Maçã"`?
// A mensagem será : O preço da fruta Maçã é, R$ 2.25

// c. Considere que um usuário queira comprar uma `Pêra`, qual seria a mensagem impressa no console se retirássemos o 
// `break` que está logo acima do `default` (o `break` indicado pelo comentário "BREAK PARA O ITEM c.")?
// Caso retire o break antes do default, o valor da fruta será 5 RadioNodeList, pois ele irá para a próxima condição e não
// parará.

// -------------------------------------------------------------------------------------------------------------
// EXERCÍCIO 3

// Leia o código abaixo:

const numero = Number(prompt("Digite o primeiro número."))

if(numero > 0) {
    console.log("Esse número passou no teste")
    let mensagem = "Essa mensagem é secreta!!!"
}

console.log(mensagem)


// a. O que a primeira linha está fazendo?
// A primeira linha está convertendo a variável recebida no prompt, de string para número.

// b. Considere um usuário digitou o número 10. Qual será a mensagem do terminal? E se fosse o número -10?
// Ao digitar o 10, irá aparecer para o usuário a seguinte mensagem :"Esse número passou no teste", pois a condição é que o número
// seja positivo. Ao digitar -10, a mensagem que irá aparecer é  a mensagem do segundo console.log, pois a variável não cumpriu
// com as condições solicitadas

// c. Haverá algum erro no console? Justifique usando os conceitos de bloco ou escopo.
// Sim, haverá um erro no console, pois a variavél mensagem está no escopo da filha e não globalThis, portanto não será lida 
// pelo que está a fora.

// -------------------------------------------------------------------------------------------------------------------
