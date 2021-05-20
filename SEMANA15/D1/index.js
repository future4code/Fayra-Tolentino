// **************************************** Exercicio 1 ************************************************

// a) Responda como comentário no seu código: como fazemos para acessar os parâmetros passados na 
// linha de comando para o Node?

// 1º Criar uma constante que receba o argumento desejado com process.argv e com o slice colocar o 
// número do indice que será recebido nesse argumento, lembrando que: O indice 0 é o próprio node, e 
// indice 1 é o arquivo que você deseja rodar;

// 2º Declarar uma constante com o parâmetro que deseja receber e atribuir a ela, 
// o valor da constante anterior;

// 3º No terminal, rodar : node nodeDoArquivo.extensão Valor do argumento

// const argumento = process.argv.slice(2)
// const [nome] = argumento
// if(nome== undefined){
//     console.error('Favor digitar o nome do usuário!')
//     process.exit(0)
// }
// console.log(`Seja bem-vind@ ${nome}`)


// b) Crie um programa que receba seu nome e sua idade. Após receber estes valores, 
// imprima no console uma mensagem que siga a seguinte estrutura:
// "Olá, (Nome)! Você tem (sua idade) anos."


// const argumentoNome = process.argv.slice(2)
// const[nome] = argumentoNome

// const argumentoIdade = process.argv.slice(3)
// const [idade] = argumentoIdade

// if(nome== undefined){
//         console.error('Favor digitar o nome do usuário!')
// } else if (idade == undefined){
//     console.error('Favor digitar a idade do usuário!')
// } 
// console.log(`Seja bem-vind@ ${nome} ! Você têm ${idade} anos`)

// c) Altere o programa acima para que mostre também a sua idade daqui a sete anos.

// const nome= process.argv[2]
// const idade = process.argv[3]
// const idadeFutura = Number(idade) + 7

// if(nome== undefined){
//         console.error('Favor digitar o nome do usuário!')
// } else if (idade == undefined){
//     console.error('Favor digitar a idade do usuário!')
// } 
// console.log(`Seja bem-vind@ ${nome} ! Você têm ${idade} anos , em 7 anos você terá ${idadeFutura}`)

// **************************************** Exercicio 2 ************************************************
// Crie uma aplicação Node que recebe uma string representando uma operação matemática e dois valores numéricos. 
// O retorno deverá ser o resultado da operação selecionada utilizando os 2 valores fornecidos.

// const valor1 = process.argv[2]
// const valor2 = process.argv[3]
// const operacao = process.argv[4]
// let result = operacao

// switch(operacao){
// 	case "soma":
// 		result = Number(valor1)+ Number(valor2)
// 		break;
// 	case "sub":
//         result= Number(valor1)-Number(valor2)
// 		break;
//     case "mult":
//         result = Number(valor1)*Number(valor2)
//         break;
//     case "div":
//         result = Number(valor1)/Number(valor2)
//         break;
// }

//     console.log(`O primeiro valor é ${valor1}, o segundo valor é ${valor2}, o resultado da operação é ${result}`)

// **************************************** Exercicio 3 ************************************************

// Crie uma aplicação Node que receba uma string representando uma tarefa. O programa deve adicionar a nova 
// tarefa em uma variável que represente uma lista de tarefas. A lista de tarefas pode estar criada antes da 
// execução do código. Após adicionar o item à lista, exiba a lista atualizada.


const tarefa = process.argv[2]
const listaTarefa = ['warm-up']
let addTarefa = listaTarefa.push(tarefa)

console.log(`Suas tarefas são ${listaTarefa}`)

// **************************************** Exercicio 4 ************************************************


