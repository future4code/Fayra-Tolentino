// 1ª PARTE EXERCICOS DE LEITURA DE CÓDIGO

// 1.Leia o código abaixo. Indique todas as mensagens impressas no console, SEM EXECUTAR o programa.

// const bool1 = true
// const bool2 = false
// Como está com símbolo de negação o valor de bool 13 será o oposto de 12, portanto true
// const bool3 = !bool2

// let resultado = bool1 && bool2
// console.log("a. ", resultado)
// false => apenas um é verdadeiro

// resultado = bool1 && bool2 && bool3
// console.log("b. ", resultado)
// false => não todos são verdadeiros, apenas dois

// resultado = !resultado && (bool1 || bool1)
// console.log("c. ", resultado)
// true => têm pelos menos um verdadeiro e é o ou uilizado

// console.log("e. ", typeof resultado)
// bolean 

// 2. Indique todas as mensagens impressas no console, SEM EXECUTAR o programa.
// let array
// console.log('a. ', array)
// undefined , pois você declarou e não atribuiu o valor

// array = null
// console.log('b. ', array)
// NaN => Não o resultado será null, pois você declarou a variável array e atribuiu o valor null

// array = [3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]
// console.log('c. ', array.length)
// 11 => Pois .leagth calcula o tamanho do array

// let i = 0
// console.log('d. ', array[i])
// 3  

// array[i+1] = 19
// console.log('e. ', array)

// [3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 19] => A resposta tá errada pois o número que está após o i ele vai ser a posição do número que 
// vc deseja substituir no array [3, 19, 5, 6, 7, 8, 9, 10, 11, 12, 13]


// const valor = array[i+6]
// console.log('f. ', valor)

// [3, 4, 5, 6, 7, 8] => A resposta está errada, pois nesse caso vc declarou a variável valor, e atribuiu a ela um número que está no array
// na posição 6.

// ----------------------------------------------------------------------------------------------

// 2.ESCRITA DE CÓDIGO
// 1.Faça um programa que:
// a. Pergunte a idade do usuário

// let idadeUsuario = prompt("Qual a sua idade?");

// b. Pergunte a idade do seu melhor amigo ou da sua melhor amiga

// let idadeMelhorAmiga = prompt("Qual a idade  da sua melhor amiga?");

// c. Imprima na tela a seguinte mensagem: "Sua idade é maior do que a do seu melhor amigo?", seguido pela resposta (true ou false)

// let maior = idadeUsuario > idadeMelhorAmiga;
// console.log("Sua idade é maior do que a do seu melhor amigo? " + maior);

// d. Imprima na tela a diferença de idade (não tem problema se sair um número negativo)
// let diferenca = idadeMelhorAmiga - idadeUsuario;
// console.log(" A diferença de idade entre você e o seu melhor amigo é : " , diferenca);

// ----------------------------------------------------------------------------------------------
//2. Faça um programa que:
// a. Peça ao usuário que insira um número par.
// let numeroPar = Number(prompt("Insira um numero par!"));

// b. Imprima na tela o resto da divisão desse número por 2.
// let resto = numeroPar % 2;
// console.log("O resto da divisão desse número por 2 é : " , resto);

// c. Teste o programa com diversos números pares. Você notou um padrão? Escreva em um comentário de código.
// O resto da divisão de um número par por dois, sempre será igual a 0, pois para um número ser par ele deve:
// ser divisível por 2 e ter resto zero.
// d. O que acontece se o usuário inserir um número ímpar? Escreva em um comentário de código.
// Ao executar o mesmo programa com um número impar, obtêm-se o resto 1

// ----------------------------------------------------------------------------------------------------
// 3. Faça um programa, seguindo os passos:
// a. Crie um array vazio e guarde-o em uma variável, chamada `listaDeTarefas`
// let listaDeTarefas = [];
// b. Pergunte ao usuário 3 tarefas que ele precise realizar no dia e armazene-as, uma por uma, no array
// let tarefa1 =prompt("Qual a primeira tarefa que você deseja executar? ");
// let tarefa2 =prompt("Qual a segunda tarefa que você deseja executar? ");
// let tarefa3 =prompt("Qual a terceira tarefa que você deseja executar? ");
// let listaDeTarefas= [tarefa1,tarefa2,tarefa3];

// c. Imprima o array na tela
// console.log(listaDeTarefas);
// d. Peça ao usuário que digite o **índice** de uma tarefa que ele já realizou: 0, 1 ou 2 
// let indice= prompt("Digite o indice da tarefa que você já realizou (0,1 ou 2): ");
// e. Remova da lista o item de índice que o usuário escolheu.
// let remover= array.splice(indice,1);
// f. Imprima o array na tela
// console.log(listaDeTarefas);

// let listaDeTarefas1 = [];
// let tarefa01 =prompt("Qual a primeira tarefa que você deseja executar? ");
// let tarefa02 =prompt("Qual a segunda tarefa que você deseja executar? ");
// let tarefa03 =prompt("Qual a terceira tarefa que você deseja executar? ");
// let listaDeTarefas1= [tarefa01,tarefa02,tarefa03];
// console.log(listaDeTarefas1);
// let indice1= prompt("Digite o indice da tarefa que você já realizou (0,1 ou 2): ");
// let remover1= listaDeTarefas1.splice(indice1,1);
// console.log(listaDeTarefas1);

// ------------------------------------------------------------------------------------
// 4. Faça um programa que pergunte ao usuário seu nome e seu e-mail. Em seguida, 
// imprima na tela a seguinte mensagem:
// O e-mail `emailDoUsuario` foi cadastrado com sucesso. Seja bem-vinda(o), `nomeDoUsuario`!
// let usuario = prompt("Qual o seu nome?");
// let email = prompt("Qual é o seu e-mail? ");
// console.log("O e-mail " + email + "foi cadastrado com sucesso. Seja bem vind@, " + usuario);

// --------------------------------------------------------------------------------------

