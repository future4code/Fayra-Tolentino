// 1 - Analise o programa abaixo e diga o que será impresso no console, SEM EXECUTAR o programa.
// a = 10
// b = 10

// console.log(b)

// b = 5
// console.log(a, b)

// Resposta: 10, 5

// 2.Analise o programa abaixo e diga o que será impresso no console, SEM EXECUTAR o programa.

// a = 10
// b = 20
// c = a
// b = c
// a = b

// console.log(a, b, c)

// Resposta: 10,10,10

// ----------------------------------------------------------------------------------------------------------

// **Exercícios de escrita de código**

// 1. Construa um programa, seguindo os seguintes passos:

    // a) Declare uma variável para armazenar um nome, sem atribuir um valor.
    var nome;

    // b) Declare uma variável para armazenar uma idade, sem atribuir um valor.
    var idade;

    // c) Imprima na tela o tipo dessas variáveis que acabou de criar, usando o comando `typeof`.
    typeof nome
    typeof idade

    // d) Reflita: por que esse tipo foi impresso? Escreva a resposta em um comentário de código.
    // Quando aplicamos typeof, o valor retornado será undefined. Isso acontece pois os valores de nome e idade apenas foram 
    // declarados e não atribuidos, como undefined é uma variável primitiva que retorna a falta de valor surge esse resultados.

    // e) Pergunte ao usuário seu nome e sua idade, atribuindo esses dois valores às variáveis que acabou de criar.
    nome = prompt("Insira seu nome");
    idade = prompt ("Insira sua idade");
    console.log(nome);
    console.log(idade);

    // Dica: se você receber um erro de código nessa etapa, reflita sobre o tipo de declaração que utilizou.

    // f) Novamente, imprima na tela o tipo dessas variáveis. O que você notou? Escreva em um comentário de código.
    // Resposta: Ao utilizar typeof, o falor retornado é uma String, pois os valores foi atribuido a partir do resultado do prompt

    // g) Para finalizar, imprima na tela a mensagem: "Olá `nome`,  você tem `idade` anos". Onde `nome` e `idade` são os valores 
    // que o usuário inseriu
    console.log("Olá " + nome + " você tem " + idade + " anos");
    console.log("Olá " ,  nome , " você tem " , idade , " anos");

    // Dica: para imprimir mais de um valor na mesma linha, você pode usar essa sintaxe:
    // `console.log(valor1, valor2)`

    // CÓDIGO FINAL
    var nome;
    var idade;
    // typeof nome
    // typeof idade
    nome = prompt("Insira seu nome");
    idade = prompt ("Insira sua idade");
    console.log(nome);
    console.log(idade);
    // typeof nome
    // typeof idade
    console.log("Olá " + nome + " você tem " + idade + " anos");
    // ou
    console.log("Olá " ,  nome , " você tem " , idade , " anos");

// -----------------------------------------------------------------------------------------------------------

// 2. Faça um programa que faça 5 perguntas para o usuário (pode ser criativo aqui).
//  Imprima-as com as respostas no console da seguinte forma:
var pais;
var dias;
var quantidadeViajantes;
var moeda;
var cpf;
var moedaPartida;

cpf = prompt("Digite seu CPF");
pais = prompt("Para qual país deseja viajar?");
dias = prompt("Quantos dias deseja viajar?");
quantidadeViajantes= prompt("Quantos viajantes são?");
moedaPartida = prompt("Qual a moeda do país de partida?");
moeda = prompt("Qual a moeda do país de destino?");

console.log("Seu CPF é  " , cpf, " seu país de destino é " , pais , ", você ficará " , dias , "dias", "em ",
 quantidadeViajantes , " viajante(s)", ". Sua moeda local é ", moedaPartida, " porém você deverá levar ", moeda);

// -----------------------------------------------------------------------------------------------------------------------

// 3.Faça um programa que contenha um array com 5 das suas comidas preferidas, armazenado em uma variável. Em seguida, siga os passos:
var comidasFavoritas = ["lasanha de beringela","manjar" , "suco de laranja", "canjica", "salada de tomate"]
// a) Imprima na tela o array completo
console.log(comidasFavoritas);

// b) Imprima na tela a mensagem "Essas são as minhas comidas preferidas: ", seguida por cada uma das comidas, **uma embaixo da outra**.
console.log("Essas são minhas comidas favoritas: ");
console.log(comidasFavoritas[0]);
console.log(comidasFavoritas[1]);
console.log(comidasFavoritas[2]);
console.log(comidasFavoritas[3]);
console.log(comidasFavoritas[4]);


// c) Aqui vai um desafio: pergunte ao usuário uma comida preferida. Troque a segunda comida da sua lista pela inserida pelo usuário.
// Imprima na tela a nova lista
var comidasFavoritas = ["lasanha de beringela","manjar" , "suco de laranja", "canjica", "salada de tomate"]
var mudarComida = prompt ("Qual sua comida favorita?")
console.log("Essas são nossas comidas favoritas: ");
console.log(comidasFavoritas[0]);
console.log(mudarComida);
console.log(comidasFavoritas[2]);
console.log(comidasFavoritas[3]);
console.log(comidasFavoritas[4]);

// --------------------------------------------------------------------------------------------------------------------------------------
// 4. Faça um programa que contenha um array com 3 perguntas de Sim ou Não, armazenado em uma variável. Por exemplo: 
// "Você está usando uma roupa azul hoje?". Depois, siga os passos:

var perguntas = ["Você tâm mais de 20 anos ?", "Você já têm passaporte", "Você é brasileiro?"];
// console.log(perguntas);

// b-)Faça um programa que contenha um array com 3 perguntas de Sim ou Não, armazenado em uma variável. 
// Por exemplo: "Você está usando uma roupa azul hoje?". Depois, siga os passos:
var rep1 = prompt( perguntas[0],"Digite true ou false");
var rep2 = prompt(perguntas[1], "Digite true ou false");
var rep3 = prompt(perguntas[2],"Digite true ou false");
var resposta = [rep1,rep2,rep3];

var resposta = [true, true, true];

// console.log(resposta);

// c. Faça um programa que contenha um array com 3 perguntas de Sim ou Não, armazenado em uma variável. 
// Por exemplo: "Você está usando uma roupa azul hoje?". Depois, siga os passos:
console.log(perguntas[0], resposta[0]);
console.log(perguntas[1], resposta[1]);
console.log(perguntas[2], resposta[2]);





