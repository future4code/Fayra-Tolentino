// EXERCÍCIO 1

// Leia o código abaixo:


// const respostaDoUsuario = prompt("Digite o número que você quer testar")
// const numero = Number(respostaDoUsuario)

// if(numero % 2 === 0) {
//   console.log("Passou no teste.")
// } else {
//   console.log("Não passou no teste.")
// }

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

// let fruta = prompt("Escolha uma fruta")
// let preco
// switch (fruta) {
//   case "Laranja":
//     preco = 3.5
//     break;
//   case "Maçã":
//     preco = 2.25
//     break;
//   case "Uva":
//     preco = 0.30
//     break;
//   case "Pêra":
//     preco = 5.5
//     break; // BREAK PARA O ITEM c.
//   default:
//     preco = 5
//     break;
// }
// console.log("O preço da fruta ", fruta, " é ", "R$ ", preco)


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

// const numero = Number(prompt("Digite o primeiro número."))

// if(numero > 0) {
//     console.log("Esse número passou no teste")
//     let mensagem = "Essa mensagem é secreta!!!"
// }

// console.log(mensagem)


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
// **Exercícios de escrita de código**

// EXERCÍCIO 4

// Vamos criar programas que lidem com entradas do usuário! Faça um programa que pergunta ao usuário qual a idade dele e imprima
// no console se ele/ela pode dirigir (apenas maiores de idade).

// 1. Faça um `prompt` para receber a idade do usuário e guarde em uma variável.
// let idade = prompt("Insira sua idade");
// 2. Garanta que essa variável é do tipo `Number`, você deve usar o cast para number para isso.
// let numero = Number(idade);
// 3. Agora veja se essa idade do usuário corresponde à idade mínima que permite dirigir. Se sim, 
// imprima no console  `"Você pode dirigir"`, caso contrário, imprima `"Você não pode dirigir."`
// if(numero >=18){
//     console.log("Você pode dirigir");
// }else{
//     console.log("Você é menor de idade, portanto não pode dirigir =(!");
// }

// let idade = prompt("Insira sua idade");
// let numero = Number(idade);
// if(numero >=18){
//     console.log("Você pode dirigir");
// }else{
//     console.log("Você é menor de idade, portanto não pode dirigir =(!");
// }

// -------------------------------------------------------------------------------------------
// EXERCÍCIO 5

// Agora faça um programa que verifica que turno do dia um aluno estuda. Peça para digitar **M** (matutino) 
// ou **V** (Vespertino) ou **N** (Noturno). Imprima no console a mensagem "Bom Dia!", "Boa Tarde!" ou "Boa Noite!". Utilize o bloco `if/else`

// let turno = prompt("Digite seu turno!\nM para matutino\nV para vespertino\nN para noturno");
// if(turno = m || turno = M){
//     console.log("Bom dia! Bem Vind@ a mais um dia de aula!");
// }else if( turno = v || turno=V){
//     console.log("Boa tarde! Bem Vind@ a mais um dia de aula!");
// }else if( turno = n || turno=N){
//     console.log("Boa noite! Bem Vind@ a mais um dia de aula!");
// }else{
//     console.log("Insira um turno válido!")
// }

// let turno = prompt("Digite seu turno!\nM para matutino\nV para vespertino\nN para noturno");
// // let manha;
// // let tarde;
// // let noite;
// if(turno === "m"||turno ==="M"){
//     console.log("Bom dia! Bem Vind@ a mais um dia de aula!");
// }else if(turno === "t"||turno ==="T"){
//     console.log("Boa tarde! Bem Vind@ a mais um dia de aula!");
// }else if( turno === "n"||turno ==="N"){
//     console.log("Boa noite! Bem Vind@ a mais um dia de aula!");
// }else{
//     console.log("Insira um turno válido!")
// }


// let turno = prompt("Digite seu turno!\nM para matutino\nV para vespertino\nN para noturno");

// if(turno = "m"){
//     console.log("Bom dia! Bem Vind@ a mais um dia de aula!");
// }else if(turno = "v" ){
//     console.log("Boa tarde! Bem Vind@ a mais um dia de aula!");
// }else if( turno = "n"){
//     console.log("Boa noite! Bem Vind@ a mais um dia de aula!");
// }else{
//     console.log("Insira um turno válido!")
// }

// --------------------------------------------------------------------------
// EXERCÍCIO 6

// Repita o exercício anterior, mas utilizando a estrutura de `switch case` agora
// let turno = prompt("Digite seu turno!\nM para matutino\nV para vespertino\nN para noturno");
// switch(turno){
//     case(turno ="m"):
//         console.log("Bom dia! Bem Vind@ a mais um dia de aula!");
//     break
//     case(turno ="t"):
//         console.log("Boa tarde! Bem Vind@ a mais um dia de aula!");
//     break
//     case( turno = "n"):
//         console.log("Boa noite! Bem Vind@ a mais um dia de aula!");
//     break
//     default:
//         console.log("Insira um turno válido!")
// } => NO SWITCH NÃO PRECISA ATRIBUIR O VALOR DENTRO DELE, SÓ COLOCAR AS POSSIBILIDADES DE CASO

// CÓDIGO CERTO:
// let turno = prompt("Digite seu turno!\nM para matutino\nV para vespertino\nN para noturno");
// switch(turno){
//     case "m":
//         console.log("Bom dia! Bem Vind@ a mais um dia de aula!");
//     break
//     case "t":
//         console.log("Boa tarde! Bem Vind@ a mais um dia de aula!");
//     break
//     case "n":
//         console.log("Boa noite! Bem Vind@ a mais um dia de aula!");
//     break
//     default:
//         console.log("Insira um turno válido!")
// }
// -------------------------------------------------------------------------------------

// EXERCÍCIO 7

// Considere a situação: você vai no cinema com um amigo ou amiga, porém ele/ela só assiste filme do gênero fantasia ****e 
// se o ingresso está abaixo de 15 reais. Faça um código que pergunta ao usuário qual o gênero de filme que vão assistir e 
// outra pergunta sobre o preço do ingresso, então verifique se seu amigo ou amiga vai topar assistir o filme. Caso positivo, 
// imprima no console a mensagem: "Bom filme!", caso contrário, imprima "Escolha outro filme :("

// let genero = prompt("Qual o genêro do filme?");
// let preco = prompt("Quanto custa o ingresso?");
// let conversao = Number(preco);

// if (genero === "suspense" && conversao === 15){
//     console.log("Bom fime!");
// }else if (conversao > 15){
//     console.log("Ingreço caro, escolha outro filme!");
// }else if (genero !== "suspense"){
//     console.log("Genêro errado, escolha outro filme!");
// }else{
//     console.log("Coloque um genero e valor adequado");
// }

// ---------------------------------------------------------------------------------------------------------------
// DESAFIOS
// 1.Modifique o código do exercício 7 para, antes de imprimir a mensagem "Bom filme!", 
// pergunte ao usuário, pelo prompt que snack ele vai comprar (pipoca, chocolate, doces, etc) e 
// imprima no console as mensagens "Bom filme!" e "... com [SNACK]", trocando [SNACK] pelo que o usuário colocou no input.

let genero = prompt("Qual o genêro do filme?");
let preco = prompt("Quanto custa o ingresso?");
let conversao = Number(preco);
let snack = prompt("Qual snack você deseja?")

// if (genero === "suspense" && conversao === 15){
//     console.log("Bom fime!");
// }else if (conversao > 15){
//     console.log("Ingreço caro, escolha outro filme!");
// }else if (genero !== "suspense"){
//     console.log("Genêro errado, escolha outro filme!");
// }else{
//     console.log("Coloque um genero e valor adequado");
// }

if (conversao > 15){
    console.log("Ingreço caro, escolha outro filme!");
}else if (genero !== "suspense"){
    console.log("Genêro errado, escolha outro filme!");
}else if (genero === "suspense" && conversao === 15){
    console.log("Bom fime! E aproveite o seu " + snack);
}





